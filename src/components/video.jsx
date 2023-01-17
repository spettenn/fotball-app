import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_TOKEN = '6727fd07abmshdddcbc34023c21fp187140jsnab366a7a51bd';

async function getVideo(video) {
  try {
    const response = await axios.get(
      `https://free-football-soccer-videos.p.rapidapi.com/video/${video}`,
      {
        headers: {
          /* 'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com', */
          'X-RapidAPI-Key': API_TOKEN,
        },
      }
    );

    return response.data.url;
  } catch (error) {
    console.error(error);
  }
}

function VideoEmbed({ video }) {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      const url = await getVideo(video);
      setVideoUrl(url);
    }
    fetchData();
  }, [video]);

  return (
    <div>
      {videoUrl && (
        <iframe
          title='video'
          width="560"
          height="315"
          src={videoUrl}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      )}
    </div>
  );
}

export default VideoEmbed;
