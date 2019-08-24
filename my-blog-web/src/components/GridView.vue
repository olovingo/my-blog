<template>
  <div class="gridview">
    <div
      v-for="(grid,index) in gridOptions"
      :key="index"
      class="grid_one"
      @click="gridClick(index)"
    >
      <img v-if="grid.img" :src="grid.img" alt />
      <span>{{grid.descrp}}</span>
      <p>{{grid.title}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "GridView",
  props: {
    gridOptions: Array
  },
  data() {
    return {
     
    };
  },
  methods: {
    gridClick(num) {
     this.$emit('gridClick',num)
    }
  },
};
</script>
<style scoped>
.gridview {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.grid_one {
  width: 25%;
  text-align: center;
  margin: 10px 5px;
}
.grid_one img {
  width: 30px;
  vertical-align: middle;
}
.grid_one p{
  margin-top: 5px;
}
</style>
