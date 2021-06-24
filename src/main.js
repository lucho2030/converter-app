import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from "primevue/config"
import Button from "primevue/button"
import InputNumber from "primevue/inputnumber"

import "primevue/resources/themes/saga-blue/theme.css"
import "primevue/resources/primevue.min.css"
import InlineMessage from 'primevue/inlinemessage';
import "primeflex/primeflex.css"

const app = createApp(App)
app.use(PrimeVue)
app.component("Button", Button)
app.component("InputNumber", InputNumber)
app.component("InlineMessage", InlineMessage)

app.mount('#app')


