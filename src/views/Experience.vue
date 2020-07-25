<template>
  <div class="experience">
    <b-row>
      <b-col sm="8">
        <InfoCard :title="$t('view.exp.title')">
          <Resume />
        </InfoCard>
      </b-col>
      <b-col sm="4">
        <InfoCard :title="$t('view.exp.skill')">
          <b-container>
            <b-row>
              <b-col>
                <h4> JavaScript/TypeScript </h4>
                <b-progress height="2rem">
                  <b-progress-bar  value="90%">
                    <strong> 90% </strong>
                  </b-progress-bar>
                </b-progress>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <h4> Node.js </h4>
                <b-progress height="2rem">
                  <b-progress-bar  value="95%">
                    <strong> 95% </strong>
                  </b-progress-bar>
                </b-progress>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <h4> Vue.js </h4>
                <b-progress height="2rem">
                  <b-progress-bar  value="80%">
                    <strong> 80% </strong>
                  </b-progress-bar>
                </b-progress>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <h4> Web Development (HTML/CSS/PHP) </h4>
                <b-progress height="2rem">
                  <b-progress-bar value="75%">
                    <strong> 75% </strong>
                  </b-progress-bar>
                </b-progress>
              </b-col>
            </b-row>
          </b-container>
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