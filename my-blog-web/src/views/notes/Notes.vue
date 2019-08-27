<template>
  <div>
    <el-container class="container_mid">
      <el-aside width="150px">
        <ul class="studyUl">
          <li
            @click="handle(index)"
            :class="{liActive:(index==currentIndex)}"
            v-for="(item,index) in lists"
            :key="index"
          >{{item}}</li>
          <li @click="addNote" :class="{liActive:(lists.length +1==currentIndex)}">添加笔记</li>
        </ul>
      </el-aside>
      <el-main>
        <div class="listContainer" v-show="!isAdd">
          <ul class="list_ul">
            <li v-for="(item,index) in articles" :key="index" @click="goDetail(item.id)">
              <p class="list_title">{{item.title}}</p>
              <p class="list_content" v-html="item.content"></p>
              <p class="list_detail">
                <span>{{item.date}}</span>
                <span>{{item.time}}</span>
              </p>
            </li>
          </ul>
        </div>
        <NoteAdd v-show="isAdd" :type="currentType"></NoteAdd>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import NoteAdd from "./components/NoteAdd";
import https from "../../lib/https";
export default {
  name: "Notes",
  data() {
    return {
      currentIndex: 0,
      lists: [
        "foundation",
        "vue",
        "angular",
        "react",
        "jquery",
        "nodejs+express"
      ],
      isAdd: false,
      currentType: "foundation",
      articles: []
    };
  },
  created() {
    this.getList(this.currentType);
  },
  methods: {
    getList(type) {
      https.fetchPost("/getArticles", { type: this.currentType }).then(res => {
        var dataList = res.data;
        console.log(dataList);
        dataList.forEach(function(value) {
          value.content = value.content
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"').substring(100,300);
            var datetime =new Date( parseInt(value.createTime));
            value.date = datetime.getFullYear()+'-'+datetime.getMonth()+'-'+datetime.getDate();
            value.time = datetime.getHours()+':'+datetime.getMinutes()+':'+datetime.getSeconds();
        });
        this.articles = dataList;
      });
    },
    addNote() {
      this.isAdd = true;
      this.currentIndex = this.lists.length + 1;
    },
    handle(index) {
      this.isAdd = false;
      this.currentIndex = index;
      this.currentType = this.lists[index];
      this.getList(this.currentType);
    },
    goDetail(id){
      this.$router.push({
        path:'/detail',
        query:{
          id:id
        }
      })
    }
  },
  components: {
    NoteAdd
  }
};
</script>
<style>
.list_title {
  color: #000;
  font-size: 10px;
  text-align: left;
  font-weight: bolder;
}
.list_content {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.list_detail {
  text-align: left;
}
.list_detail span {
  margin-left: 10px;
  margin-right: 20px;
}
.list_ul {
  list-style: none;
}
.list_ul li {
  padding: 10px;
  background-color: #f5f5f5;
  margin-top: 10px;
}
.list_ul li p {
  margin: 5px;
  padding: 5px 0;
}
</style>