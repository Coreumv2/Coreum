import axios from 'axios';

const fetchTokenPrice = async () => {
  try {
    const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=$16399&vs_currencies=usd');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchTokenPrice();
