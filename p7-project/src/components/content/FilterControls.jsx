import React, { useState, useEffect } from 'react';
import { useMap } from '../../contexts';
import { fetchMusicData } from '../../services/dataService';

const FilterControls = () => {
  const { filters, setFilters } = useMap();
  const [filterOptions, setFilterOptions] = useState({
    artists: [],
    districts: [],
    decades: []
  });

  // Fetch data and extract filter options
  useEffect(() => {
    const loadFilterOptions = async () => {
      try {
        const data = await fetchMusicData();

        // Extract unique artists using Singer (Chinese names)
        const artists = [...new Set(data.map(item => item.Singer).filter(Boolean))].sort();

        // Extract unique districts (using location_name_en as district)
        const districts = [...new Set(data.map(item => item.location_name_en).filter(Boolean))].sort();

        // Extract decades from years
        const decades = [...new Set(data.map(item => {
          if (item.year) {
            const year = parseInt(item.year);
            if (!isNaN(year)) {
              return `${Math.floor(year / 10) * 10}s`;
            }
          }
          return null;
        }).filter(Boolean))].sort();

        setFilterOptions({
          artists,
          districts,
          decades
        });
      } catch (error) {
        console.error('Error loading filter options:', error);
      }
    };

    loadFilterOptions();
  }, []);

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  const clearAllFilters = () => {
    setFilters({
      artist: '',
      district: '',
      decade: ''
    });
  };

  const hasActiveFilters = filters.artist || filters.district || filters.decade;

  return (
    <div className="filter-controls">
      <div className="filter-header">
        <h4>Filter Songs</h4>
        {hasActiveFilters && (
          <button
            className="clear-filters-btn"
            onClick={clearAllFilters}
          >
            Clear All
          </button>
        )}
      </div>

      <div className="filter-group">
        <label htmlFor="artist-filter">Artist:</label>
        <select
          id="artist-filter"
          value={filters?.artist || ''}
          onChange={(e) => handleFilterChange('artist', e.target.value)}
        >
          <option value="">All Artists</option>
          {filterOptions.artists.map(artist => (
            <option key={artist} value={artist}>{artist}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="district-filter">Location:</label>
        <select
          id="district-filter"
          value={filters?.district || ''}
          onChange={(e) => handleFilterChange('district', e.target.value)}
        >
          <option value="">All Locations</option>
          {filterOptions.districts.map(district => (
            <option key={district} value={district}>{district}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="decade-filter">Decade:</label>
        <select
          id="decade-filter"
          value={filters?.decade || ''}
          onChange={(e) => handleFilterChange('decade', e.target.value)}
        >
          <option value="">All Decades</option>
          {filterOptions.decades.map(decade => (
            <option key={decade} value={decade}>{decade}</option>
          ))}
        </select>
      </div>

      {hasActiveFilters && (
        <div className="active-filters">
          <h5>Active Filters:</h5>
          <div className="filter-tags">
            {filters.artist && (
              <span className="filter-tag">
                Artist: {filters.artist}
                <button onClick={() => handleFilterChange('artist', '')}>×</button>
              </span>
            )}
            {filters.district && (
              <span className="filter-tag">
                Location: {filters.district}
                <button onClick={() => handleFilterChange('district', '')}>×</button>
              </span>
            )}
            {filters.decade && (
              <span className="filter-tag">
                Decade: {filters.decade}
                <button onClick={() => handleFilterChange('decade', '')}>×</button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterControls;