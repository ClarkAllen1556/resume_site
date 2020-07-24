<template>
  <div>
    <b-navbar sticky variant="info" class="rounded-bottom">
      <b-navbar-brand href="#/" >
        <img class="d-inline-block align-middle" :src="require('../assets/favicon.png')" />
        {{ $t('label.title') }}</b-navbar-brand>
      <b-collapse id="collapse-nav" is-nav>
        <b-navbar-nav class="ml-auto">

          <b-nav-item href="#/about">{{ $t('label.exp' )}}</b-nav-item>
          <b-nav-item href="#/contact">{{ $t('label.contact' )}}</b-nav-item>

          <b-nav-dropdown :text="$t('label.locale')" right>
            <b-dropdown-item-button
              v-for="(lang, i) in store.getters.langs"
              :key="`Lang${i}`"
              @click="$emit(`changeLang${lang}`)"
            >{{ lang }}</b-dropdown-item-button>
          </b-nav-dropdown>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  import { useStore } from "../store/index";

  export default {
    name: "Navbar",
    setup() {
      const store = useStore();

      return {
        store
      };
    }
  };
</script>

<style>
</style>