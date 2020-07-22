<template>
  <div class="home">
    <b-row>
      <b-col>
        <Avatar />
        <p>{{ $t('view.home.desc') }}</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <SocialList />
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
    },
    setup() {
    }
  };
</script>
