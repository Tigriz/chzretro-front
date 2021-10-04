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
import { mapGetters } from "vuex";
import Topic from "@/components/bbs/list/Topic.vue";
import MarkdownInput from "@/components/MarkdownInput.vue";

export default {
  name: "BBS",
  components: {
    Topic,
    MarkdownInput,
  },
async asyncData({ $axios }) {
    const data = await $axios.$get(`/api/topic.json`)
    return { data }
  },
  data() {
    return {
      data: null,
    };
  },
  computed: {
    ...mapGetters("auth", ["authenticated"]),
  },
};
</script>
