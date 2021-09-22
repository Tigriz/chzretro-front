<template>
  <Container>
    <template #left-column
      ><Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="community" />
        </div> </Card
    ></template>
    <Topic v-if="data" :messages="data"> </Topic>
    <br />
    <MarkdownInput v-if="authenticated" />
  </Container>
</template>

<script>
import Topic from "@/components/bbs/list/Topic.vue";
import MarkdownInput from "@/components/MarkdownInput.vue";
import { mapGetters } from "vuex";

export default {
  name: "BBS",
  components: {
    Topic,
    MarkdownInput,
  },
  data() {
    return {
      data: null,
    };
  },
async asyncData({ $axios }) {
    const data = await $axios.$get(`/api/topic.json`)
    return { data }
  },
  computed: {
    ...mapGetters("auth", ["authenticated"]),
  },
};
</script>
