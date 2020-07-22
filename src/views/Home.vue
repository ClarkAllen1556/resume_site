<template>
  <div class="home">
    <b-row>
      <b-col>
        <InfoCard :title="$t('view.home.title')" :content="$t('view.home.desc')"/>
      </b-col>
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
