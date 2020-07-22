<template>
  <b-container id='app' fluid>
    <Navbar @changeLangEN="changeLang('EN')" @changeLangJP="changeLang('JP')" />
    <b-row no-gutters="">
      <b-col>
        <Hero />
      </b-col>
    </b-row>
    <div class="router-dump">
      <b-row >
      <b-col>
        <router-view />
      </b-col>
    </b-row>
    </div>
  </b-container>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import Hero from "@/components/Hero.vue";

  import { useStore } from './store/index'
  import { watch, computed, reactive, ref } from '@vue/composition-api'

  export default {
    components: {
      Navbar,
      Hero,
    },
    data() {
      return {
        locale: "EN"
      }
    },
    methods: {
      changeLang: async function(lang) {
        this.$i18n.locale = lang
        useStore().dispatch('changeLocale', lang)
      }
    }
  }
</script>

<style lang="scss">
  .router-dump {
    margin-top: .5em;
    margin-bottom: .5em;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
