import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Layui from "@layui/layui-vue";
import "@layui/layui-vue/lib/index.css";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(Layui).use(ElementPlus).mount("#app");
