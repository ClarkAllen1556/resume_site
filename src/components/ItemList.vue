<template>
  <div>
    <p v-for="(link, i) in socials" :key="i"> {{ link.name }} </p>
  </div>
</template>

<script>
import Socials from '../assets/meta/Socials.json'

export default {
  name: 'ItemList',
  setup() {
    const socials = Socials

    return {
      socials
    }
  }
}
</script>

<style>

</style>