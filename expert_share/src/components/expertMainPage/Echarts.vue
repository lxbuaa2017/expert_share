<template>
  <div>
    <Col span="12">
      <div><h1>个人成果数</h1></div>
      <div id="myChart1" :style="{paddingTop: '0px',width: '600px', height: '600px'}"></div>
    </Col>
    <Col span="12">
      <div><h1>成果引用数</h1></div>
      <div id="myChart2" :style="{paddingTop: '0px',width: '600px', height: '600px'}"></div>
    </Col>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        expertname:'leixiao',
        charts:{
          "x1":[1,2,3,4,5],
          "y1":[4,2,4,5,8],
          "x2":[1,2,3,4,5],
          "y2":[1,4,2,5,3]
        },
      }
    },
    created() {
      this.$nextTick(()=> {
        this.$axios.get('api/get_appoint/?name='+this.expertname).then((res) => {
          this.charts.x1=res.data.x;
          this.charts.y1=res.data.y;
          console.log(this.charts.x1);
          this.drawLine();
        });
        this.$axios.get('api/get_published/?name='+this.expertname).then((res) => {
          this.charts.x2=res.data.x;
          this.charts.y2=res.data.y;
          this.drawLine();
        });
      });
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
        let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
        // 绘制图表
        myChart1.setOption({
          xAxis: {
            type: 'category',
            axisLine:{
              symbol:['none','arrow']
            },
            name:'年份',
            data: this.charts.x1
          },
          yAxis: {
            type: 'value',
            axisLine:{
              symbol:['none','arrow']
            },
            name:'发表论文数'
          },
          series: [{
            data: this.charts.y1,
            type: 'line'
          }]
        });
        myChart2.setOption({
          xAxis: {
            type: 'category',
            axisLine:{
              symbol:['none','arrow']
            },
            name:'年份',
            data: this.charts.x2
          },
          yAxis: {
            type: 'value',
            axisLine:{
              symbol:['none','arrow']
            },
            name:'被引论文数'
          },
          series: [{
            data: this.charts.y2,
            type: 'line'
          }]
        });
      }

    }
  }
</script>

<style scoped>

</style>
