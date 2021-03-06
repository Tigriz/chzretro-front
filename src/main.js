import { createApp } from "vue";
import App from "./App.vue";
// External plugins
import router from "./module/router";
import store from "./module/store";
import i18n from "./i18n";
import eventBus from "./module/eventBus";
import { createMetaManager, plugin as metaPlugin } from "vue-meta";
// Modules
import api from "./module/api";
import "./registerServiceWorker";
// Internal CSS
import "modern-normalize/modern-normalize.css"; // Reset
import "./asset/css/main.scss";
import "./asset/css/fonts.css";
import "./asset/css/classes.scss";
import "./asset/css/atomic.scss";
import "./asset/css/markdown.css";
// Module CSS
import "highlight.js/scss/github-dark-dimmed.scss";
import "katex/dist/katex.min.css";
// Globally registered components
import Avatar from "./component/core/global/Avatar.vue";
import Button from "./component/core/global/Button.vue";
import Card from "./component/core/global/Card.vue";
import Container from "./component/core/global/Container.vue";
import Group from "./component/core/global/link/Group.vue";
import Rules from "./component/core/global/Rules.vue";
import SideNavEntries from "./component/core/global/SideNavEntries.vue";
import User from "./component/core/global/link/User.vue";

const metaManager = createMetaManager();

const app = createApp(App)
  .use(i18n)
  .use(router)
  .use(store)
  .use(metaManager)
  .use(metaPlugin);

// Globally accessible modules
app.config.globalProperties.eventBus = eventBus; // Event hub
app.config.globalProperties.api = api; // Custom Axios API fetcher

// Registering global components
app.component("Avatar", Avatar);
app.component("Button", Button);
app.component("Card", Card);
app.component("Container", Container);
app.component("Group", Group);
app.component("Rules", Rules);
app.component("SideNavEntries", SideNavEntries);
app.component("User", User);

app.mount("#app");

// Router progress bar
router.beforeEach((to, from, next) => {
  if (typeof to.matched[0]?.components.default === "function") {
    eventBus.emit("asyncComponentLoading", to);
  }
  next();
});

router.beforeResolve((to, from, next) => {
  eventBus.emit("asyncComponentLoaded");
  next();
});

export default app;
