<template>
  <div>
    <b-col>
      <b-card class="info-card" :title="title" border-variant="secondary" align="left">
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
    props: ["title", "content"]
  };
</script>

<style lang="scss">
.info-card {
  margin: .5em
}
</style>