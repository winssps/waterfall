<template>
    <div class="main">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class Content extends Vue {}
</script>
<style lang="less">
.main {
  background: #fff;
  width: 1200px;
  margin: 0 auto;
  justify-self: center;
  display: flex;

  @media screen and (min-width: 400px) {
     height: 1600px;
   }

   @media screen and (min-width: 600px) {
     height: 1100px;
   }

   @media screen and (min-width: 800px) {
     height: 1300px;
   }

   @media screen and (min-width: 1100px) {
     height: 1300px;
   }
}
</style>

