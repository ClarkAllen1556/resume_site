<template>
  <div>
    <b-row>
      <b-col >
        <InfoCard :title="$t('view.contact.desc')">
          <FormSpree />
          <!-- <Map /> -->
        </InfoCard>
      </b-col>
      <!-- <b-col sm="4">
        <InfoCard :title="$t('view.about.desc')" sm>
          <ContactInfo />
        </InfoCard>
      </b-col> -->
    </b-row>
  </div>
</template>

<script>
  import InfoCard from "@/components/InfoCard.vue";
  import FormSpree from "@/components/FormSpree.vue";
  import Map from "@/components/Map.vue";
  import ContactInfo from "../assets/meta/ContactInfo.md";

  export default {
    name: "Contact",
    components: {
      InfoCard,
      ContactInfo,
      FormSpree,
      Map,
    },
    setup() {},
  };
</script>