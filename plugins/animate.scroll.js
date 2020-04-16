import Vue from 'vue'
import vueKinesis from 'vue-kinesis'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

Vue.component('kinesis-container', KinesisContainer)
Vue.component('kinesis-element', KinesisElement)
Vue.use(vueKinesis)