<template>
  <div>
    <b-navbar sticky class="rounded-bottom navi">
      <b-navbar-brand href="#/">
        <img
          class="d-inline-block align-middle"
          :src="require('../assets/logo.png')"
          style="height: 4rem; width: 4rem"
          loading="lazy"
        />
        <div class="nav-title">
          {{ $t("label.title") }}
        </div>
      </b-navbar-brand>
      <b-collapse id="collapse-nav" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#/exp">
            <strong>{{ $t("label.exp") }}</strong>
          </b-nav-item>
          <b-nav-item href="#/contact">
            <strong>{{ $t("label.contact") }}</strong>
          </b-nav-item>
          <b-nav-item href="#/">
            <v-icon :name="'home'" />
          </b-nav-item>

          <b-nav-dropdown right no-caret>
            <template v-slot:button-content>
              <v-icon :name="'globe-asia'" />
            </template>
            <b-dropdown-item-button
              v-for="(lang, i) in langs"
              :key="`Lang${i}`"
              @click="$emit(`changeLang${lang}`)"
              >{{ lang }}</b-dropdown-item-button
            >
          </b-nav-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: "Navbar",
    computed: {
      ...mapGetters(["langs"]),
    },
  };
</script>

<style lang="scss" scoped>
  @import "../styles/custom.scss";

  .navi {
    background: $background2;
    border-bottom: 1px solid;
    border-color: #586e75;
    border-left: 1px solid;
    border-right: 1px solid;
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    .nav-title {
      display: none;
    }
  } ;
</style>