<template>
  <div>
    <b-row>
      <b-col>
        <b-button-group v-for="(link, i) in socials" :key="i">
          <b-button
            class="social-btn"
            :href="link.link"
            v-b-popover.hover.top="$t(`meta.link.${link.short}`)"
            variant="secondary"
          >
            <v-icon :name="link.icon" :label="link.name" />
          </b-button>
        </b-button-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import Socials from "../assets/meta/Socials.json";

  export default {
    name: "SocialList",
    data() {
      return {
        socials: Socials,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .social-btn {
    margin: 0.5em;
  }
</style>