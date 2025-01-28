import React from 'react'
import Newsletter from './newsletter/newsletter'
import PhotoGallery from './photo-gallery'

function VisualsA() {
  return (
    <section className='bg-black text-white flex flex-col justify-center items-center py-20'>
        <Newsletter/>
        <PhotoGallery/>    
    </section>
  )
}

export default VisualsA