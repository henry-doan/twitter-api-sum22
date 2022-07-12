import { useState, useEffect } from "react";
import axios from 'axios';

const Tweets = ({}) => {
  const [tweets, setTweets] = useState([])
  
  useEffect( () => {
    axios.get('/api/tweets')
      .then( res => {
        debugger
        setTweets(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  return (
    <>
      <h1>Tweets</h1>
      {
        tweets.map( t => 
          <div key={t.id}>
            <img src={t.user.profile_image_url}  alt='profile' />
            <h3>{t.user.name}</h3>
            <p>{t.text}</p>
          </div>
        )
      }
    </>
  )
}

export default Tweets;