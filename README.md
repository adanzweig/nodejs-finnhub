
# Stock Price Fetcher

## Description
This project is a Node.js application designed to retrieve real-time stock prices using the Finnhub API. It's a simple yet effective tool for anyone interested in financial data, particularly stock market enthusiasts, investors, and analysts.

## Features
- Fetch real-time stock prices.
- Easy to use with any stock symbol.

## Installation
Before you begin, ensure you have Node.js installed on your system. Follow these steps to set up the project:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/adanzweig/nodejs-finnhub.git
   cd nodejs-finnhub
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add your Finnhub API key:
   ```plaintext
   API_KEY=your_finnhub_api_key
   ```

## Usage
To fetch the stock price for a specific symbol (e.g., 'MSFT' for Microsoft), run the script as follows:
```bash
node index.js 'MSFT'
```

Replace `'MSFT'` with the stock symbol you are interested in.
