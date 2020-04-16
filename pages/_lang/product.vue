<template>
  <div>
    <ol>
      <li v-for="n in 10"><nuxt-link :to="{path: localePath('product') ,params: {id: n} }">link {{ n }}</nuxt-link></li>
    </ol>
  </div>
</template>

<script>
export default {
};
</script>
