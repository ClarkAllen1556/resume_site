<template>
  <div class="about">
    <b-row>
      <b-col>
        <InfoCard :title="$t('view.about.title')" :content="$t('view.about.desc')"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import InfoCard from "@/components/InfoCard.vue";

  export default {
    name: "About",
    components: {
      InfoCard
    },
    setup() {}
  };
</script>

