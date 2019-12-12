<style>
  .row {
    padding-bottom: 3px;
  }
  .rowTitle {
    font-family: "Microsoft YaHei";
    font-size: 22px;
    font-weight: 400;
    color: #417DC9;
    line-height: 40px;
  }
</style>
<template>
  <Content>
    <Row>
      <div class="rowTitle" align="left">账户设置</div>
    </Row>
    <br>
    <Row>
      <Col span=8>
        <Content align="left" style="padding-left: 30px; border-right-style: dashed; border-right-width: 1px; border-right-color: #D3D3D3">
          <Row class="row">
            <h4>用&nbsp;&nbsp;户&nbsp;&nbsp;名： {{username}}</h4>
          </Row>
          <Row class="row">
            <h4>注册邮箱： {{email}}</h4>
          </Row>
          <Row class="row">
            <h4>注册手机： {{phoneNumber}}</h4>
          </Row>
          <Row class="row">
            <h4 v-if="userType==='user'">用户类型： 普通用户</h4>
            <h4 v-if="userType==='expert'">用户类型： 科技专家</h4>
            <h4 v-if="userType==='admin'">用户类型： 管理员</h4>
          </Row>
        </Content>
      </Col>
      <Col span=8>
        <Content align="left" style="padding-left: 30px; border-right-style: dashed; border-right-width: 1px; border-right-color: #D3D3D3">
          <Row class="row">
            <h2 align="center">账户余额</h2>
          </Row>
          <br>
          <Row class="row">
            <div align="center">
              <span style="text-align: center; font-size: 40px; font-family: 'Microsoft YaHei'; color: darkorange">{{money.toFixed(2)}}</span>元
            </div>
          </Row>
        </Content>
      </Col>
      <Col span=8>
        <Content align="left" style="padding-left: 30px">
          <Row class="row">
            <Button type="info" long>科技专家认证</Button>
          </Row>
        </Content>
      </Col>
    </Row>
    <Row>
      <Col span=8>
        <Content align="left" style="padding-left: 30px; border-right-style: dashed; border-right-width: 1px; border-right-color: #D3D3D3">
          <div align="center">
            <Button>修改资料</Button>
          </div>
        </Content>
      </Col>
      <Col span=8>
        <Content align="left" style="padding-left: 30px; border-right-style: dashed; border-right-width: 1px; border-right-color: #D3D3D3">
          <div align="center">
            <Button>点此充值</Button>
          </div>
        </Content>
      </Col>
    </Row>
  </Content>
</template>

<script>
  export default {
    name: "personalCenter",
    data() {
      return {
        login: true,
        username: 'cxm',
        userType: 'user',
        email: 'chuximing@qq.com',
        phoneNumber: '13522222222',
        money: 0.00
      }
    }
  }

</script>

<style scoped>

</style>
