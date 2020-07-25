<template>
  <div id="avatar">
    <b-img-lazy
      v-bind="mainProps"
      rounded="circle"
      alt="Avatar"
      :src="require('../assets/allen_head_1.jpeg')"
    />
  </div>
</template>

<script>
  import { ref } from "@vue/composition-api";

  export default {
    name: "Avatar",
    setup() {
      const mainProps = {
        width: 180,
        height: 180,
        thumbnail: true,
      };

      return {
        mainProps,
      };
    },
  };
</script>

<style lang="scss" scoped>
  #avatar {
    margin: 1em;
  }
</style>