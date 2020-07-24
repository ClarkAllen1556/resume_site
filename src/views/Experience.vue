<template>
  <div class="experience">
    <b-row>
      <b-col>
        <Notice />
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import InfoCard from "@/components/InfoCard.vue";
  import Notice from "../assets/meta/Notice.md";

  export default {
    name: "Experience",
    components: {
      InfoCard,
      Notice
    },
    setup() {}
  };
</script>

