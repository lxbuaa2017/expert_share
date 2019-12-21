<template>
  <div>
    <Button @click="value3 = true" type="primary" size="large">认领专家</Button>
    <Drawer
      title="认领专家"
      v-model="value3"
      width="500"
      :mask-closable="false"
      :styles="styles"
    >
      <Form :model="formData">
        <Row>
          <Col span="12">
            <!--            username:'',-->
            <!--            real_name: '',-->
            <!--            ID_number: '',-->
            <!--            institution: '',-->
            <!--            credentials_url:'',-->
            <!--            author:'',-->
            <!--            unit:''-->
            <FormItem label="请输入您的真实姓名：" label-position="top">
              <Input v-model="formData.real_name" placeholder="please enter your name"/>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="请输入您的身份证号:" label-position="top">
              <Input v-model="formData.ID_number" placeholder="please enter your IDnumber"/>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="请输入您所在的研究机构:" label-position="top">
              <Input v-model="formData.institution" placeholder="please enter your institution"/>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="30">
            <FormItem label="请上传您在所属研究机构的有关证件照片，不超过1M：" label-position="top">

              <el-upload
                style="text-align: left"
                list-type="picture-card"
                :http-request="uploadImgs"
                action="10.251.252.10:8081/api/file/uploadImage"
                :file="file"
                :file-list="fileList"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
            </FormItem>
          </Col>
        </Row>
      </Form>
      <div class="demo-drawer-footer">
        <Button style="margin-right: 8px" @click="value3 = false,cancel()">Cancel</Button>
        <Button type="primary" @click="value3 = false,commit()">Submit</Button>
      </div>
    </Drawer>
  </div>
</template>
<script>
  import {getCookie} from "../../assets/js/cookie";

  export default {
    props: ['username', 'author', 'unit'],
    data() {
      return {
        value3: false,
        styles: {
          height: 'calc(100% - 55px)',
          overflow: 'auto',
          paddingBottom: '53px',
          position: 'static'
        },
        formData: {
          user_id: '',
          real_name: '',
          ID_number: '',
          institution: '',
          credentials_url: '',
          author: '',
          unit: ''
        },
      }
    },
    methods: {
      uploadImgs(file) {
        console.log('上传成功')
        let param = new FormData()
        param.append('file', file.file)
        this.$axios({
          method: 'post',
          url: '/spring/file/uploadImage/',
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          data: param,
          withCredentials: true
        }).then(res => {
          console.log(res.data)
          this.formData.credentials_url = res.data
        })
      },
      commit() {
        let name = getCookie("username")
        if (name === '') {
          alert('请登录！')
          return
        }
        let data = {username: name}
        let data_str = JSON.stringify(data)
        console.log(data_str)
        this.$nextTick(() => {
            this.$axios.post('/api/get_id_by_name/', data_str).then((res) => {
              this.formData.user_id = res.data.id
              console.log(this.formData.user_id)
              console.log(res.data.id)
              this.formData.author = this.author
              this.formData.unit = this.unit
              let json_str = JSON.stringify(this.formData)
              console.log(json_str)
              this.$axios.post('/api/application_for_expert/', json_str, {
                headers: {
                  'content-type': 'application/json'
                }, withCredentials: true
              }).then((res) => {
                alert("申请成功，请等待审核")
              })
            })
          }
        )
        // this.formData.user_id='';this.formData.name='';this.formData.ID_number='',this.formData.institution='';
      },
      cancel() {
        this.formData.user_id = '';
        this.formData.name = '';
        this.formData.ID_number = '', this.formData.institution = '';
      }
    }
  }
</script>
<style>
  .demo-drawer-footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid #e8e8e8;
    padding: 10px 16px;
    text-align: right;
    background: #fff;
  }
</style>
