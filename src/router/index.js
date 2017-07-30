import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import aboutMe from '../pages/aboutMe'
import blog from '../pages/blog'
import skill from '../pages/skill.vue'
import work from '../pages/work'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/aboutMe',
      name:
        'aboutMe',
      component:
      aboutMe
    }
    ,
    {
      path: '/blog',
      name:
        'blog',
      component:
      blog
    }
    ,

    {
      path: '/skill',
      name:
        'skill',
      component:
      skill
    }
    ,
    {
      path: '/work',
      name:
        'work',
      component:
      work
    }
  ]
})
