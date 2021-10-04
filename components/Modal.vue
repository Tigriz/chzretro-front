<template>
  <div v-if="!close" class="modal">
    <div class="modal-content">
      <img loading="lazy"
        style="float: left"
        draggable="false"
        src="~/assets/img/icon/warning_modal.svg"
        @contextmenu.prevent
      />
      <p>{{ $t(message) }}</p>
      <button class="pink-icon ok" @click="close = true">
        <img loading="lazy"
          draggable="false"
          src="~/assets/img/icon/ok.svg"
          @contextmenu.prevent
        />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  props: {
    message: {
      required: false,
      default: "error.default",
      type: String,
    },
  },
  data() {
    return {
      close: false,
    };
  },
};
</script>
<style  scoped>
.modal {
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #0007;
}

.modal-content {
  background-color: #69c;
  position: relative;
  margin: 15% auto;
  padding: 20px;
  color: #fff;
  border: 2px solid;
  border-color: #7fbcff #184672 #184672 #7fbcff;
  border-radius: 6px;
  width: 362px;
  height: 103px;
}

.ok {
  position: absolute;
  bottom: 4px;
  right: 4px;
}
</style>
