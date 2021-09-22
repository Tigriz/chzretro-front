<template>
  <div :class="{ ellipsis: ellipsis }">
    <nuxt-link
      v-if="user.id"
      :to="'/member/' + user.id"
      :style="{ color: user.color }"
      >{{ user.name }}</nuxt-link
    >
    <div v-else>{{ user.name }}</div>
    <div v-if="separator">,&nbsp;</div>
  </div>
</template>
<script>
export default {
  name: "User",
  props: {
    user: {
      required: true,
      type: Object,
    },
    separator: {
      required: false,
      default: false,
      type: Boolean,
    },
    ellipsis: {
      required: false,
      default: false,
      type: Boolean,
    },
  },
};
</script>
<style  scoped>
div {
  display: inline-block;
}

.ellipsis {
  display: block;
}
</style>
