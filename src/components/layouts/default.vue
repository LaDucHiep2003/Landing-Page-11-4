<template>
  <header />
    <slot />
  <footer />
</template>

<script>
import header from "@/components/header.vue";
import footer from "@/components/footer.vue";
export default {
  components: {
    header,
    footer,
  }
}

</script>