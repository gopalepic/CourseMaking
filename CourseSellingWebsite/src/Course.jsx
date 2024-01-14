import {Button, Card ,TextField ,Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
function Course() {

    let {courseId} = useParams();

    const [courses,setCourses] = useState([])

    useEffect(() =>{

        function callback2(data) {
             setCourses(data.courses)
          
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
    for (let i = 0; i<courses.length; i++){
        if(courses[i].id == courseId)[
            course = courses[i]
        ]
    }

    if(!course){
        return <div>
            Loading...
        </div>
    }


 return (<div>
    <GrayTopper title={course.title}></GrayTopper>
    <Grid container style={{display:"flex"}}>
        <Grid item lg={8} md={12} sm={12}  >
            <UpdateCourse courses={courses} course={course} setCourses={setCourses}/>
        </Grid>
        <Grid item lg={4} md={12} sm={12}>           
           <CourseCard course={course}/>

        </Grid>

    </Grid>
 </div>
 

   )
} 
function GrayTopper({title}){
    return (
        <div style={{height: 250, background: "#212121", top: 0, width: "100vw", zIndex: 0, marginBottom: -100}}>
        <div style={{ height: 250, display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <div>
                <Typography style={{color: "white", fontWeight: 600}} variant="h3" textAlign={"center"}>
                    {title}
                </Typography>
            </div>
        </div>
    </div>
    )
}


function CourseCard(props){
    const course = props.course;
    return <div>

    <Card style={{
        margin:15,
        width:300,
        minHeight:300,
        zIndex:2
        
    }}>
    <Typography variant='h6' textAlign={"center"}>   {course.title}</Typography> 
      <Typography variant='h7' textAlign={"center"}>  {course.description}</Typography>
      <img src={course.imageLink} style={{minWidth:'300'}} ></img>
      <Typography variant='h5' textAlign={"center"}> <b>Rs {course.price}</b></Typography>
            
         </Card>
         </div>
}

function UpdateCourse({courses,setCourses}){
    let {courseId} = useParams();
    const [title, setTitle] = useState(courses.title);
    const [description, setDescription] = useState('');
    const [image , setImage] = useState('');
    const [price , setPrice] = useState('');
    return(

<div style={{
 paddingTop:'150px',
 display:'flex',
 justifyContent:'center'
}}>

<div   style={{display:'flex', justifyContent:'center', }}>
<Card variant='outlined' style={{width:400 , padding:20 }} >
<div >

   <center>
       <Typography variant='h5'>
             Update Course details   </Typography>
    </center>
<br />
<br />
<TextField  
        value={title}
        fullWidth={true}
         label='Update Title'
        variant='outlined'
        onChange={(e)=>{
            setTitle(e.target.value)
        }}>
            
   
</TextField>
<br /><br />
<TextField fullWidth={true}
label='Update Description'
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
            label="Update Image link"
            variant="outlined"
        />
        <br /><br />

<TextField
            onChange={(e) => {
                setPrice(e.target.value)
            }}
            fullWidth={true}
            label="Price "
            variant="outlined"
        />
</div>
<center>

    <br /><br />
<Button size='large'
variant='contained'
onClick={async() => {

       
    await axios.put("http://localhost:3000/admin/courses/"+ courseId,{
       
            title:title,
            description:description,
            imageLink:image,
            published:true,
            price:price
        }
    ,{
        headers:{
            "Content-Type":"application/json",
          "Authorization":"Bearer "+localStorage.getItem("token")
        }
        
    })
    let updatedCourses = []; 
    for(let i =0;i<courses.length;i++){
        if(courses[i].id == courseId){
               updatedCourses.push({
                id:courseId,
                title:title,
                description:description,
                imageLink:image,
                price :price
               })
              
            }
            alert("Course updated succesesfully")
}

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