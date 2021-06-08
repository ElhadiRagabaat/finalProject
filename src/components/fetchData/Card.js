import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton'
// import Typography from '@material-ui/core/Typography'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { Container } from '@material-ui/core';
import { storage, db } from '../firebase';
// import Button from '@material-ui/core/Button';


function CardGallery({id,post,photoUrl}) {

const handleDelet =()=>{
    var imageRef = storage.refFromURL(photoUrl);
    imageRef.delete().then(function(){
        alert("Image deleted")
    }).catch(function(error){
        alert(error)
    })

    //delet from collection
    db.collection("Gallery").doc(id).delete()
   
}
    return (
        <Container>
        <Card elevation={0} style={{width:"100%",backgroundColor:"#f9f9f9"}}>
            <CardHeader
                action={
                    <IconButton onClick={handleDelet}>
                        <DeleteOutlinedIcon />
                    </IconButton>
                }
                subheader={post}
            />

            <img src={photoUrl} alt="" style={{width:"100%",objectFit:"fill"}}/>
            <CardActions>
          
            </CardActions>

        </Card>
        </Container>
    )
}

export default CardGallery
