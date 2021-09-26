<template>
  <Container>
    <template #left-column>
      <SlotRules top /><br />
      <Security />
      <Card
        color="yellow"
        filename="packs.png"
        :width="154"
        :height="96"
        class="packs"
      >
        <template #button>
          <Button color="yellow" icon="register.svg">Pack</Button>
        </template>
        <Pack header="summer.png" footer="summer.png" /><br /><br />
      </Card>
    </template>
    <Demo />

    <template #right-column
      ><Card color="blue" top v-if="data">
        <template #header
          ><nuxt-link to="/online"
            ><h1>{{ data.connected }}</h1>
            {{ $t("connecteds", data.connected) }}</nuxt-link
          ></template
        >
        {{ data.members }} {{ $t("members.text", data.members) }} <br />
        {{ data.last24 }} {{ $t("members.past", data.last24) }} </Card
      ><br />
    </template>
  </Container>
</template>
<script>
import Demo from "@/components/Demo.vue";
import Pack from "@/components/Pack.vue";
import Security from "@/components/slot/Security.vue";

export default {
  name: "Login",
  components: {
    Pack,
    Demo,
    Security
  },
  data() {
    return {
      data: null
    };
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get(`/api/members.json`)
    return { data }
  },
  methods: {
    login() {
      this.$store.dispatch("auth/login");
    }
  }
};
</script>
<style >
.packs .card-btn {
  background: linear-gradient(
    to bottom,
    #7aaaf0,
    #7aaaf0 50%,
    var(--main-card-color) 50%
  );
}
</style>
<style  scoped>
.login-form {
  justify-content: center;
}
</style>
