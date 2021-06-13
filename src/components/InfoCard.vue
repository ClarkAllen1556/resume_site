<template>
  <div>
    <b-card
      class="info-card"
      :title="title"
      border-variant="secondary"
      align="left"
      :style="styles"
    >
      <b-card-body>
        <slot></slot>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: "InfoCard",
    props: ["title", "content", "styles"],

    data() {
      return {
        customStyles: {
          ...this.$props.styles,
        },
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import "../styles/custom.scss";

  .info-card {
    box-shadow: 5px 5px 5px $shadow;
    margin-top: 1em;
    border-bottom: 1px solid;
    border-color: #586e75;
    border-left: 1px solid;
    border-right: 1px solid;
    max-width: 1200px;
  }

  @media (min-width: 1200px) {
    .info-card {
      padding-left: 40px;
      padding-right: 40px;
      padding-top: 20px;
      padding-bottom: 20px;
      // color: red;
    }
  } ;
</style>