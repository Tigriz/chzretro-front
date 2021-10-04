<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="messenger" />
        </div> </Card
      ><br />
      <SlotRules top />
      <Security />
    </template>
    <Demo />

    <template #right-column><Card color="blue" top> </Card> </template>
  </Container>
</template>
<script>
export default {
  name: "Messenger",
  components: {},
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/messenger.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate() {
    const req = await this.api.get("/api/messenger.json");
    this.data = req.data;
  },
  data() {
    return {
      data: null
    };
  }
};
</script>
<style ></style>
<style  scoped></style>
