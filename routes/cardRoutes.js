const express = require('express');
const Card = require('../models/Card');
const router = express.Router();

router.post('/cards', async (req, res) => {
    try {
        const { title, description, link } = req.body;
        const card = new Card({ title, description, link });
        await card.save();
        res.status(201).json({ message: 'Card created successfully', card });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: 'Card with this title already exists' });
        }
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});

router.get('/cards', async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});

app.get('/api/cards/:title', async (req, res) => {
    const title = req.params.title;
    try {
      const card = await Card.findOne({ title });
      if (!card) {
        return res.status(404).send('Card not found');
      }
      res.send(card);
    } catch (error) {
      res.status(500).send('Server error');
    }
  });
  

module.exports = router;
