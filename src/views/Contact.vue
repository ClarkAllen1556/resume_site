<template>
  <div>
    <b-row>
      <b-col sm="8">
        <InfoCard :title="$t('view.contact.desc')">
          <FormSpree />
        </InfoCard>
      </b-col>
      <b-col sm="4">
        <InfoCard :title="$t('view.about.title')" sm>
          <ContactInfo />
          <Map />
        </InfoCard>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import InfoCard from "@/components/InfoCard.vue"
  import FormSpree from "@/components/FormSpree.vue"
  import Map from "@/components/Map.vue"
  import ContactInfo from "../assets/meta/ContactInfo.md"

  export default {
    name: "Contact",
    components: {
      InfoCard,
      ContactInfo,
      FormSpree,
      Map
    },
    setup() {}
  };
</script>