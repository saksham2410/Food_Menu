import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import Create from '@/components/Create'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            redirect: {
                name: "Menu"
            }
        },
        {
            path: '/meal/',
            name: 'Menu',
            props: true,
            component: Menu
        },
        {
            path: '/create/',
            name: 'Create',
            props: true,
            component: Create
        }
    ]
})