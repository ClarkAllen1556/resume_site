<template>
  <div class="home">
    <b-row v-if="false">
      <b-col sm="8">
        <InfoCard :title="$t('view.about.desc')">
          <PersonalSummery />
        </InfoCard>
      </b-col>
      <b-col sm="4">
        <InfoCard :title="$t('view.about.title')" sm>
          <PostContent :postFilePath="'src/assets/meta/Personal.md'" />
        </InfoCard>
    </b-row>
  </div>
</template>

<script>
  import InfoCard from "@/components/InfoCard.vue";

  export default {
    name: "Home",
    components: {
      InfoCard
    },
    setup() {}
  };
</script>
