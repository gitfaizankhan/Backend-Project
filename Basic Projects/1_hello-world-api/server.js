import env from 'dotenv';
import express from 'express';

env.config();
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Hello World!');    
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});