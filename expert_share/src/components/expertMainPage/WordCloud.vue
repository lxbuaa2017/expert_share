<template>
  <div id="echartContainer" style="width:400px; height:400px">
    <ve-wordcloud :after-config="afterConfig" :data="chartData" :settings="chartSettings"></ve-wordcloud>
  </div>
</template>

<script>
    export default {
      props:['expertname','add'],
        name:"wordCloud",

      mounted() {
        // this.$nextTick(()=> {
            let self = this
          this.$axios.get('/api/get_experts_by_author_and_unit/?author='+'俞毓锋'+'&unit='+'北京大学').then((res) => {
            //this.names=res.data.research_interest.names;
            //this.nums=res.data.research_interest.nums;
            self.result=res.data.research_interest
              let dict = [{}]
              //let result = {"names":a,"nums":b}
              let len = self.result.names.length
              for(let i = 0;i<len;i++){
                  dict[i]={
                      'word':self.result.names[i],
                      'count':self.result.nums[i]
                  }
              }
              self.chartData.rows=dict

          })
        // });
      },
      // mounted() {
      //   this.$nextTick(()=> {
      //     this.$axios.get('api/get_experts_by_author_and_unit/?author='+this.expertname+'&unit'+this.add).then((res) => {
      //       //this.names=res.data.research_interest.names;
      //       //this.nums=res.data.research_interest.nums;
      //       this.result=res.data.research_interest;
      //     });
      //   });
      // },
        data () {
            return {
              show:false,
              author:"俞毓锋",
              unit:"北京大学",
              names:[],
              nums:[],
              result:{},
                rows:[],
                chartData: {
                    columns: ['word', 'count'],
                    rows: ''
                },
                chartSettings : {
                    shape:"cardioid",
                    sizeMin: 30,
                    sizeMax: 60
                }
            }
        },
      methods:{
          afterConfig (data) {
              return data
          },
          getRows(){
              let dict = [{}]
              //let result = {"names":a,"nums":b}
              let len = this.result.names.length
              console.log(this.author)
              console.log(len)
              for(let i = 0;i<len;i++){
                  dict[i]={
                      'word':result.names[i],
                      'count':result.nums[i]
                  }
              }
              console.log(dict)
              return dict
          }
        }
    }
    // function
</script>
