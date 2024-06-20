const axios = require('axios');

exports.searchFood = async (req, res) => {
  try {
    const { query } = req.query;
    const apiKey = process.env.EDAMAM_API_KEY;
    const apiId = process.env.EDAMAM_API_ID;
    const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser`, {
      params: {
        app_id: apiId,
        app_key: apiKey,
        ingr: query,
      },
    });

    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
