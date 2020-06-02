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
                  height="312px"
                  width="820px"
                  alt={blogitems.title}
                ></img>
                <h1>{blogitems.title}</h1>
                <p>{blogitems.date}</p>
                <Collapsible
                  className="blog-item-trigger btn-2"
                  trigger="Read more "
                  transitionTime="300"
                   triggerWhenOpen="Collapse"
                >
                  <p className="blog-item-text">{blogitems.firstparagraph}</p>
                  <h4>{blogitems.subheading1}</h4>
                  <p className="blog-item-text">{blogitems.secondparagraph}</p>
                  
                  <h4>{blogitems.subheading2}</h4>
                  <p className="blog-item-text">{blogitems.thirdparagraph}</p>
                  <h4>{blogitems.subheading3}</h4>
                  <p className="blog-item-text">{blogitems.forthparagraph}</p>
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

        <div className="blogpage">{blogitems}</div>
      </div>
    );
  }
}

export default Blog;
