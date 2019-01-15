<template>
  <div class="Items sidebar">
      <div className="wrapper">
          <div className="overflower">
              <div aria-hidden="true" className="overflower-short">
                <ul>
                  <li><a></a></li>
                  <li><a></a></li>
                  <li><a></a></li>
                  <li><a></a></li>
                  <li><a></a></li>
                </ul>
              </div>
              <div className="overflower-long">
                <ul>
                    <li><a>科技</a></li>
                    <li><a>二次元</a></li>
                    <li><a>电影</a></li>
                    <li><a>风景</a></li>
                    <li><a>体育</a></li>
                </ul>
              </div>
            </div>
            <div className="menubottom" />
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.Items {
  background: lightsalmon;
}
.sidebar {
  width: 240px;
  background: #fff;
  display: flex;
  .wrapper {
      padding-top: 30px;
      overflow: hidden;
      text-align: center;
      width: 100%;
      box-sizing: border-box;
      background: lightsalmon;
      transition: width 1s ease;

  }

  .overflower {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    max-width: 100%;
    height: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 16px;

      li {
        height: 42px;
        line-height: 42px;
        cursor: pointer;
        text-align: center;
        padding: 0 15px;
      }

      li:hover {
        background: #3c3c3c;
      }

      a {
        padding-left: 24px;
        // background: url('./component/zan.png') no-repeat center left;
      }

      .overflower-short {
        display: block;
        overflow: hidden;
        flex-grow: 1;
        width: 0;
        height: 100%;
        text-overflow: ellipsis;
      }

      .overflower-long {
        flex-basis: 100%;
      }
  }

  .menubottom{
    position: fixed;
    bottom: 0;
    height: 42px;
    text-align: center;
    line-height: 42px;
    font-size: 20px;
    cursor: pointer;
    transition: all 1s ease;
    // background: url("./component/arrow.png") no-repeat center center;
  }
}
</style>
