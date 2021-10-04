<template>
  <div>
    <div
      class="header"
      :style="{
        'background-image':
          'url(' +
          require('~/assets/img/navbar/svg/' + date.getHours() + '.svg') +
          ')',
      }"
    >
      <nuxt-link to="/"
        ><img id="logo"
          loading="lazy"
          draggable="false"
          alt="Logo Chapatiz Retro"
          src="../assets/img/logo.svg"
          @contextmenu.prevent
      /></nuxt-link>
      <div class="login flex centered">
        <div style="margin-top: -10px">
          <User
            id="username"
            :user="user || { name: 'Visiteur' }"
            style="display: inherit"
          />
          <button
            v-if="authenticated"
            id="connect"
            class="flex centered"
            @click="logout"
          >
            <img loading="lazy"
              draggable="false"
              alt="Disconnect icon"
              src="../assets/img/icon/login/disconnect.svg"
              @contextmenu.prevent
            />
            {{ $t('navbar.logout') }}
          </button>
          <button v-else>
            <nuxt-link
              id="connect"
              to="/login"
              class="flex centered"
            >
              <img loading="lazy"
                draggable="false"
                alt="Connect icon"
                src="../assets/img/icon/login/connect.svg"
                @contextmenu.prevent
              />
              {{ $t('navbar.login') }}
            </nuxt-link>
          </button>
        </div>
        <Tiz
          style="margin-right: 17px"
          :avatar="user ? user.look.avatar : 0"
          :emote="user ? user.look.emote : 1"
          :hat="user ? user.look.hat : 1"
          :body="user ? user.look.body : 1"
          :shoe="user ? user.look.shoe : 1"
          :item0="user ? user.look.item0 : 1"
          :item1="user ? user.look.item1 : 1"
          :item2="user ? user.look.item2 : 1"
        />
      </div>
    </div>
    <div id="nav" class="flex">
      <nuxt-link to="/"
        ><button class="nav-btn flex centered">
          <img loading="lazy"
            draggable="false"
            alt="Home icon"
            class="nav-icon"
            src="~/assets/img/navbar/icon/home.svg"
            style="margin: 2px; padding: 1px"
            @contextmenu.prevent
          /></button
      ></nuxt-link>
      <a target="_blank" href="/tchat"
        ><button class="nav-btn flex centered">
          <div class="nav-text">
            <img loading="lazy"
              draggable="false"
              alt="Tchat icon"
              class="nav-icon"
              src="~/assets/img/navbar/icon/tchat.svg"
              @contextmenu.prevent
            />
            <StrokeText style="z-index: 1" class="btn-label">{{
              $t('navbar.play')
            }}</StrokeText>
          </div>
          <img loading="lazy"
            draggable="false"
            alt="Arrow icon"
            class="arrow jitter"
            src="~/assets/img/arrow.svg"
            @contextmenu.prevent
          /></button
      ></a>
      <nuxt-link v-if="authenticated" to="/account"
        ><button class="nav-btn flex centered">
          <div class="nav-text">
            <img loading="lazy"
              draggable="false"
              alt="Account icon"
              class="nav-icon"
              src="~/assets/img/navbar/icon/account.svg"
              @contextmenu.prevent
            />
            <StrokeText style="z-index: 1" class="btn-label">{{
              $t('navbar.account')
            }}</StrokeText>
          </div>
        </button></nuxt-link
      >
      <nuxt-link to="/games"
        ><button class="nav-btn flex centered">
          <div class="nav-text">
            <img loading="lazy"
              draggable="false"
              alt="Games icon"
              class="nav-icon"
              src="~/assets/img/navbar/icon/games.svg"
              @contextmenu.prevent
            />
            <StrokeText style="z-index: 1" class="btn-label">{{
              $t('navbar.games')
            }}</StrokeText>
          </div>
        </button></nuxt-link
      >
      <nuxt-link to="/members"
        ><button class="nav-btn flex centered">
          <div class="nav-text">
            <img loading="lazy"
              draggable="false"
              alt="Member icon"
              class="nav-icon"
              src="~/assets/img/navbar/icon/members.svg"
              @contextmenu.prevent
            />
            <StrokeText style="z-index: 1" class="btn-label">{{
              $t('navbar.members')
            }}</StrokeText>
          </div>
        </button></nuxt-link
      >
      <nuxt-link to="/bbs"
        ><button class="nav-btn flex centered">
          <div class="nav-text">
            <img loading="lazy"
              draggable="false"
              alt="Community icon"
              class="nav-icon"
              src="~/assets/img/navbar/icon/community.svg"
              @contextmenu.prevent
            />
            <StrokeText style="z-index: 1" class="btn-label">{{
              $t('navbar.community')
            }}</StrokeText>
          </div>
        </button></nuxt-link
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Tiz from '@/components/Tiz.vue'
import User from '@/components/link/User.vue'
import StrokeText from '@/components/StrokeText.vue'

export default {
  name: 'Navbar',
  data() {
    return {
      date: new Date(),
    }
  },
  computed: {
    ...mapGetters('auth', ['authenticated']),
    ...mapState('auth', ['user']),
  },
  components: {
    Tiz,
    StrokeText,
    User,
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
      this.$router.push(this.$route.path == '/' ? '/login' : this.$route.path)
    },
  },
  /* created() {
    document.body.className = 'h' + this.date.getHours()
  }, */
}
</script>
<style  scoped>
.header {
  width: 100%;
  height: 78px;
  background-position: center;
  background-size: cover;
  //border-radius: 99px;
  //box-shadow: inset 0px 0px 10px 5px #6090be;
}

