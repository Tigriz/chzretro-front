<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <nuxt-link v-if="data" to="/levels">
          <div class="level fullwidth">
            {{ $t('level') }}
            <div class="number">
              <img v-for="number in data.level.toString(10)"
                :key="number.index"
                loading="lazy"
                draggable="false"
                :alt="number"
                width="19"
                height="21"
                :src="require(`~/assets/img/number/${number}.svg`)"
                @contextmenu.prevent
              />
            </div>
          </div>
        </nuxt-link>
        <nuxt-link v-if="data" to="/mi">
          <div class="messages">
            <div>
              <img v-for="number in data.messages.toString(10)"
                :key="number.index"
                loading="lazy"
                draggable="false"
                :alt="number"
                width="19"
                height="21"
                :src="require(`~/assets/img/number/pink/${number}.svg`)"
                @contextmenu.prevent
              />
            </div>
            <img loading="lazy"
              draggable="false"
              alt="Messages"
              src="~/assets/img/home/messages.png"
              width="154"
              height="67"
              class="fullwidth"
              @contextmenu.prevent
            />
          </div>
          {{ $tc('mi.message', data.messages) }}
        </nuxt-link>
        <nuxt-link v-if="data" to="/friends">
          <div class="friends">
            <div>
              <img v-for="number in data.friends.toString(10)"
                :key="number.index"
                loading="lazy"
                draggable="false"
                :alt="number"
                width="19"
                height="21"
                :src="require(`~/assets/img/number/pink/${number}.svg`)"
                @contextmenu.prevent
              />
            </div>
            <img loading="lazy"
              draggable="false"
              alt="Friends"
              src="~/assets/img/home/friends.png"
              width="154"
              height="67"
              class="fullwidth"
              @contextmenu.prevent
            />
          </div>
          {{ $tc('friends.online', data.friends) }}
        </nuxt-link>
      </Card>
      <br />
      <Bank v-if="data" :credits="data.credits" />
    </template>
    <img loading="lazy"
      draggable="false"
      src="/announce/summer.png"
      width="468"
      height="213"
      style="width: 100%"
      @contextmenu.prevent
    />
    <br />
    <Card v-if="data && data.lottery" filename="lottery.png">
      <template #header>
        <img loading="lazy"
          draggable="false"
          width="434"
          height="87"
          src="~/assets/img/home/header_hello.png"
          style="width: 100%"
          @contextmenu.prevent
        />
      </template>
      {{ $t('lottery.firstLine') }}<br />
      {{ $t('lottery.secondLine') }}<br /><br />
      <RandomNumber :max="30" :value="20" :duration="5000" />
      <br /><br />
      <Button color="orange" class="btn-loto" @click="handle"
        ><template #prepend
          ><img ref="handle"
            loading="lazy"
            draggable="false"
            alt="Lottery handle"
            class="handle"
            src="~/assets/img/lottery/up.svg"
            @contextmenu.prevent /></template
        >Jouer</Button
      ></Card
    ><br />
    <Card color="yellow" justified>
      <template #subtop>Chapaniouz</template>
      <template #header
        ><img loading="lazy"
          draggable="false"
          src="~/assets/img/home/chimboking.gif"
          alt="Chimboking portrait"
          style="float: left; margin: 0 17px 17px 0"
          @contextmenu.prevent
        />
        Changelog du 12/07/2021
      </template>

      - La salle En route vers Kopakabana est désormais ouverte ! L'ambiance
      change selon l'heure (heure de Paris)<br />
      - La salle Patojdur est désormais ouverte !<br />
      - Le jeu Patojdur est opérationnel avec son classement (il manque
      l'animation de nage)<br />
      VIDEZ VOTRE CACHE<br />
    </Card>
    <br />
    <Card>
      <template #subtop>Chaparazzi</template>
      <div class="gallery flex">
        <img loading="lazy"
          draggable="false"
          src="~/assets/img/home/chimboking.gif"
          alt="Chimboking portrait"
          style="margin: auto"
          @contextmenu.prevent
        /><img loading="lazy"
          draggable="false"
          src="~/assets/img/home/chimboking.gif"
          alt="Chimboking portrait"
          style="margin: auto"
          @contextmenu.prevent
        /><img loading="lazy"
          draggable="false"
          src="~/assets/img/home/chimboking.gif"
          alt="Chimboking portrait"
          style="margin: auto"
          @contextmenu.prevent
        />
      </div>
    </Card>
    <template #right-column
      ><Card v-if="data" color="blue" top>
        <template #header
          ><nuxt-link to="/online"
            ><h1>{{ data.connected }}</h1>
            {{ $tc('connecteds', data.connected) }}</nuxt-link
          ></template
        >
        {{ data.members }} {{ $tc('members.text', data.members) }} <br />
        {{ data.last24 }} {{ $tc('members.past', data.last24) }} </Card
      ><br />
      <Card color="blue">
        <template #button>
          <Button icon="register.svg">{{ $t('help.button') }}</Button>
        </template>

        <nuxt-link to="/help"
          ><img loading="lazy"
            draggable="false"
            alt="Puce"
            src="~/assets/img/puce.svg"
            @contextmenu.prevent
          />{{ $t('help.tip') }}</nuxt-link
        ></Card
      ><br />
      <Card
        color="yellow"
        filename="packs.png"
        :width="154"
        :height="96"
        class="packs"
      >
        <template #button>
          <Button color="yellow" icon="register.svg">Pack</Button>
        </template>
        <Pack header="summer.png" footer="summer.png" /><br /><br />
        <Button color="yellow" icon="register.svg" class="fullwidth"
          >Item</Button
        ><br />
        <Pack header="summer.png" footer="summer.png" />
      </Card>
    </template>
    <!--<metainfo>
      <template #title="{ content }">Chapatizᵣₑₜᵣₒ {{ $t(content) }}</template>
    </metainfo>-->
  </Container>
</template>

<script>
import RandomNumber from '@/components/RandomNumber.vue'
import Bank from '@/components/Bank.vue'
import Pack from '@/components/Pack.vue'

export default {
  name: 'Home',
  components: {
    Bank,
    RandomNumber,
    Pack,
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get(`/api/home.json`)
    return { data }
  },
  data() {
    return {
      data: null,
    }
  },
  methods: {
    handle({ currentTarget }) {
      this.$refs.handle.src = require('~/assets/img/lottery/down.svg')
      setTimeout(() => {
        this.$refs.handle.src = require('~/assets/img/lottery/up.svg')
        currentTarget.disabled = true
      }, 200)
    },
  },
  metaInfo: {
    title: 'title.home',
    meta: [
      {
        name: 'description',
        content:
          "ChapatizRetro.com est un site pour s'amuser : tu peux tchater et te faire des amis, créer et faire évoluer ton personnage, jouer seul ou à plusieurs, fonder des groupes et même te marier !",
      },
      {
        property: 'og:title',
        content: 'Chapatiz Retro, accueil',
      },
      {
        property: 'og:description',
        content: 'Chapatiz Retro, accueil',
      },
      { property: 'og:site_name', content: 'Chapatiz Retro' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/announce/summer.png' },
      /* { property: "og:image:width", content: "192" },
      { property: "og:image:height", content: "192" } */
    ],
  },
}
</script>
<style>
.btn-loto .btn-text {
  margin-left: 16px;
}

.packs .card-btn {
  background: linear-gradient(
    to bottom,
    #7aaaf0,
    #7aaaf0 50%,
    var(--main-card-color) 50%
  );
}
</style>

<style scoped>
.gallery {
  flex-wrap: wrap;
}

.messages div {
  transform: translate3d(20%, 200%, 0);
}

.friends div {
  transform: translate3d(0, 210%, 0);
}

.handle {
  margin-left: calc(-4% - 16px);
  margin-top: -16px;
  border-image: url(../assets/img/lottery/down.svg);
}
</style>
