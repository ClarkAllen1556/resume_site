<template>
  <div class="about">
    <div class="hero-dump">
      <b-row>
        <b-col>
          <Hero />
        </b-col>
      </b-row>
    </div>
    <b-row>
      <b-col sm="8">
        <InfoCard :title="$t('view.home.desc')">
          <PersonalSummery />
        </InfoCard>
      </b-col>
      <b-col sm="4">
        <InfoCard :title="$t('view.about.desc')" sm>
          <Personal />
        </InfoCard>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import Hero from "@/components/Hero.vue"
  import InfoCard from "@/components/InfoCard.vue";
  import Personal from "../assets/meta/Personal.md";
  import PersonalSummery from "../assets/meta/PersonalSummery.md";

  export default {
    name: "About",
    components: {
      Hero,
      InfoCard,
      Personal,
      PersonalSummery,
    },
    setup() {},
  };
</script>

<style lang="scss" scoped>
  .hero-dump {
    margin: 0.1em;
  }
</style>
