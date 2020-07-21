<template>
  <div class="home">
    <b-row>
      <b-col>
        <Avatar />
        <p>{{ $t('view.home.desc') }}</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import Avatar from "@/components/Avatar.vue";

  export default {
    name: "Home",
    components: {
      Avatar
    }
  };
</script>
