import { Typography } from '@mui/material'
import {Button,TextField} from '@mui/material'
import Card from '@mui/material/Card';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup(){

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
      

         <div style={{
          paddingTop:'150px',
          display:'flex',
          justifyContent:'center'
         }}>

     <div style={{display:'flex', justifyContent:'center'}}>
<Card variant='outlined' style={{width:400 , padding:20 }} >
      <div >
        <center>
        <Typography variant='h5'>
            Welcome to DevoteProgramming
        </Typography>
        </center>
<br />
<br />
        <TextField fullWidth={true}
        label='Email'
        variant='outlined'
        onChange={(e)=>{
           setEmail(e.target.value);
        }}>
        </TextField>
<br /><br />
        <TextField fullWidth={true}
        label='Password'
        variant='outlined'
        type='password'
        onChange={(e) => {
          setPassword(e.target.value);
        }}>
            
        
        </TextField>
      </div>
      <br /><br />

<center>
      <Button size='large'
      variant='contained'
      onClick={() => {
        function callback2(data){
            localStorage.setItem("token",data.token)
            alert('Signup Successfully')
           navigate("/addcourse")
        }
        function callback1(res){
            res.json().then(callback2)
        }
        fetch('http://localhost:3000/admin/signup',{
            method:'POST',
            body:JSON.stringify({
                username:email,
                password:password
            }),
            headers:{
                'content-type':'application/json'
            }
        }).then(callback1)
      }
    
    }
    
      >
        Signup
      </Button>
     </center>
      </Card>
</div>

</div>


    )
}
export default Signup;