const { useState, useEffect } = require("react")


const useBlogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('./blog.json')
            .then(rec => rec.json())
            .then(data => setBlogs(data));
    },[])

    return [blogs];
}

export default useBlogs;