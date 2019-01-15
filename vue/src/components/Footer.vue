<template>
  <div class="Items footer">
      大萌科技有限公司 版权所有 ©2018 Created by 创意生活
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.footer {
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 16px;
  background: lightsalmon;
}
</style>
