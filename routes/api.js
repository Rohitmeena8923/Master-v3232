const express = require('express');
const router = express.Router();
const scraper = require('../scraper');

router.get('/episodes', async (req, res) => {
  try {
    const episodes = await scraper.getEpisodes();
    res.json(episodes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/sources/:id', async (req, res) => {
  try {
    const sources = await scraper.getSources(req.params.id);
    res.json(sources);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;