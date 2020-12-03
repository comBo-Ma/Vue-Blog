import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home=()=>import('@/views/home/Home')
const Detail=()=>import('@/views/detail/Detail')
const FriendLink=()=>import('@/views/friendLink/FriendLink')
const Category=()=>import('@/views/category/Category')
const CategoryContent=()=>import("@/views/category/childComps/CategoryContent")
const Comment=()=>import('@/views/comment/Comment')

const routes=[
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component: Home
    },
    {
        path:'/detail',
        component: Detail
    },
    {
        path:'/friendLink',
        component:FriendLink
    },
    {
        path: '/category',
        component:Category,
        children:[
            {
                path:'/category',
                component:CategoryContent
            }
        ]
    },
    {
        path:'/comment',
        component:Comment
    }
]

const router=new VueRouter({
    mode:'history',
    routes
})

export default router;
