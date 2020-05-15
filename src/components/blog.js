import React, { Component } from "react";
import Collapsible from "react-collapsible";

class Blog extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      blogitems: null,
    };
  }

  render() {
    if (this.props.propdata) {
      var blogitems = this.props.propdata.blog.blogitems.map(function (
        blogitems
      ) {
        return (
          <div>
            <div key={blogitems.title} id={blogitems.title} className="row">
              <div className="leftcolumn">
                <img
                  src={blogitems.previewimage}
                  className="fakeimg"
                  height="300px"
                  alt={blogitems.title}
                ></img>
                <h1>{blogitems.title}</h1>
                <p>{blogitems.date}</p>
                <Collapsible className="blog-item-trigger" trigger='Read more ' transitionTime='200' triggerWhenOpen="Collapse">
                  <p className="blog-item-text">{blogitems.firstparagraph}</p>
                  
                </Collapsible>
              </div>
            </div>
          </div>
        );
      });
    } else return <h1>Loading...</h1>;

    return (
      <div>
        <div className="blogtitle">My blog</div>
        <div className="sidebar">
          Social media links <br />
         <a href="www.google.com"><i className="fa fa-twitter socialmedialink" ></i></a> 
         <a href="www.google.com"><i className="fa fa-facebook socialmedialink" ></i></a> 
         <a href="www.google.com"><i className="fa fa-instagram socialmedialink" ></i></a> 
        </div>
        <div className="blogpage">{blogitems}</div>
      </div>
    );
  }
}

export default Blog;
