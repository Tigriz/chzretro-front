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
    <Card filename="new.gif" :height="70" color="blue">
      <div class="flex" style="justify-content: space-evenly">
        <Tiz /><Tiz /><Tiz />
      </div>
      <br />
      Les derniers membres qui ont rejoint l'archipel !

      <br />
      <nuxt-link to="/annuaire"
        >Voir la liste des nouveaux arrivants</nuxt-link
      >
    </Card>
    <br />
    <Card filename="popularity.gif" :height="75" color="blue">
      <div class="flex" style="justify-content: space-evenly">
        <Tiz /><Tiz /><Tiz />
      </div>
      <br />
      Les membres les plus populaire de l'archipel !

      <br />
      <nuxt-link to="/popu">Voir la page popularité</nuxt-link>
    </Card>
    <br />
    <Card filename="wedding.gif" color="blue">
      <div class="flex" style="justify-content: space-evenly">
        <Tiz /><Tiz /><Tiz />
      </div>
      <br />
      Les derniers mariages célébrés par Guruji
      <br />
      <nuxt-link to="/wedding">Voir la page des mariages</nuxt-link>
    </Card>
    <template #right-column
      ><Card color="blue" top>
        <template #header> Records ! </template>
        <template #subtitle
          >Dans le bon ou le mauvais, ce sont les meilleurs !</template
        >
        parties jouées:
        <br />
        fredazur avec 22665 parties jouées ! <br />
        <br />
        parties gagnées: <br />
        AleXxX_DeViLMaN avec 15171 parties gagnées ! <br />
        <br />
        parties perdues: <br />
        fredazur avec 20763 parties perdues ! <br />
        <br />
        match nuls: <br />
        20CeNt avec 1077 match nuls ! <br /> </Card
    ></template>
  </Container>
</template>
<script>
import Tiz from "@/components/Tiz.vue";

export default {
  name: "Members",
  components: {
    Tiz
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get(`/api/members.json`)
    return { data }
  },
  data() {
    return {
      data: null
    };
  },
};
</script>

<style  scoped></style>
