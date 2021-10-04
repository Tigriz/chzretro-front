<!-- This component is only meant to be copy pasted -->
<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Template" />
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
  name: "Template",
  components: {},
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/Template.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate() {
    const req = await this.api.get("/api/Template.json");
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
