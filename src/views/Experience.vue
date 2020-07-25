<template>
  <div class="experience">
    <b-row>
      <b-col>
        <InfoCard :title="$t('view.exp.title')">
          <Resume />
        </InfoCard>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import InfoCard from "@/components/InfoCard.vue";
  import Notice from "../assets/meta/Notice.md";
  import Resume from "../assets/meta/Resume.md";

  export default {
    name: "Experience",
    components: {
      InfoCard,
      Notice,
      Resume
    },
    setup() {}
  };
</script>

