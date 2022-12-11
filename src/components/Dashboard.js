import React from 'react'

import Topbar from './Topbar'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const Dashboard = () => {
    let navigate = useNavigate();
    const studentLogin=()=>{
  
    navigate("/studentlogin")
   } 
   const teachersLogin=()=>{
    navigate("/teacherslogin")
   }
  return (
    <div id="wrapper">
 
  <div id="content-wrapper" class="d-flex flex-column">
                
  <div id="content">
   
    <Topbar/>
                <div class="container-fluid"style={{display:"flex",justifyContent:"space-between",padding:"5rem 25rem",alignItems:"center"}}>
                <div class="row">
    <div class="col">
    <Card sx={{ width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Teachers Login
          </Typography>
          <Typography variant="body2" color="text.secondary">
           please click here to login as a teacher
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={teachersLogin}>
          Login
        </Button>
      </CardActions>
    </Card>
    </div>
    <div class="col">
    <Card sx={{ width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://plus.unsplash.com/premium_photo-1661962548081-071712b709ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Students Login
          </Typography>
          <Typography variant="body2" color="text.secondary">
          please click here to login as a student
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={studentLogin}>
          Login
        </Button>
      </CardActions>
    </Card>
    </div>
  </div>
               
    
                    

                  

                </div>
                <div style={{fontWeight:"bolder",textAlign:"center",marginBottom:"10rem"}}>THIS IS ADMINISTRATION DASHBOARD YOU CAN LOGIN AS A STUDENT OR TEACHER TO CONTINUE</div>
                </div>
                </div>
                </div>
          
            
            
  )
}

export default Dashboard










{/* <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2} columns={16} >
        <Grid item xs={8}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
          </Item>
        </Grid>
      </Grid>
    </Box> */}