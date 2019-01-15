<template>
  <div class="home">
    <Head></Head>
    <!-- <Sidebar></Sidebar> -->
    <Content>
        <FlexBox :datas="datas"></FlexBox>
    </Content>
    <!-- <Sidebar></Sidebar> -->
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Head from '../components/Head.vue';
import Sidebar from '../components/Sidebar.vue';
import Content from '../components/Content.vue';
import Footer from '../components/Footer.vue';
import FlexBox from '../components/FlexBox.vue';

@Component({
  components: {
    Head,
    Sidebar,
    Content,
    Footer,
    FlexBox,
  },
})

export default class Home extends Vue {
  public datas = [
    {
    source: {
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528126070&di=5d89a60ce1787d8b0858e8a18f872fb0&imgtype=jpg&er=1&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201401%2F21%2F20140121144919_w3KaG.thumb.700_0.jpeg",
      title: "韩国美女",
      content: "韩国偶像，吧啦吧啦吧啦，这是是什么的电视剧的主角",
    },
    author: {
      url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg",
      name: "巴拉巴拉作者"
    }
  },
  {
    source:{
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527531356013&di=e442bd5303b264ff61ecff52342eecb8&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3846664997%2C1212260444%26fm%3D214%26gp%3D0.jpg",
      title: "白鹭",
      content: "小东西",
    },
    author: {
      url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg",
      name: "巴拉巴拉作者"
    }
  },
  {
    source:{
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527531335130&di=8537595de50ce40c947e06c6caa50c31&imgtype=0&src=http%3A%2F%2Fphoto.3761.com%2Fpictures%2F2016-05%2F94_1464416844.jpg",

      title: "美女",
      content: "冷酷",
    },
    author: {
      url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg",
      name: "巴拉巴拉作者"
    }
  },
  {
    source: {
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527531350570&di=8784c1dbc0be9dd1050ebd2483f10799&imgtype=0&src=http%3A%2F%2Fimg002.hc360.cn%2Fk1%2FM05%2F7C%2FCD%2FwKhQwFkB1y-EZVVvAAAAAD31fiA600.jpg",

      title: "小猫咪",
      content: "可爱",
    },
    author: {
      url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg",
      name: "巴拉巴拉作者"
    }
  },
    {
    source:{
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527583761383&di=bfbbcbc84127b7e3ea51bb3e56976c2a&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D4083410551%2C1743919116%26fm%3D214%26gp%3D0.jpg",
      title: "漫画",
      content: "手绘",
    },
    author: {
      url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg",
      name: "巴拉巴拉作者"
    }
  },
  {
    source:{
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527583860752&di=f60d6052a8337dc4d4103350e6d64235&imgtype=0&src=http%3A%2F%2Fp2.gexing.com%2FG1%2FM00%2F48%2F98%2FrBACE1RiSbihdA2AAAD90nfEOAQ652.jpg",
      title: "漫画",
      content: "二次元少女",
    },
    author: {
      url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg",
      name: "巴拉巴拉作者"
    }
  },
  {
    source:{
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527583937020&di=1cfef063d1480eb15e9c4b9f2327f152&imgtype=0&src=http%3A%2F%2Fpic.iask.cn%2Ffimg%2F4993683690_516.jpg",
      title: "明星",
      content: "高圆圆",
    },
    author: {
      url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg",
      name: "巴拉巴拉作者"
    }
  },
  {
    source:{
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527583937020&di=1cfef063d1480eb15e9c4b9f2327f152&imgtype=0&src=http%3A%2F%2Fpic.iask.cn%2Ffimg%2F4993683690_516.jpg",
      title: "明星",
      content: "高圆圆",
    },
    author: {
      url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg",
      name: "巴拉巴拉作者"
    }
  },
  {
    source:{
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527583937020&di=1cfef063d1480eb15e9c4b9f2327f152&imgtype=0&src=http%3A%2F%2Fpic.iask.cn%2Ffimg%2F4993683690_516.jpg",
      title: "明星",
      content: "高圆圆",
    },
    author: {
      url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg",
      name: "巴拉巴拉作者"
    }
  },
  {
    source:{
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527583937020&di=1cfef063d1480eb15e9c4b9f2327f152&imgtype=0&src=http%3A%2F%2Fpic.iask.cn%2Ffimg%2F4993683690_516.jpg",
      title: "明星",
      content: "高圆圆",
    },
    author: {
      url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg",
      name: "巴拉巴拉作者"
    }
  },
  {
    source:{
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527583937020&di=1cfef063d1480eb15e9c4b9f2327f152&imgtype=0&src=http%3A%2F%2Fpic.iask.cn%2Ffimg%2F4993683690_516.jpg",
      title: "明星",
      content: "高圆圆",
    },
    author: {
      url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg",
      name: "巴拉巴拉作者"
    }
  },
  {
    source:{
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527583937020&di=1cfef063d1480eb15e9c4b9f2327f152&imgtype=0&src=http%3A%2F%2Fpic.iask.cn%2Ffimg%2F4993683690_516.jpg",
      title: "明星",
      content: "高圆圆",
    },
    author: {
      url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg",
      name: "巴拉巴拉作者"
    }
  },
  {
    source:{
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527583937020&di=1cfef063d1480eb15e9c4b9f2327f152&imgtype=0&src=http%3A%2F%2Fpic.iask.cn%2Ffimg%2F4993683690_516.jpg",
      title: "明星",
      content: "高圆圆",
    },
    author: {
      url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg",
      name: "巴拉巴拉作者"
    }
  },
  {
    source: {
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527531350570&di=8784c1dbc0be9dd1050ebd2483f10799&imgtype=0&src=http%3A%2F%2Fimg002.hc360.cn%2Fk1%2FM05%2F7C%2FCD%2FwKhQwFkB1y-EZVVvAAAAAD31fiA600.jpg",

      title: "小猫咪",
      content: "可爱",
    },
    author: {
      url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg",
      name: "巴拉巴拉作者"
    }
  },
    {
    source:{
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527583761383&di=bfbbcbc84127b7e3ea51bb3e56976c2a&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D4083410551%2C1743919116%26fm%3D214%26gp%3D0.jpg",
      title: "漫画",
      content: "手绘",
    },
    author: {
      url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg",
      name: "巴拉巴拉作者"
    }
  },
  {
    source: {
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527531350570&di=8784c1dbc0be9dd1050ebd2483f10799&imgtype=0&src=http%3A%2F%2Fimg002.hc360.cn%2Fk1%2FM05%2F7C%2FCD%2FwKhQwFkB1y-EZVVvAAAAAD31fiA600.jpg",

      title: "小猫咪",
      content: "可爱",
    },
    author: {
      url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg",
      name: "巴拉巴拉作者"
    }
  },
    {
    source:{
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527583761383&di=bfbbcbc84127b7e3ea51bb3e56976c2a&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D4083410551%2C1743919116%26fm%3D214%26gp%3D0.jpg",
      title: "漫画",
      content: "手绘",
    },
    author: {
      url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg",
      name: "巴拉巴拉作者"
    }
  },
  
  ]
}
</script>
<style lang="less">
  .home {
    width: auto;
    height: auto;
    position: relative;
  }
</style>
