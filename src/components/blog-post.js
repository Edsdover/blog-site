import React from 'react';
import '../styles/gif-item.css'

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render(){
    if (this.props.gif.images) {
      return (
        <div className='blog-post'>
        </div>
      );
    } else {
      return (
        <div className='loader'>Loading</div>
      );
    }
  }
};

export default BlogPost;
