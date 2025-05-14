document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('/api/episodes');
    const episodes = await response.json();
    
    const container = document.getElementById('episodesContainer');
    container.innerHTML = episodes.map(ep => `
      <div class="episode-card">
        <img src="${ep.thumbnail}" alt="${ep.title}">
        <h3>${ep.title}</h3>
        <a href="/watch/${ep.id}">Watch Now</a>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error loading episodes:', error);
    document.getElementById('episodesContainer').innerHTML = 
      '<p>Error loading episodes. Please try again later.</p>';
  }
});