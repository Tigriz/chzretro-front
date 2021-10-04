<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="members" />
        </div>
      </Card>
      <br />
      <SlotRules bot />
    </template>
    <Cabin
      v-if="data"
      :data="data"
      @update-item="(name, item) => (data.blazon[name] = item)"
      @previous-item="
        (name) =>
          (data.blazon[name] =
            data.items[name][data.items[name].indexOf(data.blazon[name]) - 1])
      "
      @next-item="
        (name) =>
          (data.blazon[name] = data.items[name][
            data.items[name].indexOf(data.blazon[name]) + 1
          ])
      "
    />
  </Container>
</template>
<script>
import Cabin from "@/components/blazon/Cabin.vue";

export default {
  name: "Edit",
  components: {
    Cabin
  },

async asyncData({ $axios }) {
    const data = await $axios.$get(`/api/edit.json`)
    return { data }
  },
  data() {
    return {
      data: null
    };
  },
};
</script>
