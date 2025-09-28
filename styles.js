/**
 * CSS styles for the podcast-preview Web Component.
 * @type {string}
 */
export const podcastStyles = `
  .podcast-preview {
    display: flex;
    flex-direction: column;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    max-width: 300px;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }
  .podcast-preview:hover {
    transform: translateY(-4px);
  }
  .podcast-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 12px;
  }
  .podcast-title {
    font-size: 1.5rem;
    margin: 0 0 8px;
    color: #333;
  }
  .podcast-genres, .podcast-seasons, .podcast-updated {
    margin: 4px 0;
    font-size: 0.9rem;
    color: #666;
  }
  @media (max-width: 600px) {
    .podcast-preview {
      max-width: 100%;
    }
    .podcast-title {
      font-size: 1.2rem;
    }
    .podcast-genres, .podcast-seasons, .podcast-updated {
      font-size: 0.8rem;
    }
  }
`;