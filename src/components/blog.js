import React, { Component } from "react";
import Collapsible from "react-collapsible";

class Blog extends Component {
  constructor() {
    super();

    this.state = {
     
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
                  className="img-fluid"
                  width= '100%'
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
    } else return <h1>Blog posts are coming soon! </h1>;

    return (
      <div>
        <h1 className="blogtitle lead">My blog is coming soon!</h1>

        <div className="blogpage"> {/*{blogitems} */}</div>
      </div>
    );
  }
}

export default Blog;
