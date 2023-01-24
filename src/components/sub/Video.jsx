import React from 'react'

const src = "https://player.vimeo.com/progressive_redirect/playback/681143809/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=72eb4599432d65791fdc7f826c1e6f939d02bade618950bb6324ff904e535770"

const Video = () => {

    return (
        <>
            <video controls className='w-full object-cover'>
                <source src={src} type='video/mp4' />
                Your browser does not support video tag...
            </video>
        </>
    )
}

export default Video