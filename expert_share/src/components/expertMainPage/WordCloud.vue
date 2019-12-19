<template>
  <ve-wordcloud :data="chartData" :settings="chartSettings"></ve-wordcloud>
</template>

<script>
    export default {
        name:"wordCloud",
        data () {
            return {
                chartData: {
                    columns: ['word', 'count'],
                    rows: getRows()
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
    function getRows(){
        let dict = [{}]
        let result = {"names":["激光雷达","大气光学","差分吸收激光雷达","臭氧","气溶胶","大气与海洋光学","大气臭氧","消光系数","受激拉曼散射","大气气溶胶","拉曼散射","低对流层","垂直分布","拉曼激光雷达","激光技术","瑞利散射","CO2","Raman激光雷达","光学厚度","卷云","大气二氧化碳","大气温度","对流层","差分吸收","折射率结构常数","水汽混合比","温度","边界层","A/D采集卡","CCD激光雷达","CO2探空测量"],"nums":[42,34,10,10,9,6,6,6,5,5,5,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2]}
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

        // return [{
        //     'word': 'visualMap',
        //     'count': 22199
        // }, {
        //     'word': 'continuous',
        //     'count': 10288
        // }, {
        //     'word': 'contoller',
        //     'count': 620
        // }, {
        //     'word': 'series',
        //     'count': 274470
        // }, {
        //     'word': 'gauge',
        //     'count': 12311
        // }, {
        //     'word': 'detail',
        //     'count': 1206
        // }, {
        //     'word': 'piecewise',
        //     'count': 4885
        // }, {
        //     'word': 'textStyle',
        //     'count': 32294
        // }, {
        //     'word': 'markPoint',
        //     'count': 18574
        // }, {
        //     'word': 'pie',
        //     'count': 38929
        // }, {
        //     'word': 'roseType',
        //     'count': 969
        // }, {
        //     'word': 'label',
        //     'count': 37517
        // }, {
        //     'word': 'emphasis',
        //     'count': 12053
        // }, {
        //     'word': 'yAxis',
        //     'count': 57299
        // }, {
        //     'word': 'name',
        //     'count': 15418
        // }, {
        //     'word': 'type',
        //     'count': 22905
        // }, {
        //     'word': 'gridIndex',
        //     'count': 5146
        // }, {
        //     'word': 'normal',
        //     'count': 49487
        // }, {
        //     'word': 'itemStyle',
        //     'count': 33837
        // }, {
        //     'word': 'min',
        //     'count': 4500
        // }, {
        //     'word': 'silent',
        //     'count': 5744
        // }, {
        //     'word': 'animation',
        //     'count': 4840
        // }, {
        //     'word': 'offsetCenter',
        //     'count': 232
        // }, {
        //     'word': 'inverse',
        //     'count': 3706
        // }, {
        //     'word': 'borderColor',
        //     'count': 4812
        // }, {
        //     'word': 'markLine',
        //     'count': 16578
        // }, {
        //     'word': 'line',
        //     'count': 76970
        // }, {
        //     'word': 'radiusAxis',
        //     'count': 6704
        // }, {
        //     'word': 'radar',
        //     'count': 15964
        // }, {
        //     'word': 'data',
        //     'count': 60679
        // }, {
        //     'word': 'dataZoom',
        //     'count': 24347
        // }, {
        //     'word': 'tooltip',
        //     'count': 43420
        // }, {
        //     'word': 'toolbox',
        //     'count': 25222
        // }, {
        //     'word': 'geo',
        //     'count': 16904
        // }, {
        //     'word': 'parallelAxis',
        //     'count': 4029
        // }]
    }
</script>
<!--<template>-->
<!--  <ve-wordcloud :data="chartData"></ve-wordcloud>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        data () {-->
<!--            return {-->
<!--                chartData: {-->
<!--                    columns: ['word', 'count'],-->
<!--                    rows: getRows()-->
<!--                }-->
<!--            }-->
<!--        }-->
<!--    }-->

<!--    function getRows () {-->
<!--        return [{-->
<!--            'word': 'visualMap',-->
<!--            'count': 22199-->
<!--        }, {-->
<!--            'word': 'continuous',-->
<!--            'count': 10288-->
<!--        }, {-->
<!--            'word': 'contoller',-->
<!--            'count': 620-->
<!--        }, {-->
<!--            'word': 'series',-->
<!--            'count': 274470-->
<!--        }, {-->
<!--            'word': 'gauge',-->
<!--            'count': 12311-->
<!--        }, {-->
<!--            'word': 'detail',-->
<!--            'count': 1206-->
<!--        }, {-->
<!--            'word': 'piecewise',-->
<!--            'count': 4885-->
<!--        }, {-->
<!--            'word': 'textStyle',-->
<!--            'count': 32294-->
<!--        }, {-->
<!--            'word': 'markPoint',-->
<!--            'count': 18574-->
<!--        }, {-->
<!--            'word': 'pie',-->
<!--            'count': 38929-->
<!--        }, {-->
<!--            'word': 'roseType',-->
<!--            'count': 969-->
<!--        }, {-->
<!--            'word': 'label',-->
<!--            'count': 37517-->
<!--        }, {-->
<!--            'word': 'emphasis',-->
<!--            'count': 12053-->
<!--        }, {-->
<!--            'word': 'yAxis',-->
<!--            'count': 57299-->
<!--        }, {-->
<!--            'word': 'name',-->
<!--            'count': 15418-->
<!--        }, {-->
<!--            'word': 'type',-->
<!--            'count': 22905-->
<!--        }, {-->
<!--            'word': 'gridIndex',-->
<!--            'count': 5146-->
<!--        }, {-->
<!--            'word': 'normal',-->
<!--            'count': 49487-->
<!--        }, {-->
<!--            'word': 'itemStyle',-->
<!--            'count': 33837-->
<!--        }, {-->
<!--            'word': 'min',-->
<!--            'count': 4500-->
<!--        }, {-->
<!--            'word': 'silent',-->
<!--            'count': 5744-->
<!--        }, {-->
<!--            'word': 'animation',-->
<!--            'count': 4840-->
<!--        }, {-->
<!--            'word': 'offsetCenter',-->
<!--            'count': 232-->
<!--        }, {-->
<!--            'word': 'inverse',-->
<!--            'count': 3706-->
<!--        }, {-->
<!--            'word': 'borderColor',-->
<!--            'count': 4812-->
<!--        }, {-->
<!--            'word': 'markLine',-->
<!--            'count': 16578-->
<!--        }, {-->
<!--            'word': 'line',-->
<!--            'count': 76970-->
<!--        }, {-->
<!--            'word': 'radiusAxis',-->
<!--            'count': 6704-->
<!--        }, {-->
<!--            'word': 'radar',-->
<!--            'count': 15964-->
<!--        }, {-->
<!--            'word': 'data',-->
<!--            'count': 60679-->
<!--        }, {-->
<!--            'word': 'dataZoom',-->
<!--            'count': 24347-->
<!--        }, {-->
<!--            'word': 'tooltip',-->
<!--            'count': 43420-->
<!--        }, {-->
<!--            'word': 'toolbox',-->
<!--            'count': 25222-->
<!--        }, {-->
<!--            'word': 'geo',-->
<!--            'count': 16904-->
<!--        }, {-->
<!--            'word': 'parallelAxis',-->
<!--            'count': 4029-->
<!--        }]-->
<!--    }-->
<!--</script>-->
