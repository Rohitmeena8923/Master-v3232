const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Naruto Extractor' });
});

router.get('/watch/:id', async (req, res) => {
  try {
    res.render('watch', { 
      title: `Episode ${req.params.id}`,
      episode: req.params.id
    });
  } catch (error) {
    res.status(500).send('Error loading episode');
  }
});

module.exports = router;