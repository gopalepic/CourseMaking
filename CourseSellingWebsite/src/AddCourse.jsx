import { Typography } from '@mui/material'
import {Button,TextField} from '@mui/material'
import Card from '@mui/material/Card';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function AddCourse(){
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image , setImage] = useState(''); 
    const [price , setPrice] = useState('');
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

   await axios.post("http://localhost:3000/admin/courses",{
       
            title:title,
            description:description,
            imageLink:image,
            published:true,
            price
 } ,{
        headers:{
          "Authorization":"Bearer "+localStorage.getItem("token")
        }
        
    }).then((res) => {
        alert('Course Added')
    })
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