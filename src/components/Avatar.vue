<template>
  <div id="avatar">
    <b-img-lazy
      v-bind="styles"
      rounded="circle"
      alt="Avatar"
      :src="require('../assets/allen_head_1.jpeg')"
    />
  </div>
</template>

<script>
  export default {
    name: "Avatar",

    data() {
      return {
        styles: {
          width: 180,
          height: 180,
          thumbnail: true,
        },
      };
    },
  };
</script>

<style lang="scss" scoped>
  #avatar {
    margin: 1em;
  }
</style>