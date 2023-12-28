import { useState,useEffect } from "react";
import {atom , useRecoilState,useRecoilValue,useSetRecoilState} from "recoil";
import { Card,Typography,TextField,Button } from "@mui/material";
import { json, useParams } from "react-router-dom";

function Course(){
    let {courseId} = useParams();

    const setCourses = useSetRecoilState(courseState);

    useEffect(() => {

        function callback2(data){
            setCourses(data.courses);
        }
        function callback1(res){
            res.json().then(Callback1)
        }
        fetch ("http://localhost:3000/admin/courses",{
            method:"GET",
            headers:{
                "Authroziation":"Bearer " + localStorage.getItem("token")
            }
        }).then(Callback1)
    },[])

    return <div>
        <CourseCard courseId={courseId}></CourseCard>
        <UpdateCard courseId={courseId}></UpdateCard>
    </div>
}

function UpdateCard(props){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [image,setImage] = useState('');

    const course = props.course;
    const [courses,setCourses] = useRecoilState(courseState);

    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <Card variant={"outlined"} style={{width:400 ,padding: 20}}>
                <Typography >Update course details</Typography>
                <Textfeild onChange={(e) => {
                   setTitle(e.target.value)
                }}
                fullWidth = {true} 
                label="Title"
                variant="outlined">

                </Textfeild>
                <Textfeild onChange={(e) => {
                   setDescription(e.target.value)
                }}
                fullWidth = {true} 
                label="Title"
                variant="outlined">

                </Textfeild>
                <Textfeild onChange={(e) => {
                   setImage(e.target.value)
                }}
                fullWidth = {true} 
                label="Title"
                variant="outlined">

                </Textfeild>

           
                <Button size={"large"}
                variant="contained"
                onClick={() => {
                    function callback2(data) {
                    let updatedCourses = []
                    for(let i = 0;i<course.length;i++){
                        if(courses[i].id == props.courseId){
                            updatedCourses.push({
                                id:props.courseId,
                                title:title,
                                description:description,
                                imageLink:image
                            })
                          }  else{
                                updatedCourses.push(courses[i])
                            }
                        
                    }
                    }
                    function Callback1(res) { 
                        res.json().then(callback2)
                    }
                    fetch("http://localhost:3000/admin/courses/"+props.courseId,{
                        method:"PUT",
                        body:JSON.stringify({
                            title:title,
                            description:description,
                            imageLink: image,
                            published:true
                        }),
                        headers:{
                            "content-type":'application/json',
                            "Authorization":"Bearer "+localStorage.getItem("token")
                        }
                        }).then(callback1)
                    }   
                }>

                </Button>
            </Card>
        </div>
    )
}


function CourseCard(props){
    const courses = useRecoilValue(courseState)
    let course =null;
    for(let i = 0;i<courses.length;i++){
        if(courses[i].id == props.courseId){
            course = courses[i];
        }
        
    }
    if(!course){
        return "loading..."
    }
    return <div style={{display:"flex", justifyContent:'center'}}>
        <Card style={{
            margin:10,
            width:300,
            minHeight:200
        }}>
            <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
            <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
            <img src={course.imageLink} style={{width:300}} />

        </Card>
    </div>
}
export default Course;

const courseState = atom ({
    key:'courseState',
    default:'',
});