import express from 'express';
import axios from 'axios';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server);

const PORT = 3000;

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('New client connected');

    setInterval(async () => {
        try {
            const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=your-token-id&vs_currencies=usd');
            const price = response.data['your-token-id'].usd;
            socket.emit('priceUpdate', price);
        } catch (error) {
            console.error('Error fetching price data:', error);
        }
    }, 5000); // Update every 5 seconds

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
