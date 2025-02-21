// searchGoogle.js

const apiKey = 'AIzaSyDppukOzTaSIYM1yBrqZ7BPbc64U0TsCqc';
const cx = '101b94f7b53664b6c';

async function searchGoogle(query) {
  const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${apiKey}&cx=${cx}&gl=sk&hl=sk`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Chyba pri načítaní výsledkov:', error);
    return [];
  }
}

function displayResults(results) {
  if (!results || results.length === 0) {
    return 'No results found.';
  }

  return results.map(item => `
    <li>
      <a href="${item.link}" target="_blank">${item.title}</a><br>${item.snippet}
    </li>
  `).join('');
}

// Exportovanie oboch funkcií pre testy a použitie v aplikácii
module.exports = { searchGoogle, displayResults };
