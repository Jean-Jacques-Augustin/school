import {Section} from "lucide-react";

import Image from "next/image";
import {Card, CardContent, CardHeader} from "@/components/ui/card";


const courseList = [{
    image: '/images/course/coursImage1.png',
    duration: '4Weeks',
    level: 'Beginner',
    author: 'John Smith',
    title: 'Web Design Fundamentals',
    description: 'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.'
},

    {
        image: '/images/course/coursImage2.png',
        duration: '4Weeks',
        level: 'Beginner',
        author: 'John Smith',
        title: 'Web Design Fundamentals',
        description: 'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.'
    }, {
        image: '/images/course/coursImage3.png',
        duration: '4Weeks',
        level: 'Beginner',
        author: 'John Smith',
        title: 'Web Design Fundamentals',
        description: 'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.'
    }, {
        image: '/images/course/coursImage4.png',
        duration: '4Weeks',
        level: 'Beginner',
        author: 'John Smith',
        title: 'Web Design Fundamentals',
        description: 'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.'
    }, {
        image: '/images/course/coursImage5.png',
        duration: '4Weeks',
        level: 'Beginner',
        author: 'John Smith',
        title: 'Web Design Fundamentals',
        description: 'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.'
    }, {
        image: '/images/course/coursImage6.png',
        duration: '4Weeks',
        level: 'Beginner',
        author: 'John Smith',
        title: 'Web Design Fundamentals',
        description: 'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.'
    },]

export default function Courses() {
    return (<div className="container mx-auto">
        <div>
            <div>
                <h1>OursCourses</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras
                    eu sit dignissim lorem nibh et.
                    Ac cum eget habitasse in velit fringilla feugiat senectus in.
                </p>
            </div>
            <button>View All</button>
        </div>
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1rem",
                padding: "1rem",
            }}
        >
            {courseList.map((course, index) => {
                return (<Card
                    key={index}
                >
                    {/*<CardHeader>*/}
                    {/*    <Image src={course.image} alt={course.title} width={400} height={200}/>*/}
                    {/*    <h1>{course.title}</h1>*/}
                    {/*    <p>{course.description}</p>*/}
                    {/*</CardHeader>*/}
                    <CardContent>
                        <Image src={course.image} alt={course.title}
                               width={400} height={200}/>
                        <p>Duration: {course.duration}</p>
                        <p>Level: {course.level}</p>
                        <p>Author: {course.author}</p>
                    </CardContent>
                </Card>);
            })}
        </div>

    </div>);
}