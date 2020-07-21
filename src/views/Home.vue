<template>
  <div class="home">
    <b-row>
      <b-col>
        <Avatar />
        <p>{{ $t('view.home.desc') }}</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <ItemList />
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import Avatar from "@/components/Avatar.vue";
  import ItemList from "@/components/ItemList.vue";

  export default {
    name: "Home",
    components: {
      Avatar,
      ItemList
    },
    setup() {
    }
  };
</script>
