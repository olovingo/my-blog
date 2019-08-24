<template>
    <div>
        <p class="head-tip">前端基础学习网站：</p>
        <GridView :gridOptions="gridLists" @gridClick="handleClick"></GridView>
        <div style="height:5px;background-color:#f5f5f5"></div>
        <p class="head-tip">学习博客:</p>
        <div class="blogs">
            <ul>
                <li><a href="https://segmentfault.com/a/1190000013821464" target="blank">排序算法回顾（JavaScript）</a></li>
                <li><a href="https://segmentfault.com/a/1190000011145364" target="blank">前端常见跨域解决方案（全）</a></li>
                <li><a href="https://www.cnblogs.com/zhoulujun/p/9667651.html" target="blank">再谈javascriptjs原型与原型链及继承相关问题</a></li>
            </ul>
        </div>

    </div>
</template>
<script>
import GridView from '@/components/GridView'
import HTML from '@/assets/foundation/html.png'
import CSS from '@/assets/foundation/css.png'
import JS from '@/assets/foundation/js.png'
export default {
    name:'Foundation',
    data(){
        return {
            gridLists:[
                {   
                    img:HTML,
                    desc:'HTML即超文本标记语言',
                    text:'学习HTML(5) [ 菜鸟教程 ]',
                    src:'https://www.runoob.com/html/html-tutorial.html'
                },
                 {   
                    img:CSS,
                    desc:'层叠样式表',
                    text:'学习CSS(3) [ 菜鸟教程 ]',
                    src:'https://www.runoob.com/css/css-tutorial.html'
                },
                 {   
                    img:JS,
                    desc:'web编程语言',
                    text:'学习JavaScript [ 菜鸟教程 ]',
                    src:'https://www.runoob.com/js/js-tutorial.html'
                }
            ]
        }
    },
    methods:{
        handleClick(index){
           window.open(this.gridLists[index].src);
        }
    },
    components:{GridView}
}
</script>
<style>
.grid_one{
    background-color: #f5f5f5;
    color: #0565c0;
    padding: 5px 0;
}
.head-tip{
    font-size: 18px;
    color: #96b97d;
}
.blogs a{
    text-decoration: none;
    color: #060
}
.blogs ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.blogs li{
    padding: 10px;
    width: 30%;
}
</style>