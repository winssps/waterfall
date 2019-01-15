<template>
  <div class="masonry">
    <div class="item" v-for="({source, author}, index) in datas" :key="index">
      <img :src="source.url" class="item__content">
      <div class="item-footer">
        <div class="title">
          {{source.title}}
          <div class="action">
            <span class="like">
              <i class="iconfont icon-xihuan"></i> 2
            </span>
            <span class="zan">
              <i class="iconfont icon-zan"></i> 1
            </span>
          </div>
        </div>
        <p class="content">{{source.content}}</p>
        <div class="author">
          <a>
            <img :src="author.url" width="24" height="24">
          </a>
          <p>
            <a href="#">{{author.name}}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class FlexBox extends Vue {
  @Prop(Array) private datas!: object;
}
</script>

<style scoped lang="less">
@bg: #ffffff;
@itemBg1: #18314f;

.masonry {
  display: flex;
  flex-flow: column wrap;
  align-content: space-between;
  width: 100%;
  height: 100%;
  margin-top: 10px;
}

.item {
  max-width: 230px;
  min-width: 220px;
  margin-bottom: 20px;

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: auto;
    font-size: 40px;
    color: darken(@bg, 5%);
    background: currentColor;
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
  }

  .item-footer {
    color: #000000;
    // background: #8f8f8f;
    width: 100%;
    height: auto;
    padding: 10px;

    .title {
      position: relative;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 18px;
    }

    .action {
    }

    span {
      cursor: pointer;
    }

    .like {
      i {
        color: lightcoral;
        font-size: 18px;
      }
    }

    .zan {
      i {
        color: lightsalmon;
        font-size: 18px;
      }
      margin-left: 10px;
    }

    .content {
      text-indent: 2em;
      font-size: 14px;
      margin: 0px;
    }

    .author {
      display: flex;
      padding-bottom: 10px;
      img {
        border-radius: 24px;
        float: left;
        transition: all 0.5s ease;
        cursor: pointer;
      }

      img:hover {
        transform: rotate(-360deg);
      }

      p {
        margin: 0;
        float: left;
        margin-left: 5px;
        font-size: 12px;
        text-align: center;
        line-height: 24px;
      }

      a {
        text-decoration: none;
        color: #3c3c3c;
      }
    }
  }
}
</style>
