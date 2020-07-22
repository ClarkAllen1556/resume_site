<template>
  <div>
    <b-row>
      <b-col v-for="(link, i) in socials" :key="i">
        <b-link :href="link.link" v-b-popover.hover.top="$t(`meta.link.${link.short}`)" style="none">
          <v-icon :name="link.icon" :label="link.name" />
        </b-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Socials from '../assets/meta/Socials.json'

export default {
  name: 'SocialList',
  setup() {
    const socials = Socials

    return {
      socials
    }
  }
}
</script>