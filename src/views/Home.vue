<template>
  <div class="home">
    <b-row>
      <b-col>
        <b-card>
          <b-row>
            <InfoCard :title="$t('view.home.title')" :content="$t('view.home.desc')" />
            <InfoCard :content="$t('view.home.desc')" />
          </b-row>
        </b-card>
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
