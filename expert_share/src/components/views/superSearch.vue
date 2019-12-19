<template>
  <div class="screen_condition" id="add_search_condition">
    <div class="condition">
      <div class="condition_info info">
        <div class="info1"><span>
                <a href="javascript:void(0);return false;" id="add_condition"><i class="info_icon"></i></a>
                <a href="javascript:void(0);return false;" id="remove_condition"><i class="info_icon icon_reduce"></i></a>
                </span></div>
        <div class="info2">
          <select name="search_field" id="gaoji"><option value="全部">全部</option><option value="主题">主题</option><option value="题名或关键词">题名或关键词</option><option value="题名">题名</option><option value="第一作者">第一作者</option><option value="作者单位">作者单位</option><option value="作者">作者</option><option value="关键词">关键词</option><option value="摘要">摘要</option><option value="DOI">DOI</option><option value="期刊名称/刊名">期刊名称/刊名</option><option value="ISSN/CN">期刊—ISSN/CN</option><option value="期刊—期">期刊—期</option><option value="期刊—基金">期刊—基金</option><option value="专业">学位—专业</option><option value="中图分类号">学位—中图分类号</option><option value="学位授予单位">学位—学位授予单位</option><option value="导师">学位—导师</option><option value="学位">学位—学位</option><option value="会议名称">会议—会议名称</option><option value="主办单位">会议—主办单位</option></select>
        </div>
        <div class="info3">
          <input placeholder="" id="ddd" type="text" name="search_param" value="">
        </div>
        <div class="info4">
          <select name="vague_accurate">
            <option value="vague">模糊</option>
            <option value="accurate">精确</option>
          </select>
        </div>
      </div>
    </div>
    <div class="condition" name="search_condition_div" id="search_condition_input">
      <div class="condition_info info">
        <div class="info1"> <select name="bool_value" style="width:72px;">
          <option value="*">与</option>
          <option value="+">或</option>
          <option value="^">非</option>
        </select></div>
        <div class="info2">
          <select name="search_field" id="gaoji1"><option value="全部">全部</option><option value="主题">主题</option><option value="题名或关键词">题名或关键词</option><option value="题名">题名</option><option value="第一作者">第一作者</option><option value="作者单位">作者单位</option><option value="作者">作者</option><option value="关键词">关键词</option><option value="摘要">摘要</option><option value="DOI">DOI</option><option value="期刊名称/刊名">期刊名称/刊名</option><option value="ISSN/CN">期刊—ISSN/CN</option><option value="期刊—期">期刊—期</option><option value="期刊—基金">期刊—基金</option><option value="专业">学位—专业</option><option value="中图分类号">学位—中图分类号</option><option value="学位授予单位">学位—学位授予单位</option><option value="导师">学位—导师</option><option value="学位">学位—学位</option><option value="会议名称">会议—会议名称</option><option value="主办单位">会议—主办单位</option></select>
        </div>
        <div class="info3">
          <input placeholder="" id="ddd" type="text" name="search_param" value="">
        </div>
        <div class="info4">
          <select name="vague_accurate">
            <option value="vague">模糊</option>
            <option value="accurate">精确</option>
          </select>
        </div>
      </div>
    </div>
    <div class="condition" name="search_condition_div">
      <div class="condition_info info">
        <div class="info1"> <select name="bool_value" style="width:72px;">
          <option value="*">与</option>
          <option value="+">或</option>
          <option value="^">非</option>
        </select></div>
        <div class="info2">
          <select name="search_field" id="gaoji2"><option value="全部">全部</option><option value="主题">主题</option><option value="题名或关键词">题名或关键词</option><option value="题名">题名</option><option value="第一作者">第一作者</option><option value="作者单位">作者单位</option><option value="作者">作者</option><option value="关键词">关键词</option><option value="摘要">摘要</option><option value="DOI">DOI</option><option value="期刊名称/刊名">期刊名称/刊名</option><option value="ISSN/CN">期刊—ISSN/CN</option><option value="期刊—期">期刊—期</option><option value="期刊—基金">期刊—基金</option><option value="专业">学位—专业</option><option value="中图分类号">学位—中图分类号</option><option value="学位授予单位">学位—学位授予单位</option><option value="导师">学位—导师</option><option value="学位">学位—学位</option><option value="会议名称">会议—会议名称</option><option value="主办单位">会议—主办单位</option></select>
        </div>
        <div class="info3">
          <input placeholder="" id="ddd" type="text" name="search_param" value="">
        </div>
        <div class="info4">
          <select name="vague_accurate">
            <option value="vague">模糊</option>
            <option value="accurate">精确</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "superSearch"
    }
</script>

<style>
  .screen_condition {
     float: left;
    padding: 0 0 6px 89px;
  }
  div {
    display: block;
  }
  body {
    margin: 0;
    font-size: 14px;
    overflow-x: visible !important;
    min-width: 1300px;
  }
  html {
    font-family: "微软雅黑", "宋体";
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
</style>
