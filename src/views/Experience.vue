<template>
  <div id="experience">
    <InfoCard :title="$t('view.exp.title')" :styles="{ maxWidth: '950px' }">
      <Resume />
    </InfoCard>
  </div>
</template>

<script>
  import InfoCard from "@/components/InfoCard.vue";
  import Notice from "../assets/meta/Notice.md";
  import Resume from "../assets/meta/Resume.vue";

  export default {
    name: "Experience",
    components: {
      InfoCard,
      Notice,
      Resume,
    },
    setup() {},
  };
</script>

<style lang="scss" scoped>
  @import "../styles/custom.scss";

  #experience {
    display: flex;
    justify-content: center;
  }
</style>
