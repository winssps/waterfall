<template>
<div class="main-header-box bgcolor">
    <div class="header">
        <div class="meun">
          <img class="icon" src="../assets/logo.png" />
          <ul class="list">
              <li v-for="(item, index) in nav" :key="index">
                    <a href="#">{{item}}</a>
              </li>
          </ul>
        </div>
        <div class="status">
          <ul class="userul">
              <li><a href="#">注册</a></li>
              <li><a href="#">登录</a></li>
          </ul>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
//   @Prop() private nav!: object;
    public nav = ['首页', '视频', '发现', '其他'];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.bgcolor {
  background: lightsalmon;
}

.main-header-box {
width: 100%;

}

.header {
    max-width: 1200px;
    height: 60px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
  .meun {
    height: 100%;
    display: flex;
    .icon {
        height: 100%;
        display: flex;
    }
    .list {
      width: auto;
      height: 100%;
      position: relative;
      display: flex;
      align-items: center;
      margin-left: 30px;
        li {
          margin-right: 30px;
          :last-child {
            margin-right: 0;
          }
        }
    }
  }
  .status {
    width: auto;
    height: 100%;
    position: relative;
    .userul {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        margin-right: 0;
        margin-left: 30px;
      }
    }
  }
}
</style>
