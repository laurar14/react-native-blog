import React, { useState } from 'react';

const BlogContext = React.createContext();


//Here we create a component that can accept another component as an argument, or something of the sort
export const BlogProvider = ({children}) => {
    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}`} ]);
    }

    return (
        // for modification here, we must make sure we send not only the value with the variable
        // but the callback function as well (addBlogPosts in our case)
        <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
            {children}
        </BlogContext.Provider>
    );
}

export default BlogContext;