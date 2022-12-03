import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
App.config.globalProperties.axios=axios
createApp(App).mount('#app')
