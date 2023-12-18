import { Typography } from '@mui/material'
import {Button,TextField} from '@mui/material'
import Card from '@mui/material/Card';
import { useState } from 'react';


function Signin(){

  const [email , setEmail] = useState('')
  const [password, setPassword] = useState('')

return (


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
       Welcome to DevoteProgramming
   </Typography>
   </center>
<br />
<br />
   <TextField fullWidth={true}
   label='Email'
   variant='outlined'>
       
   </TextField>
<br /><br />
   <TextField fullWidth={true}
   label='Password'
   variant='outlined'
   type='password'>
       
   </TextField>
 </div>
 <br /><br />
 <center>
 <Button size='large'
 variant='contained'
 
 >
   Signin
 </Button>
 </center>
 </Card>
</div>

</div>

)
}
export default Signin