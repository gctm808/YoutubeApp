import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search'
import VideoDetail from './components/video_detail'
const API_KEY = 'not for display here'

//Create new component
//Component produces jsx/html
class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            selectedVideo: null
        }

        this.videoSearch('surfboards')
    }
    
    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        })
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} />
            </div>
        )
    }
}

//Show component html in DOM
ReactDOM.render(<App />, document.getElementById('root'))