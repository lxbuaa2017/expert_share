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
      <div class="rowTitle" align="left">账户信息</div>
    </Row>
    <br>
    <Row>
      <Col span=8>
        <Content align="left" style="padding-left: 30px; border-right-style: dashed; border-right-width: 1px; border-right-color: #D3D3D3">
          <Row class="row">
            <h4>用&nbsp;&nbsp;户&nbsp;&nbsp;名： {{username}}</h4>
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
      <!--Col span=8>
        <Content align="left" style="border-right-style: dashed; border-right-width: 1px; border-right-color: #D3D3D3">
          <Row class="row">
            <h2 align="center">账户余额</h2>
          </Row>
          <Row class="row">
            <div align="center">
              <span style="text-align: center; font-size: 40px; font-family: 'Microsoft YaHei'; color: darkorange">{{money}}</span>元
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
    <br>
    <Row>
      <Col span=8>
        <Content align="left" style="border-right-style: dashed; border-right-width: 1px; border-right-color: #D3D3D3">
          <div align="center">
            <Button>修改资料</Button>
          </div>
        </Content>
      </Col>
      <Col span=8>
        <Content align="left" style="border-right-style: dashed; border-right-width: 1px; border-right-color: #D3D3D3">
          <div align="center">
            <Button>点此充值</Button>
          </div>
        </Content>
      </Col-->
    </Row>
  </Content>
</template>

<script>
  import {getCookie, setCookie} from "../../assets/js/cookie";
  export default {
    name: "personalCenter",
    created(){
      this.username = getCookie('username');
      if (getCookie('expert') == 1) {
        this.userType = 'expert';
      }
      else {
        this.userType = 'user';
      }
      this.$nextTick(()=> {
        this.$axios.get('api/get_user/?name='+this.username).then((res) => {
          this.userType = res.data.userType;
          this.phoneNumber = res.data.phoneNumber;
          this.money = res.data.money;
        })
      });
    },
    data() {
      return {
        login: true,
        username: '',
        userType: 'user',
        phoneNumber: '13522222222',
        money: '0.00',
      }
    }
  }
</script>

<style scoped>
</style>
