<template>
  <div>
    <Col span="12">
      <div><p style="font-size: xx-large">兴趣领域</p></div>
      <WordCloud :add="add"></WordCloud>
    </Col>
    <Col span="12">
      <div><p style="font-size: xx-large">个人成果数</p></div>
      <div id="myChart1" :style="{paddingTop: '0px',width: '600px', height: '600px'}"></div>
    </Col>
  </div>
</template>

<script>
  import WordCloud from "./WordCloud";
  export default {
    props:['expertname','add'],
    name: 'Ecahrts',
    components: {WordCloud},
    data () {
      return {
        charts:{
          "x1":[1,2,3,4,5],
          "y1":[4,2,4,5,8]
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
      });
    },
    mounted(){
      this.$nextTick(()=> {
        this.$axios.get('api/get_appoint/?name='+this.expertname).then((res) => {
          this.charts.x1=res.data.x;
          this.charts.y1=res.data.y;
          console.log(this.charts.x1);
          this.drawLine();
        });
      });
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
        //let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
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
      }
    }
  }
</script>

<style scoped>
</style>
