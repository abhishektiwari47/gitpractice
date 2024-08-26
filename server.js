const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cardRoutes = require('./routes/cardRoutes');
const cors = require('cors');


dotenv.config();
const app = express();
app.use(cors());
connectDB();

app.use(express.json());

app.use('/api', cardRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
