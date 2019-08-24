<template>
  <div>
    <p class="head-tip">基础学习：</p>
    <el-button type="text" @click="addDialog('website')">添加学习网站</el-button>
    <GridView :gridOptions="webGridLists" @gridClick="handleClick"></GridView>
    <div style="height:5px;background-color:#f5f5f5"></div>
    <p class="head-tip">学习博客:</p>
    <el-button type="text" @click="addDialog('blog')">添加blog地址</el-button>
    <div class="blogs">
      <ul>
        <li v-for="(item,index) in blogList" :key="index">
          <a :href="item.website" target="blank">{{item.title}}</a>
        </li>
      </ul>
    </div>
    <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item :label="dialogLabelTitle" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item :label="dialogLabeWebsite" :label-width="formLabelWidth">
          <el-input v-model="form.website" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          :label="dialogLabelDesc"
          v-show="dialogTitle=='website'"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.desc" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          :label="dialogLabelImg"
          v-show="dialogTitle=='website'"
          :label-width="formLabelWidth"
        >
          <input type="file" @change="handleImg" autocomplete="off">
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitDialog">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import GridView from "@/components/GridView";
import https from "@/lib/https.js";
export default {
  name: "Foundation",
  props: {
    arguments: String
  },
  data() {
    return {
      webGridLists: [],
      blogList:[],
      dialogTitle: "website",
      dialogLabelTitle: "标题",
      dialogLabeWebsite: "网站",
      dialogLabelDesc: "文字描述",
      dialogLabelImg: "图片描述",
      dialogFormVisible: false,
      form: {
        title: "",
        website: "",
        desc: "",
        img: ""
      },
      formLabelWidth: "120px"
    };
  },
  created() {
    this.getLists(this.arguments);
  },
  watch:{
    arguments:function(newValue,oldValue){
      this.getLists(newValue);
    }
  },
  methods: {
    getLists(type){
      https.fetchPost("/getLearn", {type:type}).then(res => {
      console.log(res.data);
      this.webGridLists = res.data.websiteList;
      this.blogList = res.data.blogList;
    });
    },
    handleClick(index) {
      window.open(this.gridLists[index].src);
    },
    addDialog(str) {
      this.dialogFormVisible = true;
      if (str == "website") {
        this.dialogTitle = "website";
        (this.dialogLabel1 = "网站地址"), (this.dialogLabel2 = "简单描述");
      } else {
        this.dialogTitle = "blog";
        (this.dialogLabel1 = "博客地址"), (this.dialogLabel2 = "简单描述");
      }
    },
    submitDialog() {
      this.dialogFormVisible = false;
      var data = {};
      data.type = this.arguments;
      data.subType = this.dialogTitle;
      data.form = this.form;
      https.fetchPost('/postLearn',data).then(res =>{
        alert('添加成功');
        location.reload();
      },err =>{
        alert('添加失败')
      })
    },
    handleImg(e) {
      var reader = new FileReader();
      var _that = this;
      reader.onload = (function(file) {
        return function(e) {
          console.info(this.result); //这个就是base64的数据了
          _that.form.img = this.result;
        };
      })(e.target.files[0]);
      reader.readAsDataURL(e.target.files[0]);
    }
  },
  components: { GridView }
};
</script>
<style>
.grid_one {
  background-color: #f5f5f5;
  color: #0565c0;
  padding: 5px 0;
}
.head-tip {
  font-size: 18px;
  color: #96b97d;
}
.blogs a {
  text-decoration: none;
  color: #060;
}
.blogs ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.blogs li {
  padding: 10px;
  width: 30%;
}
</style>