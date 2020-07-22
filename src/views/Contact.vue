<template>
  <div>
    <b-row>
      <b-col>
        <InfoCard :title="$t('view.contact.title')" :content="$t('view.contact.desc')"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import InfoCard from "@/components/InfoCard.vue";

  export default {
    name: "Contact",
    components: {
      InfoCard
    },
    setup() {}
  };
</script>