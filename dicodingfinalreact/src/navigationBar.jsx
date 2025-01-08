import React, { useState } from 'react';

function NavigationBar() {
  // const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Search query:', query);
    // Perform search logic here
  };

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f8f8f8', borderBottom: '1px solid #ddd' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <a href="/" style={{ textDecoration: 'none', color: '#333', fontSize: '1.5rem' }}>Logo</a>
        </div>
        <div>
          <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              style={{ padding: '0.5rem', marginRight: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px' }}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default NavigationBar;

