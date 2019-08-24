<template>
    <div>
        <el-container class="container_mid">
            <el-aside width="150px">
              <ul class="studyUl">
                <li @click="handle(index)" :class="{liActive:(index==currentIndex)}" v-for="(item,index) in lists" :key="index">
                  {{item.name}}
                </li>
                <li @click="addNote"  :class="{liActive:(lists.length +1==currentIndex)}">
                    添加笔记
                </li>
              </ul>
            </el-aside>
            <el-main>
                <component :is="currentCom"></component>
            </el-main>
          </el-container>
    </div>
   
</template>
<script>
import Foundation from './components/Foundation';
import VueLearn from './components/VueLearn'
import NgLearn from './components/NgLearn'
import ReactLearn from './components/ReactLearn'
import JqLearn from './components/JqLearn'
import NoteAdd from './components/NoteAdd'
export default {
    name:'Notes',
    data(){
        return{
          currentIndex:0,  
          currentCom:'',
            lists:[
        {
          name:'前端基础',
          com:'Foundation'
        },
        {
          name:'vue',
          com:'VueLearn'
        },
         {
          name:'angular',
          com:'NgLearn'
        },
         {
          name:'react',
          com:'ReactLearn'
        },
         {
          name:'jquery',
          com:'JqLearn'
        }
      ]
        }
    },
    methods:{
        addNote(){
            this.currentIndex = this.lists.length+1;
            this.currentCom = 'NoteAdd'
        },
        handle(index){
            this.currentIndex = index;
            this.currentCom = this.lists[index].com
        }
    },
    components:{
        Foundation,JqLearn,NgLearn,ReactLearn,VueLearn,NoteAdd
    }
}
</script>