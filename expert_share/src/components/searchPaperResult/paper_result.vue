<template>
  <ul style="list-style-type: none">
    <li v-for="(item,index) in papers" :key="item.c_title">
      <el-row>
        <el-col :span=2>
          <h3 style="color: #2b81af;text-align: left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{index+1}}.</h3>
        </el-col>
        <el-col :span=21>
          <h3 style="color: #2b81af;text-align: left" ><span v-html="height_light(item.c_title)"></span></h3>
        </el-col>
        <el-col :span=1>
          <el-button v-if="star===true" icon="el-icon-star-on" circle></el-button>
          <el-button v-else icon="el-icon-star-off" circle></el-button>
        </el-col>
      </el-row>
      <el-row><p style="line-height: 5px">&nbsp;</p></el-row>
      <el-row style="color: #2D8cF0">
        <el-col :span=2><p>&nbsp;&nbsp;</p></el-col>
        <el-col :span=22>
          <p style="text-align: left">{{item.c_author}} &nbsp;&nbsp;-&nbsp;&nbsp;《{{item.c_periodical}}》&nbsp;&nbsp;&nbsp;-
            {{item.indexID.substring(0,4)}}年{{month_regex(item.indexID)}}期</p>
        </el-col>
      </el-row>
      <el-row><p style="line-height: 10px">&nbsp;</p></el-row>
      <el-row style="font-family: 微软雅黑;font-size: 12px">
        <el-col :span=2><p style="text-align: right">摘要：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></el-col>
        <el-col :span=22>
        <p class="abstract" v-html="height_light(item.c_abstract)"></p>
<!--          item.c_abstract-->
        </el-col>
      </el-row>
      <el-row><p style="line-height: 10px">&nbsp;</p></el-row>
      <el-row>
        <el-col  style="font-family: 微软雅黑;font-size: 12px" :span=2><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关键词：</p></el-col>
        <el-col :span=22 style="text-align: left">
          <template v-for="keyword in split_keywords(item.c_keywords)">
            <Tag><span v-html="height_light(keyword)"></span></Tag>
          </template>
        </el-col>
      </el-row>
      <Divider dashed />
    </li>
  </ul>
</template>
<style type="text/css">
  .abstract{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>
<script>
    export default {
        name:'paper_result',
        props:['keyword','papers'],
        methods:{
            height_light(str){
               let p = this.keyword
                return str.replace(p,'<span style="color: #880000">'+p+'</span>')
            },
            month_regex(str) {
                var l = str.search(/\(/);
                var r = str.search(/\)/);
                return str.substring(l+1,r);
            },
            split_keywords(str){
                return str.split(',')
            }
        },
        created(){
            document.title='论文搜索结果'

        },
        data () {
            return {
                star:false
            }
        }
    }
</script>
