<template>
    <div id="container">
        <Header />
        <div class="init-msg">
          <div class="links">
            <nuxt-link :to="localePath('/')" class="btn-sweep">{{$t("pages.home")}}</nuxt-link>
            <nuxt-link :to="localePath('protect')" class="btn-sweep">{{$t("pages.protect")}}</nuxt-link>
            <nuxt-link :to="localePath('connect')" class="btn-sweep">{{$t("pages.connect")}}</nuxt-link>
          </div>
          <br>
          <h2>{{$t("pages.connect")}}</h2>
          </div>
    </div>
</template>



<script>

import Header from "~/components/Header";

export default {
  components:{
    Header
  },
};
</script>
