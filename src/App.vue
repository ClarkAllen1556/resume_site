<template>
  <b-container id="app" fluid>
    <b-row>
      <b-col>
        <Navbar
          @changeLangEN="changeLang('EN')"
          @changeLangJP="changeLang('JP')"
        />
      </b-col>
    </b-row>
    <div class="router-dump">
      <b-row>
        <b-col>
          <router-view />
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
  import Navbar from "@/components/Navbar.vue";

  export default {
    components: {
      Navbar,
    },
    data() {
      return {
        locale: "EN",
        title: "",
      };
    },
    methods: {
      changeLang: async function (lang) {
        this.$i18n.locale = lang;
        this.$store.dispatch("changeLocale", lang);
      },
    },
    computed: {
      updateCurrentPage: function () {
        document.title = this.$route.name;
        this.title = this.$route.name;
        return title;
      },
    },
    created() {
      document.title = this.$route.name;
      this.title = this.$route.name;
    },

    mounted() {
      if (localStorage.getItem("locale")) {
        this.changeLang(localStorage.getItem("locale"));
      }
    },
  };
</script>

<style lang="scss">
  @import "./styles/custom.scss";

  .router-dump {
    margin-bottom: 1em;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: $link;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
