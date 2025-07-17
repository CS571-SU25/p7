# Singing Through the City - Backend Setup

This project includes a Node.js backend to securely handle the Mapbox API key while keeping music data local for development.

## Setup Instructions

### 1. Install Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd p7-project
npm install
```

### 2. Environment Configuration

Create a `.env` file in the root directory:

```env
# Mapbox API Configuration
MAPBOX_ACCESS_TOKEN=your_actual_mapbox_token_here

# Server Configuration
PORT=3001
NODE_ENV=development
```

**Important**: Replace `your_actual_mapbox_token_here` with your actual Mapbox access token.

### 3. Build the Frontend

```bash
cd p7-project
npm run build
```

### 4. Run the Application

```bash
# Start the backend server
npm start

# Or for development with auto-restart
npm run dev
```

The application will be available at `http://localhost:3001`

## API Endpoints

- `GET /api/mapbox-token` - Returns the Mapbox access token
- `GET /api/health` - Health check endpoint

## Data Sources

- **Music Data**: Loaded locally from `p7-project/public/data/HKLyrics.csv`
- **Mapbox Token**: Securely served from backend API

## Security Benefits

1. **Hidden API Key**: The Mapbox access token is no longer exposed in the frontend code
2. **Environment Variables**: Sensitive data is stored in environment variables
3. **Local Data**: Music data is served directly from the frontend for faster development
4. **API Proxy**: Mapbox requests go through the backend server

## Development

For development, you have two options:

### Option 1: Frontend Only (Recommended for Development)
```bash
# Just run the frontend - it will use hardcoded token
cd p7-project
npm run dev
```
Access at `http://localhost:5173`

### Option 2: Full Stack (Backend + Frontend)
```bash
# Terminal 1: Backend (for secure Mapbox token)
npm run dev

# Terminal 2: Frontend (in p7-project directory)
cd p7-project
npm run dev
```
Access frontend at `http://localhost:5173` and it will proxy API requests to the backend.

**Note**: In development mode, the frontend will automatically use a hardcoded Mapbox token if the backend is not available.

## Production Deployment

1. Set `NODE_ENV=production` in your environment
2. Build the frontend: `cd p7-project && npm run build`
3. Start the server: `npm start`
4. The server will serve the built frontend files

## File Structure

```
├── server.js              # Express server (Mapbox token only)
├── package.json           # Backend dependencies
├── .env                   # Environment variables (create this)
├── p7-project/           # Frontend React app
│   ├── src/
│   ├── public/
│   │   └── data/
│   │       └── HKLyrics.csv  # Music data
│   └── package.json
└── README.md
```
