# Financial AI Advisor Backend

This is the backend for the Financial AI Advisor application, built with FastAPI and integrated with Google's Gemini AI.

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Set up your environment variables:
   - Create a `.env` file in the root directory
   - Add your Gemini API key: `GEMINI_API_KEY=your_api_key_here`

3. Run the server:
```bash
python main.py
```

The server will start at http://localhost:8000

## API Endpoints

- `POST /api/chat`: Send messages to the AI advisor
- `GET /api/health`: Health check endpoint

## Integration with Frontend

The backend is configured to accept requests from the frontend running at http://localhost:5173.