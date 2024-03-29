import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import HelloWorld from './components/HelloWorld.vue'
import DataTable from './components/DataTable.vue'

const app = createApp(App)

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/datatable', component: DataTable },
  ];

const router = createRouter({
    history: createWebHistory(),
    routes
});

registerPlugins(app)
app.use(router);
app.mount('#app')
