
import { podcastStyles } from `./styles.js`;
import { formatDate } from `./utils.js`;

class PodcastPreview extends HTMLElement {
    /**
     * Constructor for PodcastPreciew component.
     * Initialises the Shadow DOM and sets up the component's structure.
     */
    constructor() {
        super();
        //Attach Shadow DOM for encapsulation
        const shadow = this.attachShadow({ mode: 'open' });

        //Create Container
        const wrapper = document.createElement('div');
        wrapper.className = 'podcast-preview';

        //Create elements for podcast data
        const image = document.createElement('img');
        image.className = 'podcast-image';
        image.alt = 'Podcast cover';

        const title = document.createElement('h2');
        title.className = 'podcast-title';

        const genres = document.createElement('p');
        genres.className = 'podcast-genres';

        const seasons = document.createElement('p');
        seasons.className = 'podcast-seasons';

        const updated = document.createElement('p');
        updated.className = 'podcast-updated';

        //Styles
        const style = document.createElement('style');
        style.textContent = podcastStyles;

        //Append elements to shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(image);
        wrapper.appendChild(title);
        wrapper.appendChild(seasons);
        wrapper.appendChild(updated);

        



    }
}