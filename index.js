const express = require('express');
const axios = require('axios');
const path = require('path')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

async function getRandomUnsplashBackground() {
  try {
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        query: 'turism',
        orientation: 'landscape',
        client_id: 'l1OK0VDYII6LF3co7ouVPCO9TM_gRGNvCtd5WEGxyEk'
      }
    })
    if (!response) throw Error
    const imageUrl = response.data.urls.full
    return imageUrl
  } catch (error) {
    console.log(error)
  }
}

app.get('/img-gen', async (req, res) => {
  try {
    const imageUrl = await getRandomUnsplashBackground()
    res.json({ imageUrl })
  } catch (error) {
    console.log(error)
  }
})

app.listen(port, () => {
  console.log('Server listening on port: ' + port)
})
