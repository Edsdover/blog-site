import React from 'react';
import blogPost from './blog-post';
import ErrorBoundary from './error-boundary';
import '../styles/gif-list.css'

const BlogPost = (props) => {
    const blogPosts = props.blogs.map((image) => {
        return <BlogPost
                      key={image.id}
                      gif={image}
                      text={blog.body}
                    />
    });

    return (
      <ErrorBoundary>
        <div className="blog-list">{blogPosts}</div>
      </ErrorBoundary>
    );
};

export default BlogList;
