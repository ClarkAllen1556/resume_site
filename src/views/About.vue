<template>
  <div class="about">
    <b-row>
      <b-col sm="8">
        <InfoCard :title="$t('view.about.desc')">
          <PersonalSummery />
        </InfoCard>
      </b-col>
      <b-col sm="4">
        <InfoCard :title="$t('view.about.title')" sm>
          <Personal />
        </InfoCard>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import InfoCard from "@/components/InfoCard.vue";
  import Personal from "../assets/meta/Personal.md";
  import PersonalSummery from "../assets/meta/PersonalSummery.md";

  export default {
    name: "About",
    components: {
      InfoCard,
      Personal,
      PersonalSummery
    },
    setup() {}
  };
</script>

