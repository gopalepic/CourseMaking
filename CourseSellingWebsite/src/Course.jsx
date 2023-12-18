import {Button, Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"

function Course() {

    let {courseId} = useParams();

    const [courses,setCourses] = useState()

    useEffect(() =>{

        function callback2(data) {
             setCourses(data.courses)
             alert("hi")
        }
     function callback1(res)  {
        res.json().then(callback2)
     }
         fetch("http://localhost:3000/admin/courses/",{
             method:"GET",
             headers:{
                "Authorization":"Bearer "+ localStorage.getItem("token")
             }
         }).then(callback1)
    },[])

    let course = null
    for (let i = 0;i<courses.length;i++){
        if(courses[i].id === courseId){
            course = courses[i]
        }
    }

    if(!course){
        return <div>
            Loading...
        </div>
    }


 return <div style={{display:'flex', justifyContent:'center'}}>
<CourseCard course={course}/>
<UpdateCourse courses={courses} course={course} setCourses={setCourses}/>
 </div>
   
} 


function CourseCard(props){
    
    return <div>

    <Card style={{
        margin:15,
        width:300,
        minHeight:200
    }}>
    <Typography variant='h6' textAlign={"center"}>   {props.course.title}</Typography> 
      <Typography variant='h7' textAlign={"center"}>  {props.course.description}</Typography>
      <img src="props.course.imageLink" style={{minWidth:'300'}} />
         </Card>
         </div>
}

function UpdateCourse(props){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image , setImage] = useState('')
    return(

<div style={{
 paddingTop:'150px',
 display:'flex',
 justifyContent:'center'
}}>

<div   style={{display:'flex', justifyContent:'center'}}>
<Card variant='outlined' style={{width:400 , padding:20 }} >
<div >

   <center>
       <Typography variant='h5'>
             Update Course details   </Typography>
    </center>
<br />
<br />
<TextField 
        fullWidth={true}
         label='UpdateTitle'
        variant='outlined'
        onChange={(e)=>{
            setTitle(e.target.value)
        }}>
            
   
</TextField>
<br /><br />
<TextField fullWidth={true}
label='UpdateDescription'
variant='outlined'
type='text'
onChange={(e) =>{
   setDescription(e.target.value);
}}>
   
</TextField>
<br /><br />
<TextField
            onChange={(e) => {
                setImage(e.target.value)
            }}
            fullWidth={true}
            label="UpdateImage link"
            variant="outlined"
        />

</div>
<center>

    <br /><br />
<Button size='large'
variant='contained'
onClick={() => {

    function callback2(data) {
        let updatedCourses = []; 
        for(let i =0;i<props.courses.length;i++){
            if(props.courses[i].id == courseId){
                   updatedCourses.push({
                    id:course.id,
                    title:title,
                    description:description,
                    imageLink:image
                   })
                }
    }}

    function callback1(res) {
      res.json().then(callback2)
      alert('Course Added')
    }
       
    fetch("http://localhost:3000/admin/courses/"+ course.id,{
        method:"PUT",
        body:JSON.stringify({
            title:title,
            description:description,
            imageLink:image,
            published:true
        }),
        headers:{
          "Content-type":'application/json',
          "Authentication":"Bearer "+localStorage.getItem("token")
        }
        
    }).then(callback1)
}}
>
UpdateCourse
</Button>
</center>
</Card>
</div>

</div>

    )
}
export default Course 