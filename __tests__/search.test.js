const { searchGoogle, displayResults } = require('../src/searchGoogle.js');


describe('displayResults', () => {
  it('should return HTML for a list of results', () => {
    const mockResults = [
      { title: 'Test result', link: 'https://example.com', snippet: 'This is a test result.' }
    ];
    const html = displayResults(mockResults);

    // Uistíme sa, že html nie je undefined predtým, než sa porovnáva
    expect(html).not.toBeUndefined();
    expect(html).toContain('<a href="https://example.com" target="_blank">Test result</a>');
    expect(html).toContain('This is a test result.');
  });

  it('should return "No results found" when no results are passed', () => {
    const html = displayResults([]);

    // Zabezpečíme, že výsledok je "No results found"
    expect(html).toBe('No results found.');
  });
});


describe('displayResults', () => {
  it('should return HTML for a list of results', () => {
    const mockResults = [
      { title: 'Test result', link: 'https://example.com', snippet: 'This is a test result.' }
    ];
    const html = displayResults(mockResults);

    expect(html).toContain('<a href="https://example.com" target="_blank">Test result</a>');
    expect(html).toContain('This is a test result.');
  });

  it('should return "No results found" when no results are passed', () => {
    const html = displayResults([]);

    expect(html).toBe('No results found.');
  });
});
