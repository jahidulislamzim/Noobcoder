const { useState, useEffect } = require("react")


const useCourses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.json')
            .then(rec => rec.json())
            .then(data => setCourses(data));
    },[])

    return [courses];
}

export default useCourses;