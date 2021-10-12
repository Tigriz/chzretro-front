<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="community" />
        </div>
      </Card>
    </template>
    <BBSList v-if="data" :boards="data"></BBSList>
    <br />
    <Card
      ><div class="columns">
        <div>
          <img loading="lazy"
            draggable="false"
            alt="BBS Verrouillé (nouveaux messages)"
            title="BBS Verrouillé (nouveaux messages)"
            src="~/assets/img/bbs/folder_new_lock.svg"
            @contextmenu.prevent
          />&nbsp;Verrouillé nouveaux messages&nbsp;
        </div>
        <div>
          <img loading="lazy"
            draggable="false"
            alt="BBS Verrouillé"
            title="BBS Verrouillé"
            src="~/assets/img/bbs/folder_lock.svg"
            @contextmenu.prevent
          />&nbsp;Verrouillé&nbsp;
        </div>
        <div>
          <img loading="lazy"
            draggable="false"
            alt="Nouveaux messages"
            title="Nouveaux messages"
            src="~/assets/img/bbs/folder_new.svg"
            @contextmenu.prevent
          />&nbsp;Nouveaux messages&nbsp;
        </div>
        <div>
          <img loading="lazy"
            draggable="false"
            alt="Pas de nouveaux messages"
            title="Pas de nouveaux messages"
            src="~/assets/img/bbs/folder.svg"
            @contextmenu.prevent
          />&nbsp;Pas de nouveaux messages&nbsp;
        </div>
      </div></Card
    >
  </Container>
</template>

<script>
import BBSList from "@/components/bbs/list/BBS.vue";

export default {
  name: "BBS",
  components: {
    BBSList
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get(`/api/bbs.json`)
    return { data }
  },
  data() {
    return {
      data: null
    };
  },
};
</script>
<style>
.symbol-info {
  flex-direction: row;
  justify-content: center;
}

.columns {
  column-count: 1;
}

@media (min-width: 400px) {
  .columns {
    column-count: 2;
  }
}

@media (min-width: 600px) {
  .columns {
    column-count: 3;
  }
}
</style>
