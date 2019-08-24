<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row>
          <el-col class="head_name" :span="4">邓坤</el-col>
          <el-col :span="10" :offset="10">
            <el-input v-model="question" placeholder="请输入搜索关键字" @change="handleChange" clearable>
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-col>
        </el-row>
      </el-header>
      <el-main style="height:40px;line-height:40px;background-color:#32CDCD;padding:5px;overflow:hidden">
           <ul class="options_ul">
              <li v-for="(item,index) in items" :key="index">
                <a :href="item.path">{{item.name}}</a>
              </li>
            </ul>
      </el-main>
    </el-container>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      question: "",
       items:[
        {
          name:'首页',
          path:'/'
        },
         {
          name:'学习笔记',
          path:'/notes'
        },
         {
          name:'个人',
          path:'/life'
        }
      ],
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.head_name {
  font-size: 20px;
}
.el-header {
  background-color: #000;
  color: #fff;
  line-height: 60px;
}
.main_header {
  background-color: #96b97d;
  line-height: 40px;
  color: #fff;
  padding-left: 10px;
}
.el-dropdown-link {
  color: #fff;
}
.el-dropdown {
  vertical-align: top;
}
.options_ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-left: 50px;
}
.options_ul a {
  text-decoration: none;
  color: #fff;
}
.studyUl {
  list-style: none;
  border-right: 2px solid #dddddd;
  margin-left: 10px;
  padding-left: 0;
}
.studyUl li {
  margin: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #f5f5f5;
  text-align: center;
}
.container_mid {
  margin-top: 10px;
}
.liActive {
  color: #96b97d;
}
</style>
