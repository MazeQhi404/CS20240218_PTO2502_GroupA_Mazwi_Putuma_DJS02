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
 * Maps
 */