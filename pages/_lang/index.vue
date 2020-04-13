<template>
  <div id="container">
    <Header />
    <div class="init-msg">
      <h1 class="title">{{ $t("homepage.initTitle")}}</h1>
      <h2 class="subtitle">{{ $t("homepage.initTitle") }}</h2>
      <div class="links">
          <nuxt-link :to="localePath('protect')" class="btn-sweep">{{$t("pages.protect")}}</nuxt-link>
          <nuxt-link :to="localePath('connect')" class="btn-sweep">{{$t("pages.connect")}}</nuxt-link>
      </div>
    </div>


    <HomepageTemplete></HomepageTemplete>

  </div>
</template>

<script>

import Header from "~/components/Header";
import HomepageTemplete from "~/layouts/HomepageTemplete";

export default {
  components:{
    Header,
    HomepageTemplete
  },
};
</script>
