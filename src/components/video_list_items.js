import React from 'react'
 

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url
    const videoTitle = video.snippet.title

    return (
        <li onClick={() => onVideoSelect(video)}>
            <div className='border'>
                <div>
                   <img src={imageUrl} alt='videoDidntLoad'/>
                </div>
                <div>
                    {videoTitle}
                </div>
            </div>
        </li>
    )
}

export default VideoListItem