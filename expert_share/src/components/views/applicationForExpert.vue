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
            <FormItem label="请输入您的真实姓名：" label-position="top">
              <Input v-model="formData.name" placeholder="please enter your name" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="请输入您的身份证号:" label-position="top">
              <Input v-model="formData.IDnumber" placeholder="please enter your IDnumber" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="请输入您所在的研究机构:" label-position="top">
              <Input v-model="formData.institution" placeholder="please enter your institution" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="30">
            <FormItem label="请上传您的身份证正反面照片：" label-position="top">
              <Upload
                multiple
                action="//jsonplaceholder.typicode.com/posts/">
                <Button icon="ios-cloud-upload-outline">Upload files</Button>
              </Upload>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="30">
            <FormItem label="请上传您在所属研究机构的有关证件照片：" label-position="top">
              <Upload
                multiple
                action="//jsonplaceholder.typicode.com/posts/">
                <Button icon="ios-cloud-upload-outline">Upload files</Button>
              </Upload>
            </FormItem>
          </Col>
        </Row>
      </Form>
      <div class="demo-drawer-footer">
        <Button style="margin-right: 8px" @click="value3 = false">Cancel</Button>
        <Button type="primary" @click="value3 = false">Submit</Button>
      </div>
    </Drawer>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value3: false,
        styles: {
          height: 'calc(100% - 55px)',
          overflow: 'auto',
          paddingBottom: '53px',
          position: 'static'
        },
        formData: {
          name: '',
          IDnumber: '',
          institution: '',
        },
      }
    }
  }
</script>
<style>
  .demo-drawer-footer{
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
