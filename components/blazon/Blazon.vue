<template>
  <div class="blazon">
    <background :id="shape" :primary="primary" :secondary="secondary" />
    <div class="top"><top :id="top" :color="primary" /></div>
    <div class="bot"><bot :id="bot" :color="primary" /></div>
    <div class="reflection"><reflection :id="shape" /></div>
  </div>
</template>
<script>
import Background from "./Background.vue";
import Reflection from "./Reflection.vue";
import Top from "./Top.vue";
import Bot from "./Bot.vue";

export default {
  name: "Blazon",
  components: {
    Background,
    Reflection,
    Top,
    Bot,
  },
  props: {
    primary: {
      required: true,
      type: String,
      default: "#fff",
    },
    secondary: {
      required: true,
      type: String,
      default: "#fff",
    },
    shape: {
      required: true,
      type: Number,
      default: 1,
    },
    top: {
      required: true,
      type: Number,
      default: 1,
    },
    bot: {
      required: true,
      type: Number,
      default: 1,
    },
  },
};
</script>
<style  scoped>
.blazon {
  position: relative;
  text-align: left;
}

.reflection,
.top,
.bot {
  position: absolute;
  top: 0;
  left: 0;
}

.top {
  top: 2.8px;
  left: 12.8px;
}

.bot {
  top: 31.6px;
  left: 16.6px;
}
</style>
