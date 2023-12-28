import { Typography } from '@mui/material'
import {Button,TextField} from '@mui/material'
import Card from '@mui/material/Card';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCourse(){
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image , setImage] = useState(''); 
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
             Add Course   </Typography>
    </center>
<br />
<br />
<TextField 
        fullWidth={true}
         label='Title'
        variant='outlined'
        onChange={(e)=>{
            setTitle(e.target.value)
        }}>
            
   
</TextField>
<br /><br />
<TextField fullWidth={true}
label='Description'
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
            label="Image link"
            variant="outlined"
        />

</div>
<center>

    <br /><br />
<Button size='large'
variant='contained'
onClick={() => {

    function callback2(data) {
          alert('Course Added')
          console.log("Courses Added")
}
    function callback1(res) {
      res.json().then(callback2)
    }
       
    fetch("http://localhost:3000/admin/courses",{
        method:"POST",
        body:JSON.stringify({
            title:title,
            description:description,
            imageLink:image,
            published:true
        }),
        headers:{
          "Content-type":'application/json',
          "Authorization":"Bearer "+localStorage.getItem("token")
        }
        
    }).then(callback1)
}}
>
Addcourse
</Button>
</center>
</Card>
</div>

</div>

    )
}
export default AddCourse