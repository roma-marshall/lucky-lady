import { createRouter, createWebHistory } from 'vue-router'
import AllGames from '../components/AllGames.vue'
import MyAccount from '../components/MyAccount.vue'
import GetCoins from '../components/GetCoins.vue'
import RewardStore from '../components/RewardStore.vue'

const routes = [
    { path: '/', component: AllGames },
    { path: '/account', component: MyAccount },
    { path: '/coins', component: GetCoins },
    { path: '/rewards', component: RewardStore },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router