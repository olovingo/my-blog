<template>
  <div>
    <el-container>
      <el-main style="padding:0">
          <el-container class="container_mid">
            <el-aside width="150px">
              <ul class="studyUl">
                <li @click="handle(index,item.com)" :class="{liActive:(index==currentIndex)}" v-for="(item,index) in lists" :key="index">
                  {{item}}
                </li>
              </ul>
            </el-aside>
            <el-main>
                <Foundation :arguments="args"></Foundation>
            </el-main>
          </el-container>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Foundation from './components/Foundation';
export default {
  name: "HomePage",
  data() {
    return {
      question: "",
      currentIndex:0,
      args:'foundation',
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
      lists:['foundation','vue','angular','react','jquery','nodejs+express']
    };
  },
  methods: {
    handle(index,com){
      this.currentIndex = index;
      // this.currentCom = com;
      this.args = this.lists[index];
    }
  },
  components:{
    Foundation
  }
};
</script>
<style scoped>
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
.options_ul{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-left: 50px;
}
.options_ul a{
  text-decoration: none;
  color: #fff;
}
.studyUl{
  list-style: none;
  border-right: 2px solid #dddddd;
  margin-left: 10px;
  padding-left: 0;
}
.studyUl li{
  margin:10px;
  padding: 10px 0;
  border-bottom: 1px solid #f5f5f5;
  text-align: center;
}
.container_mid{
  margin-top: 10px;
}
.liActive{
  color: #96b97d;
}
</style>