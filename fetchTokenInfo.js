import axios from 'axios';
import fs from 'fs';

const fetchTokenInfo = async () => {
  try {
    const query = `
      query {
        token(id: "0xf431303C990b3A68642954435C7625EB889C8002") {
          id
          name
          symbol
          derivedETH
          totalLiquidity
        }
      }
    `;

    const response = await axios.post('https://api.studio.thegraph.com/query/77159/coreum-v-2/v0.0.1', {
      query
    });

    const tokenInfo = response.data.data.token;
    console.log(tokenInfo);

    // Save tokenInfo to a file
    fs.writeFileSync('tokenInfo.json', JSON.stringify(tokenInfo, null, 2));
    console.log('Token information saved to tokenInfo.json');
  } catch (error) {
    console.error('Error fetching token information:', error);
  }
};

fetchTokenInfo();