#logo {
  float: left;
}

.login {
  text-align: right;
  justify-content: flex-end;
  padding: 12px 14px 0 0;
}

#username {
  font-family: 'Pixelated Verdana 12';
  font-weight: bold;
  font-size: 16px;
  padding: 0 8px 8px 0;
  color: #069;
  text-shadow: 0 0 5px #fff, 0 0 5px #fff;
}

#connect {
  font-family: 'Pixelated Verdana 12';
  font-size: 16px;
  font-weight: normal;
  color: #000;
  border-radius: 100px;
  padding: 3px;
  margin-right: -20px;
  border: none;
  background: #fff;
  width: 130px;
}

#connect img {
  padding-right: 4px;
}

#connect:hover {
  background: #ade5f3;
  font-weight: bold;
  letter-spacing: 0;
}

.nav-btn {
  cursor: pointer;
  height: 25px;
  background-image: linear-gradient(
    to bottom,
    #fe9ae0 0%,
    #ff00a6 50%,
    #c10276 50%,
    #ff009c
  );
  padding: 0 4%;
  font-size: 18px;
  border-width: 2px 1px;
  border-style: solid;
  border-color: #f0009c #f0009c #a10069 #f0009c;
  box-shadow: 0 2px 1px #0006;
}

#nav a:not(:first-child) {
  display: contents;
}

#nav a:nth-child(2) .nav-btn {
  border-left-color: #f0009c;
  border-radius: 10px 0 0 10px;
  border-left-width: 5px;
}

#nav a:last-child .nav-btn {
  border-right-color: #f0009c;
  border-radius: 0 10px 10px 0;
  border-right-width: 5px;
}

.nav-icon {
  height: 100%;
  filter: saturate(1.5) hue-rotate(308deg);
}

.nav-btn:hover .nav-icon,
.nav-btn:active .nav-icon,
#nav a.nuxt-link-exact-active .nav-icon {
  filter: none;
}

#nav a:first-child .nav-btn {
  border-right-color: #f0009c;
  border-left-color: #f0009c;
  background-image: radial-gradient(
    ellipse 120% 100% at 50% 0%,
    #fe9ae0,
    #ff00a6 49%,
    #c10276 51%,
    #ff009c
  );
  border-radius: 10px;
  border-width: 2px 5px;
  margin-right: 12px;
}

#nav {
  justify-content: center;
  padding-bottom: 10px;
}

.nav-btn:hover,
.nav-btn:active,
#nav a.nuxt-link-exact-active .nav-btn {
  background-image: linear-gradient(
    to bottom,
    #fec9b4,
    #ff7b00 50%,
    #d15503 50%,
    #fc8536
  );
  color: #fff !important;
  border-color: #f80 #f80 #9f3400 #f80;
}

#nav a:first-child .nav-btn:hover,
#nav a:first-child .nav-btn:active,
#nav a:first-child.nuxt-link-exact-active .nav-btn {
  background-image: radial-gradient(
    ellipse 120% 100% at 50% 0%,
    #fec9b4 0%,
    #ff7b00 49%,
    #d15503 51%,
    #f80
  );
}

#nav a:nth-child(2) .nav-btn:hover,
#nav a:first-child .nav-btn:hover,
#nav a:nth-child(2) .nav-btn:active,
#nav a:first-child .nav-btn:active,
#nav a:first-child.nuxt-link-exact-active .nav-btn,
#nav a:nth-child(2).nuxt-link-exact-active .nav-btn {
  border-left-color: #f80;
}

#nav a:last-child .nav-btn:hover,
#nav a:first-child .nav-btn:hover,
#nav a:last-child .nav-btn:active,
#nav a:first-child .nav-btn:active,
#nav a:last-child.nuxt-link-exact-active .nav-btn,
#nav a:first-child.nuxt-link-exact-active .nav-btn {
  border-right-color: #f80;
}

a:hover {
  text-decoration: none;
}

.nav-btn:active {
  background-image: linear-gradient(
    to top,
    #fec9b4,
    #ff7b00 50%,
    #d15503 50%,
    #f80
  ) !important;
}

#nav a:first-child .nav-btn:active {
  background-image: radial-gradient(
    ellipse 120% 100% at 50% 0%,
    #f80,
    #d15503 49%,
    #ff7b00 51%,
    #fec9b4
  ) !important;
}

.nav-text {
  font-family: 'Chimboz Heavy';
  font-weight: normal;
  font-size: 18px;
  height: 100%;
  fill: #fff;
  stroke: #a10069;
  stroke-width: 3;
  display: flex;
  justify-content: center;
}

.btn-label,
.arrow {
  display: none;
}

@media (min-width: 600px) {
  .btn-label {
    display: inherit;
  }

  .nav-btn:hover .nav-text,
  .nav-btn:active .nav-text,
  #nav a.nuxt-link-exact-active .nav-text {
    stroke: #d15503;
  }

  a:not(:first-child) .nav-btn {
    padding: 0 20px;
  }

  .nav-btn:hover .arrow {
    filter: saturate(1.2);
  }

  .arrow {
    display: inherit;
    margin-right: -30px;
    z-index: 2;
  }
}
</style>
