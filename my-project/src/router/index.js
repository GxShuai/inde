import Vue from 'vue'
import Router from 'vue-router'
const My=()=>import('@/components/My')
const Exam=()=>import('@/components/Exam')
const Fujian=()=>import('@/components/Fujian')

const Online=()=>import('@/components/Si/Online')
const Offic=()=>import('@/components/Si/Offic')
const Cour=()=>import('@/components/Si/Cour')
const Exch=()=>import('@/components/Si/Exch')
Vue.use(Router)

export default new Router({
  mode:'history',  //---去除导航栏星号
  routes: [
    {
      path: '/',
      name: 'My',
      component: My
    },
    {
      path: '/online',
      name: 'Online',
      component: Online
    },
    {
      path: '/offic',
      name: 'Offic',
      component: Offic
    },
    {
      path: '/cour',
      name: 'Cour',
      component: Cour
    },
    {
      path: '/exch',
      name: 'Exch',
      component: Exch
    },
    {
      path: '/exam',
      name: 'Exam',
      component: Exam
    },
    {
      path: '/fujian',
      name: 'Fujian',
      component: Fujian
    },
  ]
})
