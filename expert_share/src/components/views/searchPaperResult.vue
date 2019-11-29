<style scoped xmlns:vertical-align="http://www.w3.org/1999/xhtml" xmlns:vertical-align="http://www.w3.org/1999/xhtml"
       xmlns:vertical-align="http://www.w3.org/1999/xhtml">
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
</style>
<template>
  <div>
    <div class="layout">
      <Layout>
        <Header :style="{background: '#f5f7f9',paddingTop:'15px'}">
            <Input search enter-button="Search" placeholder="Enter something..." size="large"/>
        </Header>
        <Layout :style="{padding: '0 50px'}">
          <Sider hide-trigger :style="{background: '#fff'}">
            <classification></classification>
          </Sider>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <paper-result></paper-result>
          </Content>
        </Layout>
        <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
      </Layout>
    </div>
  </div>

</template>
<script>
    import classification from "../searchPaperResult/classification";
    import PaperResult from "../searchPaperResult/paper-result";
    export default {
      name:'searchPaperResult',
        components: {PaperResult, classification}
    }
</script>
