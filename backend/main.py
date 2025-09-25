from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os
import traceback
import random
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure Gemini API
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY not found in environment variables")

genai.configure(api_key=GEMINI_API_KEY)

# Initialize Flask app
app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

# Financial advisor system prompt
FINANCIAL_ADVISOR_PROMPT = """
You are an AI Financial Advisor specialized in providing personalized financial advice.
Your goal is to help users optimize their finances, make better financial decisions, and achieve their financial goals.
Provide clear, concise, and actionable advice based on the user's questions and financial situation.
Focus on areas such as budgeting, saving, investing, debt management, retirement planning, and financial goal setting.
Always maintain a professional, helpful, and encouraging tone.
"""

# Mock responses for when API quota is exceeded
MOCK_RESPONSES = [
    "Based on financial best practices, I recommend creating an emergency fund that covers 3-6 months of expenses before focusing on other financial goals.",
    "A good rule of thumb for budgeting is the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings and debt repayment.",
    "When investing, consider diversifying your portfolio across different asset classes to manage risk while pursuing growth.",
    "For retirement planning, try to save at least 15% of your pre-tax income annually, including any employer match contributions.",
    "When paying off debt, the avalanche method (paying highest interest first) saves you the most money, while the snowball method (paying smallest balances first) provides psychological wins.",
    "Consider automating your savings by setting up automatic transfers to your savings account on payday.",
    "Review your insurance coverage regularly to ensure you're adequately protected against potential financial setbacks.",
    "When making large purchases, follow the 24-hour rule: wait 24 hours before buying to avoid impulse purchases.",
    "Track your expenses for a month to identify spending patterns and areas where you can potentially cut back.",
    "Remember that financial planning is personal - your financial strategy should align with your unique goals and circumstances."
]

@app.route("/api/chat", methods=["POST"])
def chat():
    try:
        data = request.json
        messages = data.get("messages", [])
        user_context = data.get("user_context", {})
        
        # Print received data for debugging
        print(f"Received data: {data}")
        
        # For simplicity, let's extract just the last user message
        last_user_message = None
        for msg in reversed(messages):
            if msg.get("isUser"):
                last_user_message = msg.get("content")
                break
        
        if not last_user_message:
            return jsonify({"response": "I didn't receive a question. How can I help with your finances?"}), 200
        
        try:
            # Try to use Gemini API first
            # Initialize the model with a different model that might have quota available
            model = genai.GenerativeModel('models/gemini-1.5-flash')
            prompt = f"{FINANCIAL_ADVISOR_PROMPT}\n\nUser question: {last_user_message}"
            response = model.generate_content(prompt)
            return jsonify({"response": response.text})
            
        except Exception as api_error:
            # If API fails (quota exceeded), use mock response
            print(f"API error: {str(api_error)}, using mock response instead")
            mock_response = random.choice(MOCK_RESPONSES)
            return jsonify({"response": mock_response}), 200
    
    except Exception as e:
        error_details = traceback.format_exc()
        print(f"Error in /api/chat: {str(e)}\n{error_details}")
        return jsonify({"response": "I'm sorry, I'm having trouble providing financial advice at the moment. Please try again later."}), 200

@app.route("/api/health", methods=["GET"])
def health_check():
    return jsonify({"status": "healthy"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)