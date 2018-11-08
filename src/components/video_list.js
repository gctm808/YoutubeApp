import React from 'react'
import VideoListItem from './video_list_items'
import './styles.css'

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return(
            <VideoListItem 
                key={video.etag}
                video={video}
                onVideoSelect={props.onVideoSelect} />
        )
    })

    return (
        <ul className='#'>
            {videoItems}
        </ul>
    )
}

export default VideoList