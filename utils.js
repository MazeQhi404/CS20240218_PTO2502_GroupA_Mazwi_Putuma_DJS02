/**
 * Utility function to format ISO date strings into a  human-readable format.
 * @param {string|null} dateString - The ISO date string
 * @returns {string} Formatted date (e.g., 'November 3, 2022') or 'Unknown' is invalid.
 */

export function formatDate(dateString) {
    const date = dateString ? new Date(dateString) : null;
    return date && !isNaN(date)
       ? date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
       })
       : 'Unknown';
}

/**
 * Maps genre IDs to their corresponding titles.
 * @param {number[]} genreIds - Array of genre IDs.
 * @param {Object[]} genreData - Array of genre objects with id and title.
 * @returns {string} Comma-separated string of genre titles.
 */

export function mapGenres(genreIds, genreData) {
    const genreMap = genreData.reduce((map, genre) => {
        map[genre.id] = genre.title;
        return map;
    }, {});
    return genreIds.map(id => genreMap[id] || 'Unknown').join(', ');
}