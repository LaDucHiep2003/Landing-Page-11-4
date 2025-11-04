<template>
  <header />
    <slot />
  <footer />
</template>

<script>
import header from "../header.vue";
import footer from "../footer.vue";
export default {
  components: {
    header,
    footer,
  }
}

</script>