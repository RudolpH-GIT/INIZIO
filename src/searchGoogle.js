// searchGoogle.js

async function searchGoogle(query) {
  const url = `https://moje-api.vercel.app/api/search?q=${encodeURIComponent(query)}`;
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
