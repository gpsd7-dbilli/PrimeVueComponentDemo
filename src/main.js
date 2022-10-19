import { defineCustomElement } from 'vue';
import Test from './Test.ce.vue'

 const element = defineCustomElement(Test);
 customElements.define('my-component', element)
