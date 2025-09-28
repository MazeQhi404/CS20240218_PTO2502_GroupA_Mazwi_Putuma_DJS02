
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
        
    }
}