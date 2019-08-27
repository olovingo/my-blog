<template>
  <div>
    <el-input placeholder="请输入标题" style="font-weight:bolder" v-model="title"></el-input>
    <mavon-editor v-model="content" ref="md" @change="change" style="min-height: 600px" />
    <span>所属类型</span>
     <el-select v-model="typeValue" placeholder="请选择">
        <el-option label="angular" value="foundation"></el-option>
      <el-option label="angular" value="angular"></el-option>
      <el-option label="vue" value="vue"></el-option>
      <el-option label="jquery" value="jquery"></el-option>
      <el-option label="react" value="react"></el-option>
    </el-select>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import https from '../../../lib/https'
export default {
  name: "NoteAdd",
  props:{
    type:String
  },
  data() {
    return {
      content: "", // 输入的markdown
      html: "",// 及时转的html
      typeValue:'',
      title:''
    };
  },
  watch:{
    type:function(newValue,oldValue){
      this.getLists(newValue);
    }
  },
  methods: {
    getLists(newValue,oldValue){
      console.log(newValue)
    },
    change(value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render;
    },
    // 提交
    submit() {
      var data = {};
      data.type = this.typeValue;
      data.title = this.title;
      data.content = this.html.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\"/g,'&quot;');
      data.createTime = new Date().getTime().toString();
      https.fetchPost('/newArticle',data).then( res =>{
        console.log(res)
      })
    }
  },
  components: { mavonEditor }
};
</script>
<style>
.el-button {
  margin-top: 20px;
}
</style>