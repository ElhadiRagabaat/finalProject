import React, { useEffect } from 'react'
import './style.css'
import { useState } from 'react'
import CardGallery from './Card';
import Masonry from 'react-masonry-css'
import { db } from '../firebase';

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

function Data() {
    const [posts, setPost] = useState([])
    
    useEffect(() => {

        db.collection("Gallery").orderBy("timestamp", 'desc')
            .onSnapshot((snapshot) => {

                setPost(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })))
            })

    }, [posts])
    

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
           
            {posts.map(({ id, post }) => {

                return <div key={id}>
                    <CardGallery post={post.imageTitle}
                        photoUrl={post.photoUrl}
                        id={id}
                    />
                </div>
            })}
        </Masonry>

    )
}

export default Data
