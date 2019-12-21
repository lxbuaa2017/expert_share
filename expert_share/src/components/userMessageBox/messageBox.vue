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
        <MenuGroup title="联系人列表">
          <MenuItem>
            <div @click="newReceiver" v-if="showNewReceiver == false">
              新联系人
            </div>
            <div v-else>
              <Input @on-enter="sendNewMessage" v-model="newReceiverName" placeholder="回车输入新联系人名" />
            </div>
          </MenuItem>
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
              {{mes.date.replace(/T/, " ").replace(/Z/, "")}}
            </div>
            <div v-if="mes.receiver===username" class="others">
              {{mes.content}}
            </div>
            <div v-else class="mime">
              {{mes.content}}
            </div>
          </div>
        </Scroll>
      </Row>
      <Row>
        <Input ref="messageBox" :rows=4 @on-enter="sendMessage" v-model="value" type="textarea" placeholder="按下Enter键发送" style="padding: 10px 30px 30px 30px" />
      </Row>
    </Col>
  </Row>
</template>

<script>
  export default {
    name: "messageBox",
    created() {
      this.message.sender = this.username;
      if (this.nowName != null)
        for (let mes of this.messageList) {
          if (this.nowName === mes.name) {
            this.change(mes);
            break;
          }
        }
    },
    data() {
      return {
        newReceiverName: '',
        value: '',
        nowBox: {},
        message: {
          sender: null,
          receiver: null,
          content: ''
        },
        showNewReceiver: false,
      }
    },
    props: ['messageList', 'username', 'nowName'],
    methods: {
      change: function (mes) {
        this.showNewReceiver = false;
        this.nowBox = mes.record;
        this.message.receiver = mes.name;
      },
      test: function () {
      },
      sendMessage: function () {
        if (this.message.receiver == null) {
          this.$Notice.open({
            title: '请选择一个私信联系人'
          });
          this.value = null;
        }
        else if (this.value.length <= 1) {
          this.$Notice.open({
            title: '发送消息不能为空'
          });
          this.value = null;
        }
        else {
          this.message.content = this.value;
          this.$nextTick(()=>{
            this.$axios.post('api/post_message/', this.message).then((res)=>{
              if(res.data.success === true) {
                this.value = null;
                this.$Notice.open({
                  title: '发送成功'
                });
                this.$emit('refresh', this.message.receiver);
              }
              else {
                this.$Notice.open({
                  title: '发送失败'
                });
              }
            });
          });
        }
      },
      newReceiver() {
        this.showNewReceiver = true;
        this.nowBox = {};
      },
      sendNewMessage() {
        this.$nextTick(()=>{
          let json_str={"username": this.message}
          this.$axios.post('api/if_user_exist/', JSON.stringify(json_str)).then((res)=>{
            console.log(res.data)
            if(res.data.exist === "1") {
              console.log(1);
              this.message.receiver = this.newReceiverName;
              this.$refs.messageBox.focus();
            }
            else {
              this.$Notice.open({
                title: '联系人不存在'
              });
            }
          });
        });
      }
    }
  }
</script>
