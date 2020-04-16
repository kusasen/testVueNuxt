<template>
  <div id="container">
    <Header />
    <div class="init-msg">
      <h1 class="title">{{ $t("homepage.initTitle")}}</h1>
      <h2 class="subtitle">{{ $t("homepage.initMsg") }}</h2>
      <div class="links">
          <nuxt-link :to="localePath('/')" class="btn-sweep">{{$t("pages.home")}}</nuxt-link>
          <nuxt-link :to="localePath('protect')" class="btn-sweep">{{$t("pages.protect")}}</nuxt-link>
          <nuxt-link :to="localePath('connect')" class="btn-sweep">{{$t("pages.connect")}}</nuxt-link>
          <nuxt-link :to="localePath('product')" class="btn-sweep">{{$t("pages.product")}}</nuxt-link>
      </div>
    </div>
    <nuxt />

    <Footer/>
  </div>
</template>

<script>

import Header from "~/components/Header";
import Footer from "~/components/Footer";
import {sleep} from "~/assets/js/tool.js"

export default {
  components:{
    Header,
    Footer
  },
  async asyncData(){
    await sleep(1000);
  },
}

</script>