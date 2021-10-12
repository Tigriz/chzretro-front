<template>
  <Container>
    <template #left-column
      ><Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="community" />
        </div> </Card
    ></template>
    <Board v-if="data" :topics="data"> </Board>
    <br />
    <button style="text-align: left">
      <img v-if="!post" loading="lazy" src="~/assets/img/bbs/post.gif" @click="post = true" />
    </button>
    <markdown-input v-if="post" is-topic />
    <br />
    <Card>
      <div class="columns">
        <div v-for="(description, i) in iconDescriptions" :key="i">
          <img loading="lazy"
            :src="description.src"
            :alt="description.label"
            :title="description.label"
            draggable="false"
            @contextmenu.prevent
          />
          {{ description.label }}
        </div>
      </div>
    </Card>
  </Container>
</template>

<script>
import Board from "@/components/bbs/list/Board.vue";
import MarkdownInput from "@/components/MarkdownInput.vue";

const iconDescriptions = [
  {
    src: require("~/assets/img/bbs/folder_new.svg"),
    label: "Nouveaux messages"
  },
  {
    src: require("~/assets/img/bbs/folder_new_hot.svg"),
    label: "Nouveaux messages [ Populaire ]"
  },
  {
    src: require("~/assets/img/bbs/folder_new_lock.svg"),
    label: "Nouveaux messages [ Verrouillé ]"
  },
  {
    src: require("~/assets/img/bbs/folder.svg"),
    label: "Pas de nouveaux messages"
  },
  {
    src: require("~/assets/img/bbs/folder_hot.svg"),
    label: "Pas de nouveaux messages [ Populaire ]"
  },
  {
    src: require("~/assets/img/bbs/folder_lock.svg"),
    label: "Pas de nouveaux messages [ Verrouillé ]"
  },
  {
    src: require("~/assets/img/bbs/folder_announce.svg"),
    label: "Annonce"
  },
  {
    src: require("~/assets/img/bbs/folder_sticky.svg"),
    label: "Post-it"
  }
];

export default {
  name: "BBS",
  components: {
    Board,
    MarkdownInput
  },
async asyncData({ $axios }) {
    const data = await $axios.$get(`/api/forum.json`)
    return { data }
  },
  data() {
    return {
      data: null,
      iconDescriptions,
      post: false
    };
  },
};
</script>
<style  scoped>
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
