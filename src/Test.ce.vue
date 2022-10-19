<template>
  <div class="grid p-2">
    <div class="col-12">
      <card>
        <template #content>
         Card TEST
         <Button type="button" icon="pi pi-caret-right" label="Press Me" />
        </template>
      </card>
    </div>
  </div>

</template>


<script setup>

import PrimeVue from 'primevue/config';
import Card from 'primevue/card';
import Button from 'primevue/button';
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css'; 

</script>

<style>
</style>
