<template>
  <div>
    <b-col>
      <b-card
        class="info-card"
        :title="title"
        border-variant="secondary"
        align="left"
      >
        <b-card-body>
          <slot></slot>
        </b-card-body>
      </b-card>
    </b-col>
  </div>
</template>

<script>
  export default {
    name: "InfoCard",
    props: ["title", "content"],
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
  }
</style>