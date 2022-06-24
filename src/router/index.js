import { createRouter, createWebHistory } from "vue-router"

import Highscore from '../pages/Highscore.vue'
import Game from '../pages/Game.vue'
import Welcome from '../pages/Welcome.vue'
import WelcomeExplanation from "@/pages/WelcomeExplanation";
import WelcomeZwei from "@/pages/WelcomeZwei";

const routes = [
    {path: '/', component: Welcome, name: 'welcome', children: [
            {path: '', component: WelcomeExplanation, name: 'welcome.explanation'},
            {path: 'zwei', component: WelcomeZwei, name: 'welcome.zwei'},
        ]},
    {path: '/highscore', component: Highscore, name: 'highscore'},
    {path: '/game', component: Game, name: 'game'},

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router