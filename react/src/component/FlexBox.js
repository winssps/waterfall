import React from "react";
import { render } from "react-dom";

import "./flexbox.scss";


const FlexConten = ({source, author}) => {
  return (
    <div className="item">
      <img src={`${source.url}`} className="item__content" />
      <div className="item-footer">
        <div className="title">{source.title}</div>
        <div className="action">
          <span className="like">2</span>
          <span className="zan">1</span>
        </div>
        <p className="content">{source.content}</p>
        <div className="author">
          <a>
            <img src={`${author.url}`} width="24" height="24" />
          </a>
          <p>
            <a href="#">{author.name}</a>
          </p>
        </div>
      </div>
    </div>
  );
}


const Flexbox = ({data}) => {
  return (
    <div className="masonry">
    {
        data.map((item) => {
            return <FlexConten {...item} />
        })
    }
    </div>
  );
};


export default Flexbox;
