<template>
  <Container>
    <template #left-column
      ><Card color="blue" top>
        <nuxt-link to="/levels">
          <div class="level fullwidth">
            {{ $t("level") }}
            <div class="number" v-if="data">
              <img
                draggable="false"
                @contextmenu.prevent
                :alt="number"
                v-for="number in data.level.toString(10)"
                :key="number.index"
                width="19"
                height="21"
                :src="require(`@/assets/img/number/${number}.svg`)"
              /> </div></div></nuxt-link
        ><br />
        <div class="flex col fullwidth">
          <SideNavEntries section="account"/></div></Card
      ><br />
      <Bank v-if="data" :credits="data.credits"
    /></template>
    <Cabin
      v-if="data"
      :data="data"
      @update-item="(name, item) => (data.look[name] = item)"
      @previous-item="
        (name) =>
          (data.look[name] =
            data.items[name][data.items[name].indexOf(data.look[name]) - 1])
      "
      @next-item="
        (name) =>
          (data.look[name] = this.data.items[name][
            data.items[name].indexOf(data.look[name]) + 1
          ])
      "
      @change-gender="(gender) => (this.data.gender = gender)"
      v-model:motto="data.motto"
      v-model:website="data.website"
      v-model:centrea="data.centres[0]"
      v-model:centreb="data.centres[1]"
      v-model:centrec="data.centres[2]"
      v-model:centred="data.centres[3]"
    />
    <template #right-column>
      <Card color="blue" filename="messages.gif" :width="154" :height="56">
      </Card
      ><br />
      <Card color="blue" filename="forum.gif" :width="154" :height="45"> </Card
      ><br /><Card color="blue">
        <template #button>
          <Button icon="register.svg">{{ $t("myAccount.friendsList") }}</Button>
        </template>
      </Card>
      <br />
      <Card color="blue">
        <template #button>
          <Button icon="register.svg">{{ $t("myAccount.groupsList") }}</Button>
        </template>
      </Card>
    </template>
  </Container>
</template>

<script>
import Cabin from "@/components/Cabin.vue";
import Bank from "@/components/Bank.vue";

export default {
  name: "Account",
  components: {
    Bank,
    Cabin
  },
  data() {
    return {
      data: null
    };
  },
  methods: {
    submit() {
      console.log("Envoyé!");
    }
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get(`/api/account.json`)
    return { data }
  },
};
</script>
