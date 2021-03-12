const { fetcher } = require('../../utils/fetch')
require('dotenv').config()

const detail = async (req, res) => {
  try {
    const API_KEY = process.env.API_KEY

    let item = req._parsedUrl.path
    let query = item.replace('/image/', '')
    console.log(query)
    const endpointOne = `https://api.unsplash.com/photos/${query}?client_id=${API_KEY}`
    const endpointTwo = `https://api.unsplash.com/photos/?client_id=${API_KEY}&per_page=10&order_by=popular`

    console.log(item)
    const response = await fetcher(endpointOne)
    const recommendedResponse = await fetcher(endpointTwo)

    console.log('response', response)
    // console.log('recommendedResponse', recommendedResponse)
    res.render('details', {
      data: response,
      recommended: recommendedResponse,
      style: '../css/index.css',
      stylePage: '../css/pages/editor.css',
      PageTitle: 'Editor | PhotoPaint',
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = { detail }
