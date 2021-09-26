<!--https://stackabuse.com/lazy-loading-routes-with-vue-router-->
<template>
  <div class="loading-container" v-if="loading">
    <div class="loader" :style="{ width: '100%' }">
      <div class="light animated"></div>
    </div>
    <div class="glow"></div>
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>
<style scoped>
.loading-container {
  font-size: 0; /* remove space */
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  width: 100%;
  opacity: 1;
  z-index: 100;
  transition: opacity 1s;
}

.loader {
  background: #ff009c;
  display: inline-block;
  height: 100%;
  width: 50%;
  overflow: hidden;
  border-radius: 0 0 5px 0;
  transition: 0.2s;
}

.loader > .light {
  float: right;
  height: 100%;
  width: 20%;
  background-image: linear-gradient(to right, #ff009c, #fff, #ff009c);
  animation: loading-animation 2s ease-in infinite;
}

.glow {
  display: inline-block;
  height: 100%;
  width: 30px;
  margin-left: -30px;
  border-radius: 0 0 5px 0;
  box-shadow: 0 0 10px #fff;
}

@keyframes loading-animation {
  0% {
    margin-right: 100%;
  }
  50% {
    margin-right: 100%;
  }
  100% {
    margin-right: -10%;
  }
}
</style>
