/**
 * Application logic to initialise podcast-preview components and handle events.
 */
import {podcasts, genres } from './data.js';
import { mapGenres } from './utils.js';

//Dynamically create podcast-preview components
const container = document.querySelector('.container');
podcasts.forEach(podcast => {
    const preview = document.createElement('podcast-preview');
    preview.podcastData = {
        id: podcast.id,
        title: podcast.title,
        genres: mapGenres(podcast.genres, genres),
        seasons: podcast.seasons,
        image: podcast.image,
        updated: podcast.updated
    };
    container.appendChild(preview);
});

//Listen for custom event
document.addEventListener('podcast-selected', (e) => {
    const {id, title, genres, seasons, updated } = e.detail;
    const formattedDate = updated
      ? new Date(updated).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) : 'Unknown'; 
    document.getElementById('output').textContent = `Selected 
    Podcast: \nID: ${id}\nTitle: ${title}\nGenres: ${genres.join(', ')} 
    \nSeasons: ${seasons}\nLast Updated: ${formattedDate}`;
});