import { useState, useEffect } from 'react'
import { API_KEY, value_converter } from '../../Data'
import './Recommended.css'
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => {
    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
        try {
            const response = await fetch(relatedVideo_url);
            const data = await response.json();
            setApiData(data.items);
        } catch (error) {
            console.error("Failed to fetch recommended videos:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [categoryId]); // Added categoryId as a dependency

    return (
        <div className='recommended'>
            {apiData.map((item, index) => {
                return (
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
                        <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                        <div className="vid-info">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{value_converter(item.statistics.viewCount)} Views</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default Recommended;