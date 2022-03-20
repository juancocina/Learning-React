import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...' , author: 'mario', id: 1},
        { title: 'Welcome Party!', body: 'lorem ipsum...' , author: 'yoshi', id: 2},
        { title: 'Web dev top tips', body: 'lorem ipsum', author: 'mario', id: 3}
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    // can fetch data + authentication, modifying state here could end up in an infinite loop...
    useEffect(() => {
        console.log('use effect ran');
    }, []); //including [] will make the function run on just the first render...
    // including something inside the [] will make the function keep track of the variable

    return (  
        <div className="home">
            <BlogList blogs={ blogs } title="All blogs!" handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;    