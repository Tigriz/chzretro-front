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
    <span class="pink justified">
      <nuxt-link to="/bbs" class="pink">» Retour à l'annuaire</nuxt-link> </span
    ><br />
    <Card class="member" :class="[data.gender]">
      <div class="member-header">
        <Tiz
          :avatar="data.look.avatar"
          :emote="data.look.emote"
          :hat="data.look.hat"
          :body="data.look.body"
          :shoe="data.look.shoe"
          :item0="data.look.item0"
          :item1="data.look.item1"
          :item2="data.look.item2"
        />
        <div class="flex column" style="z-index: 1; position: relative">
          <StrokeText class="pseudo">{{ data.name }}</StrokeText>
          <div class="sentence">"{{ data.motto }}"</div>
        </div>
      </div>
      <div class="member-body">
        <div class="member-portrait centered">
          <div class="portrait flex">
            <Tiz
              :avatar="data.look.avatar"
              :emote="data.look.emote"
              :hat="data.look.hat"
              :body="data.look.body"
              :shoe="data.look.shoe"
              :item0="data.look.item0"
              :item1="data.look.item1"
              :item2="data.look.item2"
            />
          </div>
          <div v-if="!data.status.connected">
            Dernière visite le <b>{{ formatDate }}</b>
          </div>
          <div v-else>
            <div
              class="online flex centered"
              :class="{ tchat: data.status.room }"
            >
              <img loading="lazy"
                draggable="false"
                src="~/assets/img/tiz/tiz_shape.svg"
                @contextmenu.prevent
              />&nbsp;<b>En ligne</b>
            </div>
            <b>{{ data.status.room }}</b>
          </div>
        </div>
        <div class="member-text">
          <p>
            Marié avec
            <User :user="{ id: '2', name: 'Tigriz', color: '#f0f' }" /> depuis
            76 jours
          </p>
          <p>
            Intérêts :
            <b v-for="(interest, index) of data.centres" :key="index"
              >{{ interest
              }}<span v-if="index < data.centres.length - 1">, </span></b
            >
          </p>
          <p>
            Page perso :
            <a target="_blank" :href="data.website">{{
              data.website
            }}</a>
          </p>
          <p>
            Inscrit aux groupes :
            <Group
              v-for="(group, index) of data.groups"
              :key="group.id"
              :group="group"
              :separator="index < data.groups.length - 1"
            />
          </p>
          <div class="icon flex centered">
            Chapato
            <img loading="lazy"
              draggable="false"
              src="~/assets/img/icon/gender/male.svg"
              @contextmenu.prevent
            />
          </div>
          &nbsp;
          <div class="icon flex centered">
            Niveau<br /><img loading="lazy"
              draggable="false"
              width="19"
              height="21"
              src="~/assets/img/number/2.svg"
              @contextmenu.prevent
            /><img loading="lazy"
              draggable="false"
              width="19"
              height="21"
              src="~/assets/img/number/5.svg"
              @contextmenu.prevent
            />
          </div>
          <br /><br />
          <p>
            Vérification du nom :
            <b
              >{{ data.name.toLowerCase() }},
              {{ data.name.toUpperCase() }}</b
            >
          </p>
          <p>
            Signe astrologik : <b>{{ data.astro }}</b>
          </p>
        </div>
      </div>
      <br />
      <div class="member-section">
        Classement : 25ème 19 parties, 10 gagnées, 9 perdues, 0 nulles 40 points
      </div>
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
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import Tiz from '@/components/Tiz.vue'
import User from '@/components/link/User.vue'
import Group from '@/components/link/Group.vue'
import StrokeText from '@/components/StrokeText.vue'

export default {
  name: 'Member',
  components: {
    Tiz,
    User,
    Group,
    StrokeText,
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get(`/api/member.json`)
    return { data }
  },
  data() {
    return {
      data: null,
    }
  },
  computed: {
    formatDate() {
      return format(new Date(this.$vnodedata.status.date), 'PPP à p', {
        locale: fr,
        addSuffix: true,
      })
    },
  },
}
</script>
<style>
.card {
  background-size: cover;
}
.male .card {
  background-image: url(../../assets/img/member/header_mec.gif);
}

.female .card {
  background-image: url(../../assets/img/member/header_fille.gif);
}
</style>
<style scoped>
.member {
  overflow: hidden;
}

.sentence {
  margin-left: 33%;
  text-align: left;
}

.member-body {
  background: #eff5fa;
  clear: both;
}

.member-header {
  font-family: 'Chimboz Heavy';
  color: #fff;
  font-size: 20px;
  text-shadow: 2px 1px #0008;
  min-height: 90px;
}

.member-header .tiz {
  float: left;
  margin: 40px auto -100% 12%;
  transform: rotate(-5deg) scale(3);
}

.pseudo {
  margin-left: 33%;
  width: 67%;
  font-size: 35px;
  fill: #fff;
  stroke: #f39;
  stroke-width: 3;
  text-shadow: -1px 3px #f39;
  height: 35px;
  overflow: visible;
}

.portrait {
  justify-content: center;
  align-items: center;
  background: url(../../assets/img/member/portrait.png);
  height: 112px;
  width: 104px;
  margin-bottom: 6px;
  overflow: hidden;
}

.member-section,
.member-body {
  text-align: left;
  z-index: 1;
  position: relative;
  border-radius: 8px;
}

.member-section,
.member-text {
  padding: 6px;
}

.member-portrait {
  float: right;
  background: #fff;
  border-radius: 8px;
  padding: 6px;
}

.member-section {
  background: #a9cbe4;
}

.icon {
  display: inline-flex;
  font-family: 'Pixelated Verdana 10';
  font-size: 10px;
  flex-wrap: wrap;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 1px solid #6090be;
  background: linear-gradient(to bottom, #deeaf5, #a7c6e4);
  border-radius: 4px;
}

.online {
  font-family: 'Pixelated Verdana 10';
  font-size: 10px;
  color: #fff;
  justify-content: center;
  width: 100%;
  height: 26px;
  background: linear-gradient(to bottom, #0193ca, #2d4a97);
  border-radius: 10px;
}

.online.tchat {
  background: linear-gradient(to bottom, #81cb00, #40972d);
}

.online img {
  height: 20px;
}
</style>
