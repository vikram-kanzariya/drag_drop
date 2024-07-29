import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import store from './store'

  const vuetify = new createVuetify({
    components,
    directives,
  });

const routes = [
  {
    path: "/form",
    name: "FormComponent",
    component: () => import("./components/FormComponent.vue"),
  },
  {
    path: "/sort",
    name: "SortComponent",
    component: () => import("./components/SortComponent.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
.use(store)
.use(vuetify)
.use(router)
.mount("#app");
