<template>
  <div></div>
</template>

<script>
  export default {
    name: 'hello',
    props:['charts'],
    data () {
      return {
      }
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
