import React, { useContext } from "react"
import {appContext} from "../appContext"
import Image from "../components/image"
import {ImgClass} from "../utils/imgClass"

function Photos() {
    const {images} = useContext(appContext)
     //console.log(images)

     {/*const photosElement = images.map(img => (
         <div className="image-container">
             <img key={img.id} src={img.url} className="image-grid" />
         </div>
     )) */}


    const photosElement = images.map((img, i) => (
        <Image key={img.id} img={img} className={ImgClass(i)} />
    ))

    return(
        <main className="photos">
            {photosElement}
        </main>
    )
}

export default Photos