<template>
<div>
  <thead>
    <tr
      class="category justified pointer"
      :class="{ arrow: hide }"
      @click="hide = !hide"
    >
      <th valign="middle" colspan="5" height="28">
        <a>{{ category.category }}</a>
      </th>
    </tr>
  </thead>
  <tbody
    v-for="(bbs, index) in category.bbs"
    :key="bbs.id"
    :class="{ hide: hide }"
  >
    <tr class="bbs">
      <td align="center" valign="middle" height="50">
        <img loading="lazy"
          draggable="false"
          :src="
            require(`~/assets/img/bbs/folder${bbs.new ? '_new' : ''}${
              bbs.locked ? '_lock' : ''
            }.svg`)
          "
          alt="Ce BBS est verrouillé, tu ne peux pas poster, ni répondre, ni éditer les sujets."
          title="Ce BBS est verrouillé, tu ne peux pas poster, ni répondre, ni éditer les sujets."
          @contextmenu.prevent
        />
      </td>
      <td align="left" width="100%">
        <span class="forumlink">
          <nuxt-link :to="'/bbs/' + bbs.id" class="forumlink pink">{{
            bbs.name
          }}</nuxt-link
          ><br />
        </span>
        <span class="genmed">{{ bbs.desc }}<br /> </span
        ><span class="gensmall"
          >Modérateurs&nbsp;:
          <Group
            v-for="(mod, index) in bbs.mods"
            :key="mod.id"
            :group="mod"
            :separator="index != bbs.mods.length - 1"
            style="display: inline"
          />
        </span>
      </td>
      <td align="center" valign="middle">
        <span class="gensmall">{{ bbs.topics }}</span>
      </td>
      <td align="center" valign="middle">
        <span class="gensmall">{{ bbs.messages }}</span>
      </td>
      <td align="center" valign="middle" nowrap="nowrap">
        {{ formatDate(bbs.last_msg.date) }}<br />
        <User :user="bbs.last_msg.author" />
        &nbsp;»&nbsp;
        <nuxt-link
          :to="
            '/bbs/' +
              bbs.id +
              '/' +
              bbs.last_msg.topicid +
              '#' +
              bbs.last_msg.msgid
          "
          ><img loading="lazy"
            draggable="false"
            :src="require(`~/assets/img/bbs/msg${bbs.new ? '_new' : ''}.svg`)"
            alt="Voir le dernier message"
            title="Voir le dernier message"
            @contextmenu.prevent
        /></nuxt-link>
      </td>
    </tr>
    <tr v-if="index != category.bbs.length - 1">
      <td valign="middle" colspan="5">
        <hr />
      </td>
    </tr>
  </tbody>
  </div>
</template>

<script>
import { formatDistance } from "date-fns";
import { fr } from "date-fns/locale";
import Group from "@/components/link/Group.vue";
import User from "@/components/link/User.vue";

export default {
  name: "Category",
  components: {
    Group,
    User,
  },
  props: {
    category: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      hide: false,
    };
  },
  methods: {
    formatDate(date) {
      return formatDistance(new Date(date), new Date(), {
        locale: fr,
        addSuffix: true,
      });
    },
  },
};
</script>

<style  scoped>
.category th {
  padding: 0 5px;
  color: #6090be;
}

.category a::before {
  content: "▼ ";
  display: inline-block;
  will-change: transform;
  transition: 0.2s;
}

.category.arrow a::before {
  transform: rotate(-90deg);
}

.hide {
  display: none;
}
</style>
