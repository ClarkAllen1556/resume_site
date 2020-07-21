<template>
  <div>
    <b-navbar sticky variant="info">
      <b-navbar-brand href="#/"> {{ $t('label.title') }} </b-navbar-brand>
      <b-collapse id="collapse-nav" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#/about"> {{ $t('label.about' )}} </b-nav-item>
          <b-nav-item href="#/contact"> {{ $t('label.contact' )}} </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style>

</style>