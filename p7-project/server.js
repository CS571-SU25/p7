const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Environment variables
const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN || 'pk.eyJ1IjoiaGF6ZWxhbmQzNDI3IiwiYSI6ImNsMnNkd3lsNzBqa2EzbHBhMWlsc2p4aHYifQ.Gjb8ntV5xhWPXBn1UCUw8A';

// API Routes
app.get('/api/mapbox-token', (req, res) => {
  res.json({
    accessToken: MAPBOX_ACCESS_TOKEN,
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Mapbox token: ${MAPBOX_ACCESS_TOKEN ? 'Configured' : 'Not configured'}`);
});