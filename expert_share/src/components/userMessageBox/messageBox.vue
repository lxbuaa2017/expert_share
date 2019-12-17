<style scoped>
  .others {
    padding: 10px;
    background: #F5F5F5;
    text-align: left;
    word-wrap: break-word;
    word-break: break-all;
    border-radius: 5px;
    float: left;
    max-width: 40%;
  }
  .mime {
    padding: 10px;
    background: #9CEB6B;
    text-align: left;
    word-wrap: break-word;
    word-break: break-all;
    border-radius: 5px;
    float: right;
    max-width: 40%;
  }
  .all {
    padding: 10px;
  }
</style>
<template>
  <Row>
    <Col span=5>
      <Menu theme="light" width="auto">
        <MenuGroup title="联系人">
          <MenuItem v-for="(mes, index) in messageList" :name=mes.name :key="index">
            <div @click="change(mes)">
              {{mes.name}}
            </div>
          </MenuItem>
        </MenuGroup>
      </Menu>
    </Col>
    <Col span=19>
      <Row>
        <Scroll :on-reach-top="test" height=400 style="padding: 30px 30px 10px 30px">
          <div v-for="(mes, index) in nowBox" :key="index" class="all">
            <div style="clear: both">
              {{mes.date}}
            </div>
            <div v-if="mes.reciever===username" class="others">
              {{mes.content}}
            </div>
            <div v-else class="mime">
              {{mes.content}}
            </div>
          </div>
        </Scroll>
      </Row>
      <Row>
        <Input :rows=4 @on-enter="sendMessage" v-model="value" type="textarea" placeholder="按下Enter键发送" style="padding: 10px 30px 30px 30px" />
      </Row>
    </Col>
  </Row>
</template>

<script>
  export default {
    name: "messageBox",
    created() {
      this.$nextTick(()=>{
        this.$axios.get('api/get_chat_list?name='+this.username).then((res)=>{
          this.messageList=res.data
        })
      });
      this.message.sender = this.username;
    },
    data() {
      return {
        value: '',
        username: 'cxm',
        messageList: [
          {
            name:"abc",
            record:[
              {
                date:"2019-12-17",
                sender:"abc",
                reciever:"cxm",
                content:"Hello World!"
              }
            ]
          }
        ],
        nowBox: {},
        message: {
          sender: null,
          reciever: null,
          content: ''
        }
      }
    },
    methods: {
      change: function (mes) {
        this.nowBox = mes.record;
        this.message.reciever = mes.name;
      },
      test: function () {
      },
      sendMessage: function () {
        console.log(this.value);
        if (this.message.reciever == null) {
          this.$Notice.open({
            title: '请选择一个私信联系人'
          });
          this.value = null;
        }
        else if (this.value == null) {
          console.log("nmsl")
          this.$Notice.open({
            title: '发送消息不能为空'
          });
          this.value = null;
        }
        else {
          this.message.content = this.value;
          console.log(this.message);
          this.$nextTick(()=>{
            this.$axios.post('api/post_message', this.message).then((res)=>{
              console.log(res.data)
              if(res.data.success === true) {
                this.value = null;
                this.$Notice.open({
                  title: '发送成功'
                });
              }
              else {
                this.$Notice.open({
                  title: '发送失败'
                });
              }
            })
          });
        }
      }
    }
  }
</script>
