import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { useHistory } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

// import Typography from '@material-ui/core/Typography'

import { Container } from '@material-ui/core';


import Button from '@material-ui/core/Button';


function ImageContainer({ id, post, photoUrl }) {
    const history = useHistory()
    const [model,setModel] = useState(false)
    const [tempImgScr,setTempImgScr] = useState('')
    
    const getImg =(image)=>{

        setTempImgScr(image)
        setModel(true)
    }


    return (
        <>
         <div className={model ? "model  open" : "model"}>
           <img src={tempImgScr} alt=""/>
           <CloseIcon onClick={() => setModel(false)}/>

       </div>
        <Container>
            <Card elevation={0} style={{ width: "100%", backgroundColor: "#f9f9f9" }}>
                <CardHeader

                    subheader={post}
                />
                <div className="pics">
                    <img src={photoUrl} alt="" style={{ width: "100%", objectFit: "fill"  }} 
                    onClick={() => getImg(photoUrl)}
                     />
                </div>
                <CardActions>
                    <Button variant="contained" color="primary"
                        onClick={() => history.push("/booking")}
                        style={{ margin: "0 auto" }}>
                        Booking
      </Button>
                </CardActions>

            </Card>
        </Container>
        </>
    )
}

export default ImageContainer
