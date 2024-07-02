import axios from 'axios';

const apiKey = 'aad2972e-52bf-4aa4-a996-08714dfe88ec';
const tokenId = 16399;

const config = {
  headers: { 'X-CMC_PRO_API_KEY': apiKey }
};

const fetchData = async () => {
  try {
    const response = await axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${tokenId}`, config);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
