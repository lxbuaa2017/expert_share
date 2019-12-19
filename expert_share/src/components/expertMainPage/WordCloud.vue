<template>
  <ve-wordcloud :data="chartData" :settings="chartSettings"></ve-wordcloud>
</template>

<script>
    export default {
      props:['expertname','add'],
        name:"wordCloud",

      created() {
        this.$nextTick(()=> {
          this.$axios.get('api/get_experts_by_author_and_unit/?author='+this.expertname+'&unit'+this.add).then((res) => {
            //this.names=res.data.research_interest.names;
            //this.nums=res.data.research_interest.nums;
            this.result=JSON.stringify(res.data.research_interest)
          });
        });
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
              names:[],
              nums:[],
              result:{},
                chartData: {
                    columns: ['word', 'count'],
                    rows: getRows(this.result)
                },
                chartSettings : {
                    shape:"cardioid",
                    sizeMin: 30,
                    sizeMax: 60
                }
            }
        },
      methods:{
        }
    }
    function getRows(result){
      console.log(result)
        let dict = [{}]
        //let result = {"names":a,"nums":b}
        let len = result.names.length
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
</script>
