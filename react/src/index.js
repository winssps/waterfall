import React from "react";
import { render } from "react-dom";

import FlexBox from "./component/FlexBox";

import "./index.scss";

var data = [{
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
      url: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=553560037,2599695067&fm=27&gp=0.jpg",

      title: "向日葵",
      content: "漫画",
    },
    author: {
      url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg",
      name: "巴拉巴拉作者"
    }
  },
  {
    source:{
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527527750680&di=c275bf87e2a8b478a6c96dd4a1068f9d&imgtype=0&src=http%3A%2F%2Fimg.lanrentuku.com%2Fimg%2Fallimg%2F1212%2F46_121226111116_1.jpg",
      title: "小男孩",
      content: "可爱",
    },
    author: {
      url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg",
      name: "巴拉巴拉作者"
    }
  },
  {
    source:{
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527444701299&di=a9b96dd8ec6d48bef3fe097bf710010e&imgtype=0&src=http%3A%2F%2Fpic.962.net%2Fup%2F2016-8%2F14708834858747664.gif",
      title: "龙猫",
      content: "大龙猫在运动",
    },
    author: {
      url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg",
      name: "巴拉巴拉作者"
    }
  },
  {
    source:{
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527583402565&di=db0e2fc6e69c194d3a68ced1934757e3&imgtype=0&src=http%3A%2F%2Fwww.feizl.com%2Fupload2007%2F2015_03%2F15031811301155.jpg",
      title: "沙滩",
      content: "沙滩贝壳",
    },
    author: {
      url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg",
      name: "巴拉巴拉作者"
    }
  },
  {
    source:{
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527583463214&di=03febad6a4e2274988ced1abd40c3476&imgtype=0&src=http%3A%2F%2Fwww.qqleju.com%2Fuploads%2Fallimg%2F130719%2F19-113610_481.jpg",
      title: "蜗牛",
      content: "创意蜗牛",
    },
    author: {
      url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg",
      name: "巴拉巴拉作者"
    }
  },
  {
    source:{
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527583544820&di=ca48ac5980aa81a4fa31d9c63dcc6bfe&imgtype=0&src=http%3A%2F%2Fimg.ishuo.cn%2Fdoc%2F1612%2F907-16120G14003-50.jpg",
      title: "史迪奇",
      content: "手绘史迪奇",
    },
    author: {
      url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg",
      name: "巴拉巴拉作者"
    }
  },
  {
    source:{
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527583616329&di=2a2c15c75806c9cf29bc2f1db873f1bd&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F5%2F537ec003a4c17.jpg",
      title: "花",
      content: "高清图片桌面壁纸",
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
  }
];

let siderStyle = {
    left: 0,
};

class Layout extends React.Component {
  render() {
    return (
      <div className="Container">
          {this.props.children}
      </div>
    );
  }
}


class Header extends React.Component {
  render() {
    return (
      <div className="Items header">
          {this.props.children}
      </div>
    );
  }
}

class Sidebar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          menubtn: false,
          menustyle: {
            width: "30%"
          },
          menubtnwidth: {
            width: "72px",
            transform: "rotate(-180deg)",
          }
      }
      this.handleMenu = this.handleMenu.bind(this);

  }
  componentDidUpdate() {

  }
  handleMenu() {
    this.setState({
        menubtn: !this.state.menubtn,
    });
    console.log(this.state.menubtn);
    this.state.menubtn ?
        this.setState({
          menustyle: {
            width: "30%"
          },
          menubtnwidth: {
            width: "72px",
            transform: "rotate(-180deg)",
          }
        }) :
        this.setState({
          menustyle: {
            width: "100%",
          },
          menubtnwidth: {
            width: "240px",
            transform: "rotate(0deg)",
          }
      });
  }
  render() {
    return (
      <div className="Items sidebar">
        <div style={this.state.menustyle} className="wrapper">
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
            <div style={this.state.menubtnwidth} onClick={this.handleMenu} className="menubottom" />
        </div>
      </div>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <div className="Items main">
          {this.props.children}
      </div>
    );
  }
}

class Aside extends React.Component {
  render() {
    return (
      <div className="Items aside">
          {this.props.children}
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="Items footer">
          {this.props.children}
      </div>
    );
  }
}



function App() {
  return (
    <Layout>
        <Header>
            <div className="header-icon">
              <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg" />
              <ul>
                <li><a href="#">首页</a></li>
                <li><a href="#">视频</a></li>
                <li><a href="#">发现</a></li>
                <li><a href="#">其他</a></li>
              </ul>
              <ul className="userul">
                <li><a href="#">注册</a></li>
                <li><a href="#">登录</a></li>
              </ul>
            </div>
        </Header>
        <Sidebar />
        <Main>
            <FlexBox {...{data}} />
        </Main>
        <Aside>
        </Aside>
        <Footer>
          大萌科技有限公司 版权所有 ©2018 Created by 创意生活
        </Footer>
    </Layout>
  );
}
/*
render(
  <FlexBox {...{data}} />,
  document.getElementById("root")
);*/
render(
  <App />,
  document.getElementById("root")
);
