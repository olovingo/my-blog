<template>
  <div class="detail_caontainer">
    <p class="detail_content" v-html="item.content"></p>
  </div>
</template>
<script>
import https from "../../lib/https";
export default {
  name: "NoteDetail",
  data() {
    return {
      item: {
          date:'',
          time:'',
          content:'',
          title:''
      }
    };
  },
  created() {
    var param = this.$route.query.id;
    https.fetchPost("/getDetail", { id: param }).then(res => {
      var result = res.data[0];
      this.item.title=  result.title.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"');
      var content = result.content;
      this.item.content = content.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"');
      var datetime = new Date(parseInt(result.createTime));
      this.item.date =datetime.getFullYear() +"-" +datetime.getMonth() +"-" +datetime.getDate();
      this.item.time =datetime.getHours() +":" +datetime.getMinutes() +":" +datetime.getSeconds();
    });
  }
};
</script>