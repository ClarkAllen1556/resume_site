<template>
  <div>
    <b-row>
      <b-col>
        <b-card :title="title">
          <b-card-body> {{ content }} </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: "InfoCard",
    props: [
      "title",
      "content"
    ]
  };
</script>

<style>
</style>