<template>
  <div class="experience">
    <b-row>
      <b-col sm="8">
        <InfoCard :title="$t('view.exp.title')">
          <Resume />
        </InfoCard>
      </b-col>
      <b-col sm="4" v-if="false">
        <InfoCard :title="$t('view.exp.skill')">
          <b-container>
            <b-row>
              <b-col>
                <b-card class="skill-card" header="Languages">
                  <b-card-body>
                    <b-list-group flush>
                      <b-list-group-item>
                        <h5>JavaScript/TypeScript</h5>
                        <b-progress height="2rem">
                          <b-progress-bar value="90%">
                            <strong>95%</strong>
                          </b-progress-bar>
                        </b-progress>
                      </b-list-group-item>
                      <b-list-group-item>
                        <h5>Java</h5>
                        <b-progress height="2rem">
                          <b-progress-bar value="80%">
                            <strong>80%</strong>
                          </b-progress-bar>
                        </b-progress>
                      </b-list-group-item>
                      <b-list-group-item>
                        <h5>C/++</h5>
                        <b-progress height="2rem">
                          <b-progress-bar value="80%">
                            <strong>80%</strong>
                          </b-progress-bar>
                        </b-progress>
                      </b-list-group-item>
                    </b-list-group>
                  </b-card-body>
                </b-card>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-card class="skill-card" header="Framworks">
                  <b-card-body>
                    <b-list-group flush>
                      <b-list-group-item>
                        <h5>Node.js</h5>
                        <b-progress height="2rem">
                          <b-progress-bar value="95%">
                            <strong>95%</strong>
                          </b-progress-bar>
                        </b-progress>
                      </b-list-group-item>
                      <b-list-group-item>
                        <h5>Vue.js</h5>
                        <b-progress height="2rem">
                          <b-progress-bar value="80%">
                            <strong>80%</strong>
                          </b-progress-bar>
                        </b-progress>
                      </b-list-group-item>
                      <b-list-group-item>
                        <h5>Mocha & Testcafe Testing Frameworks</h5>
                        <b-progress height="2rem">
                          <b-progress-bar value="85%">
                            <strong>85%</strong>
                          </b-progress-bar>
                        </b-progress>
                      </b-list-group-item>
                    </b-list-group>
                  </b-card-body>
                </b-card>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-card class="skill-card" header="Aspects">
                  <b-card-body>
                    <b-list-group flush>
                      <b-list-group-item>
                        <h5>Web Development</h5>
                        <b-progress height="2rem">
                          <b-progress-bar value="75%">
                            <strong>75%</strong>
                          </b-progress-bar>
                        </b-progress>
                      </b-list-group-item>
                      <b-list-group-item>
                        <h5>Software Testing</h5>
                        <b-progress height="2rem">
                          <b-progress-bar value="90%">
                            <strong>90%</strong>
                          </b-progress-bar>
                        </b-progress>
                      </b-list-group-item>
                      <b-list-group-item>
                        <h5>System Automation</h5>
                        <b-progress height="2rem">
                          <b-progress-bar value="80%">
                            <strong>80%</strong>
                          </b-progress-bar>
                        </b-progress>
                      </b-list-group-item>
                      <b-list-group-item>
                        <h5>System Design</h5>
                        <b-progress height="2rem">
                          <b-progress-bar value="75%">
                            <strong>75%</strong>
                          </b-progress-bar>
                        </b-progress>
                      </b-list-group-item>
                    </b-list-group>
                  </b-card-body>
                </b-card>
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
      Resume,
    },
    setup() {},
  };
</script>

<style lang="scss" scoped>
  @import "../styles/custom.scss";

  .skill-card {
    margin-bottom: 1em;
    box-shadow: 5px 5px 5px $shadow;
    border-bottom: 1px solid;
    border-color: #586e75;
    border-left: 1px solid;
    border-right: 1px solid;
  }

</style>
