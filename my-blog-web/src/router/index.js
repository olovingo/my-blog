import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/homePage/HomePage'
import Notes from '@/views/notes/Notes'
import NoteDetail from '@/views/notes/NoteDetail'

Vue.use(Router)

export default new Router({
  mode:'history', //开发his 生产 hash
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path:'/notes',
      name:'Notes',
      component:Notes,
    },
    {
      path:'/detail',
      name:'NoteDetail',
      component:NoteDetail
    }
  ]
})
