import React, { useState } from 'react'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import firebase from 'firebase'
import { useHistory} from 'react-router-dom'

import './style.css'
import makeid from '../helper/functions';
import { storage, db } from '../firebase';

function Galler() {
    const [caption, setCaption] = useState('')
    const [Image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)
    const history = useHistory()

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])

            var selectedImageSrc = URL.createObjectURL(e.target.files[0])
            var imagePreview = document.getElementById('image_preview')
            imagePreview.src = selectedImageSrc;
            imagePreview.style.display ="block"
        }

    }
    const handleUpload = () => {
        if(Image){
            var imageName = makeid(10)
            const  uploadTask = storage.ref(`images/${imageName}.jpg`)
            .put(Image);
            uploadTask.on("state_change",(snapshot)=>{
                const progress = Math.round((snapshot.bytesTransferred/
                    snapshot.totalBytes)*100);
                    setProgress(progress)


            }, (error)=>{
                console.log(console.error)
            },()=>{
                /// get image dwonlaodUrl
                storage.ref("images").child(`${imageName}.jpg`)
                .getDownloadURL()
                .then((imageUrl)=>{
                    db.collection("Gallery").add({
                        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                        caption:caption,
                        phooUrl:imageUrl
                    
                    })
                    
                }).then(()=>{
                    
                    // history.put("/")
                })
            })
        }

    }

    return (
        <div>

            <div className="addImage_loggedin">
                <p>Add image</p>
                <div className="addImage_loginCenter">
                    <textarea
                        className="addImage_textarea"
                        placeholder="image title"
                        rows='3'
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                    >
                    </textarea>
                    <div className='imagePreview'>
                        <img id="image_preview"  alt="" />
                    </div>
                </div>
                <div className='loggedInBottom'>
                    <div className="imageUpload">
                        <label htmlFor="fileInput">
                            <AddAPhotoIcon style={{ cursor: "pointer", fontSize: "25px" }} />
                        </label>
                        <input id="fileInput" type="file" accept="image/*" onChange={handleChange} />
                    </div>
                    <button className="uploadBtn"
                        style={{ color: caption ? "black" : "lightgrey" }}
                        onClick={handleUpload}
                    
                    
                    >    {`Upload ${progress != 0 ? progress :""}`}</button>
                </div>
            </div>
        </div>
    )
}

export default Galler
