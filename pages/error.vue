<template>
  <Container>
    <template #left-column></template>
    <Card color="red">
      <img loading="lazy"
        draggable="false"
        alt="Error icon"
        width="39"
        height="32"
        src="~/assets/img/icon/warning.svg"
        @contextmenu.prevent
      /><b
        >&nbsp;{{
          $route.params.message
            ? $t($route.params.message)
            : $t("error.default")
        }}</b
      >
    </Card>
    <template #right-column></template>
  </Container>
</template>

<script>
export default {
  name: "Error",
};
</script>
