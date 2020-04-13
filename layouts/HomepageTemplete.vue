<template>
  <div class="row">
  <component :is="item.template" v-for="item in this.data.components" :key="item.id"></component>
  </div>
</template>

<script>
import axios from 'axios';
import FullWidth from "~/components/template/FullWidth";
import LeftToRight from "~/components/template/LeftToRight";
import RightToLeft from "~/components/template/RightToLeft";

export default {
  components:{
    FullWidth,
    LeftToRight,
    RightToLeft
  },
  data(){
    return{
      data: "",
      tempArray: [],
      all: ""
    }
  },
  mounted() {
    axios.get("https://gist.githubusercontent.com/kusasen/c08eeeee562306fe2da6772085ec63a7/raw/11852cd5edd799a6b8275ae52f81c917944cdd62/homepage.json")
      .then(response => (this.data = response.data));
      
  },
  computed: {
    componentInstance: function(){
      // let params = this.$route.query
      // let components = this.data.components
      // let template = params.template
      // if (template === undefined) {
      //   template = "homepage"
      // }
      // if (template == this.data.path && components !== undefined) {
      //   let component = (components || []).map(c => {
      //     return {...c}
      //   })
      //   if (component.length > 0) {
      //     return this.all = this.data.components.map(item=> item.template);
      //   }
      // }
    }
  },
}
</script>