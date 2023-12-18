import { Card } from "@mui/material";
import { useEffect, useState } from "react"
import Typography from "@mui/material/Typography";
function Courses(){

    const [courses,setCourses] = useState([]);

    useEffect(() =>{

        function callback2(data) {
             setCourses(data.courses)
             console.log("controbiduucontol")
        }
     function callback1(res)  {
        res.json().then(callback2)
        console.log('gggjg')
     }
         fetch("http://localhost:3000/admin/courses/",{
             method:"GET",
             headers:{ 
                "Authorization":"Bearer "+ localStorage.getItem("token")
             }
         }).then(callback1)
    },[])

    return  <div>
        Courses
        
        {JSON.stringify(courses)}</div>
//  (<div style={{display:"flex" ,flexWrap:"wrap" , justifyContent:"center"}}>
//           Courses
// { courses.map(course => {
//         { return <Course course={course}/>} }
// )}

  


    
    } 
     export function Course(props) {
        
        return <Card style={{
            margin:15,
            width:300,
            minHeight:200
        }}>
        <Typography variant='h6' textAlign={"center"}>   {props.course.title}</Typography> 
          <Typography variant='subtitle1' textAlign={"center"}>  {props.course.description}</Typography>
          <img src="props.course.imageLink" style={{Width:'300'}} />
             </Card>
    }
export default Courses