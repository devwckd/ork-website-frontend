import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {createI18n, useI18n} from "vue-i18n";

import App from './App.vue'
import router from './main.router'
import {messages} from "./main.lang";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createI18n({
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
    messages: messages
}))

app.mount('#app')
