<template>
  <div>
   
    <mavon-editor v-model="content" ref="md" @change="change" style="min-height: 600px" />
    <span>所属类型</span>
     <el-select v-model="typeValue" placeholder="请选择">
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
export default {
  name: "NoteAdd",
  data() {
    return {
      content: "", // 输入的markdown
      html: "",// 及时转的html
      typeValue:''
    };
  },
  methods: {
    change(value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render;
    },
    // 提交
    submit() {
      console.log(this.content);
      console.log(this.html);
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