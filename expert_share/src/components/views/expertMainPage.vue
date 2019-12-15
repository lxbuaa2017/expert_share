<style>
  .title{
    font-family: "PingFang CS";
    font-size: 16px;
    font-weight: bold;
    color: #464c5b;
    background: #d7dde4;
  }
  .four{

  }
</style>
<template>
  <div>
    <div class="layout">
      <Layout>
        <Header :style="{background: '#f5f7f9',paddingTop:'0px'}">
          <el-row style="text-align: left">
            <el-col :span=5><h3>科技专家资源共享平台</h3></el-col>
            <el-col :span=1><a style="font-size: 17px">首页</a></el-col>
            <el-col :span=13>&nbsp;</el-col>
            <el-col :span=5>
              <div style="text-align: right">
                <Dropdown style="text-align: center">
                  <Button type="primary">
                    {{username}}
                    <Icon type="ios-arrow-down"></Icon>
                  </Button>
                  <DropdownMenu v-if="login===true" slot="list">
                    <DropdownItem>个人信息</DropdownItem>
                    <DropdownItem>收藏</DropdownItem>
                    <DropdownItem>关注</DropdownItem>
                    <DropdownItem>粉丝</DropdownItem>
                    <DropdownItem>退出账户</DropdownItem>
                  </DropdownMenu>
                  <DropdownMenu v-else slot="list">
                    <DropdownItem>登录</DropdownItem>
                    <DropdownItem>注册</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </el-col>
          </el-row>
        </Header>
        <Content :style="{padding: '24px',background: '#f5f7f9'}">
          <div style="padding-left: 22px;padding-right: 22px;padding-top: 0px">
            <Input search enter-button="Search"  type="text" placeholder="Enter something..."
                   @on-search="handleQuery($event)" size="large"/>
          </div>
        </Content>
        <Layout>
          <Sider hide-trigger :style="{paddingTop: '130px',background: '#fff'}">
            <Row>
              <div class="title" style="padding-left: 10px;" align="left">相关学者</div>
              <Divider type="horizontal" />
            </Row>
          </Sider>
          <Content :style="{background: '#fff'}">
            <Row>
              <Col span="3">
              <div class="demo-avatar" >
                <Avatar icon="ios-person" size=100  />
              </div>
              </Col>
              <Col span="15" >
                  <Row>
                    <div style="padding-top: 20px"><h1 align="left" >{{expertname}}</h1></div>
                  </Row>
                  <Row>
                    <div style="padding-top: 5px"><h4 align="left" >{{expertadd}}</h4></div>
                  </Row>
              </Col>
              <Col span="6">
                <Col span="7">
                  <div style="padding-top: 32px">
                    <Button  size="large">关注</Button>
                  </div>
                </Col>
                <Col span="5">
                  <div style="padding-top: 32px">
                    <Button type="primary" size="large" to="renzheng">本人认领</Button>
                  </div>
              </Col>
              </Col>
            </Row>
            <Row style="padding-top: 30px">
              <Col span=20  :style="{background:'#f5f7f9', minHeight:'100px'}">
                <Col span=6 :style="{borderRightColor:'#17233d', borderRightWidth:'1px',borderRightStyle:'solid',minHeight:'100px'}">
                  <Row style="padding-top: 32px">
                    <Col span="5" offset="3"><div style="padding-top: 5px"><Icon type="md-book" size="35" /></div></Col>
                    <Col span="12"><div style="padding-top: 0px" ><h1 align="left">总文献量</h1></div></Col>
                  </Row>
                </Col>
                <Col span=6 :style="{borderRightColor:'#17233d', borderRightWidth:'1px',borderRightStyle:'solid',minHeight:'100px'}">dad</Col>
                <Col span=6 :style="{borderRightColor:'#17233d', borderRightWidth:'1px',borderRightStyle:'solid',minHeight:'100px'}">dad</Col>
                <Col span=6 :style="{minHeight:'100px'}">dad</Col>
              </Col>
              <Col span="4"></Col>
            </Row>
          </Content>
        </Layout>
        <Footer class="layout-footer-center">2019 &copy; kunkun.inc</Footer>
      </Layout>
    </div>
  </div>
</template>

<script>
  import classification from "../searchPaperResult/classification";
  import paper_result from "../searchPaperResult/paper_result";
  import pageHeader from "../general/pageHeader";
  export default {
    data () {
      return {
        username: 'thh',
        expertname:'雷晓辉',
        expertadd:'广东省广州市天河区教育局',
        theme1: 'light'

      }
    },
    components: {paper_result, classification,pageHeader}
  }
</script>
