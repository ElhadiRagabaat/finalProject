import React, { useEffect } from 'react'
import { useState } from 'react'
import { db } from '../firebase'
import Masonry from 'react-masonry-css'
import ImageContainer from '../ImageContainer'
import { FooterContainer } from '../../container/FooterContainer'


const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

function MainGallery() {

    const [posts, setPost] = useState([])
    const [isLoading, setIslaoding] = useState(true)

    useEffect(() => {

        db.collection("Gallery").orderBy("timestamp", 'desc')
            .onSnapshot((snapshot) => {

                setPost(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })))
                 setIslaoding(false)
            })
           

    }, [posts])

    return (
        <>

            {isLoading && <div style={{marginTop:"20px", fontWeight:"bolder",color:"pink",fontSize:"20px"}}>  Loading  now  ............</div>}
            <Masonry

                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">

                {posts.map(({ id, post }) => {

                    return <div key={id}>
                        <ImageContainer post={post.imageTitle}
                            photoUrl={post.photoUrl}
                            id={id}
                        />
                    </div>
                })}
            </Masonry>
            <FooterContainer/>
        </>
    )
}

export default MainGallery

