import Vue from 'vue'
import Router from 'vue-router'
import View from '@/components/View'
import Create from '@/components/Create'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            redirect: {
                name: "Create"
            }
        },
        {
            path: '/create/',
            name: 'Create',
            props: true,
            component: Create
        },
        {
            path: '/view/',
            name: 'View',
            props: true,
            component: View
        }
    ]
})