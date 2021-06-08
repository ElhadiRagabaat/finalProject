import React from 'react'
import firebase from 'firebase'
import { useState } from 'react'
import './style.css'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { storage, db } from '../firebase';
import makeid from '../helper/functions';
import { useHistory } from 'react-router-dom';


function Gallery() {
    const [caption, setCaption] = useState("")
    const [image, setImage] = useState(null)
    const [progerss, setProgerss] = useState(0)
    const history = useHistory()

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])

            var selectedImageSrc = URL.createObjectURL(e.target.files[0])
            var imagePreviw = document.getElementById("image_preview");
            imagePreviw.src = selectedImageSrc
            imagePreviw.style.display = "block"

        }
    }
    const handleUpload = () => {
        if (image) {
            const imageName = makeid(10)
            const uploadTask = storage.ref(`images/${imageName}.jpg`)
                .put(image)

            uploadTask.on("state_change", (snapshot) => {

                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                setProgerss(progress)
            }, (error) => {
                alert(error)

            }, () => {
                /////get Image Url
                storage.ref("images").child(`${imageName}.jpg`)
                    .getDownloadURL()

                    .then((imageUrl) => {
                        db.collection("Gallery").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            photoUrl: imageUrl,
                            imageTitle: caption
                        })
                        setCaption("")
                        setProgerss(0)
                        setImage(null)
                        var imagePreviw = document.getElementById("image_preview");
                        imagePreviw.src = ""
                    history.push('/admin')
                    })

            })
        }
    }
    return (
        <div>
            <div className='galleryLoggedIn'>
                <p>Add image</p>
                <div >
                    <textarea
                        rows='3'
                        value={caption}
                        placeholder=" Enter Image Title"
                        onChange={(e) => setCaption(e.target.value)}
                    ></textarea>
                    <div className="imagePreview">
                        <img id="image_preview" alt="" />
                    </div>
                </div>
                <div className="galleryBottom">
                    <div className='imageUpload'>
                        <label htmlFor="fileInput">
                            <AddAPhotoIcon style={{ cursor: "pointer", fontSize: "27px" }} />
                        </label>

                        <input id="fileInput" type="file" accept="image/*" onChange={handleChange} />
                    </div>
                    <button className="uploadBtn" onClick={handleUpload}
                        style={{ color: caption ? "black" : "lightgrey", cursor: "pointer" }}
                    > {`Upload ${progerss !== 0 ? progerss : ""}`}</button>
                </div>
            </div>
            {/* <div  style={{marginTop:"10px"}}>
            <Data />
            </div> */}
           
        </div>
    )
}

export default Gallery
