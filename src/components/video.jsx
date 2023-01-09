import React from 'react'
import axios from 'axios';

const API_TOKEN = '6727fd07abmshdddcbc34023c21fp187140jsnab366a7a51bd';

async function getVideo(video) {
    try {
        const response = await axios.get('https://free-football-soccer-videos.p.rapidapi.com', {
            headers: {
                /* 'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com', */
                'X-RapidAPI-Key': API_TOKEN
            }
        });
      
        console.log(response.data[0]);
    } catch (error) {
        console.error(error);
    }
}

/* const options = {
  method: 'GET',
  url: 'https://free-football-soccer-videos.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
  }
}; */

/* axios.request(getVideo).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
}); */


function VideoEmbed() {
    getVideo();
  return (
      <div>
          hello
    </div>
  )
}

export default VideoEmbed