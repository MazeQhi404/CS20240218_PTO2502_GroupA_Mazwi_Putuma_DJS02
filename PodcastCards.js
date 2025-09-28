
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

        //Handles click event
        wrapper.addEventListener('click', function () {
            // Gets the genres attribute and convert it to an array
            var genresString = this.getAttribute('genres');
            var genresArray = [];
            if (genresString) {
                genresArray = genresString.split(',').map(function(genre) {
                    return genre.trim();
                });
            }

            //Get other attributes
            var id = this.getAttribute('id') || '';
            var title = this.getAttribute('title') || '';
            var seasons = this.getAttribute('seasons') || '0';
            var image = this.getAttribute('image') || '';
            var updated = this.getAttribute('updated') || '';

            //Converts seasons to a number
            seasons = parseInt(seasons, 10);

            //Creates the detail object for the custom event
            var detail = {
                id: id,
                title: title,
                genres: genresArray,
                seasons: seasons,
                image: image,
                updated: updated
            };

            //Creates and dispatches the custom event
            var event = new CustomEvent('podcast-selected', {
                dteail: detail,
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(event);



            
        }.bind(this));

    }

    /**
     * Returns the attributes to observe for changes.
     * @static
     * @returns {string[]} Array of attribute names
     */
    static get observedAttributes() {
        return ['id', 'title', 'genres', 'seasons', 'image', 'updated'];
    }

    /**
     * Handles attribute changes and updates the DOM
     * @param {string} name - The name of the attribute that changed.
     * @param {string|null} oldValue - The previous value of the attribute.
     * @param {string|null} newValue - The new value of the attribute.
     */

    attributeChangedCallback(name, oldValue, newValue) {
        if(!this.shadowRoot) return;
        const shadow = this.shadowRoot;
        if (name === 'image') {
            shadow.querySelector('.podcast-image').src = newValue || 'https://via.placeholder.com/300';         
        } else if (name === 'title') {
            shadow.querySelector('.podcast-title').textContent = newValue || 'Untiltled Podcast';
        } else if (name === 'genres') {
            shadow.querySelector('.podcast-genres').textContent = `Genres: ${newValue || 'Unknown'}`;
        } else if (name === 'updated') {
            shadow.querySelector('.podcast-updated').textContent = `Last Updated ${formatDate(newValue)}`;
        }
    }

    /**
     * Initialises the component when added to the DOM
     */

    connectedCallback() {
        this.attributeChangedCallback('id', null, this.getAttribute('id'));
        this.attributeChangedCallback('image', null, this.getAttribute('image'));
        this.attributeChangedCallback('title', null, this.getAttribute(title));
        this.attributeChangedpodcast data 
        const image = document.createElement('img');
        image.className= 'podcast-image';
        //🌸
        this.attributeChangedCallback('seasons', null, this.getAttribute('seasons'));
        this.attributeChangedCallback('updated', null, this.getAttribute('updated'));
    }

    /**
     * Sets podcast data as a property and updates attributes.
     * @param {Object} data - The podcast data object.
     */
    set podcastData(data) {
        if (data) {
            this.setAttribute('id', data.id || '');
            this.setAttribute('title', data.title || '');
            this.setAttribute('genres', data.genres || '');
            this.setAttribute('seasons', data.seasons || '0');
            this.setAttribute('image', data.image || '');
            this.setAttribute('updated', data.updated || '');
        }
    }
}

//Define the custom element
customElements.define('podcast-preview', PodcastPreview);