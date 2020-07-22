<template>
  <div id="hero">
    <b-row>
      <b-col>
        <b-jumbotron class="rounded-bottom">
          <Avatar />
          <p v-for="(tag, i) in $t(`meta.tags`)" :key="`tag${i}`">{{ tag }}</p>
          <SocialList />
        </b-jumbotron>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import Avatar from "@/components/Avatar.vue";
  import SocialList from "@/components/SocialList.vue";

  export default {
    name: "Home",
    components: {
      Avatar,
      SocialList
    }
  };
</script>

<style lang="scss">
  .jumbotron {
    background-image: linear-gradient(0deg, #0032a047, rgba(44, 44, 44, 0.2)), url('../assets/bg_kyushu.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-size: cover;
  }
</style>