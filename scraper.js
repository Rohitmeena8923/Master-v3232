const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  async getEpisodes() {
    // Mock data - replace with actual scraping logic
    return Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      title: `Naruto Episode ${i + 1}`,
      thumbnail: `/images/ep${(i % 5) + 1}.jpg` // Using 5 placeholder images
    }));
  },

  async getSources(episodeId) {
    // Mock data - replace with actual scraping logic
    return [{
      quality: '720p',
      url: `https://example.com/stream/naruto/${episodeId}`,
      isM3U8: true
    }];
  }
};