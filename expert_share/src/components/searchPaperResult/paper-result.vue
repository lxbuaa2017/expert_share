<template>
  <List item-layout="vertical">
    <ListItem v-for="item in data" :key="item.content">
      <el-row>
        <el-col :span="2">
          <p>1</p>
        </el-col>
        <el-col span="22">
          <p style="text-align: left">{{ item.content }}</p>
        </el-col>
      </el-row>
      <template slot="action">
        <li>
          <Icon type="ios-star-outline" /> 123
        </li>
        <li>
          <Icon type="ios-thumbs-up-outline" /> 234
        </li>
        <li>
          <Icon type="ios-chatbubbles-outline" /> 345
        </li>
      </template>
    </ListItem>
  </List>
</template>
<script>
    export default {
        name:'paper-result',
        data () {
            return {
                data: [
                    {
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    },
                    {
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    },
                    {
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    }
                ]
            }
        }
    }
</script>
