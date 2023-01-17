import React, { useEffect, useState } from 'react';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://free-football-soccer-videos1.p.rapidapi.com/v1/',
  headers: {
    'X-RapidAPI-Key': '6727fd07abmshdddcbc34023c21fp187140jsnab366a7a51bd',
    'X-RapidAPI-Host': 'free-football-soccer-videos1.p.rapidapi.com'
  }
};

const VideoEmbed = () => {
  const [embed, setEmbed] = useState('');

  useEffect(() => {
    axios.request(options)
      .then(response => {
        setEmbed(response.data[0].embed);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: embed }} />
    </div>
  );
}

export default VideoEmbed;
