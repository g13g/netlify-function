const axios = require('axios')

const handler = async (event) => {

  const API_SECRET = process.env.RATES_API_KEY 
  const URI = "http://api.exchangeratesapi.io/v1/latest?access_key=" + API_SECRET;
  try {
    const { data } = await axios.get(URI)

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (error) {
    const { status, statusText, headers, data } = error.response
    return {
      statusCode: status,
      body: JSON.stringify({status, statusText, headers, data})
    }
  }
}

module.exports = { handler }
