// Load environment variables from a .env file
require('dotenv').config();

// Import the Finnhub module
const finnhub = require('finnhub');

// Function to get the price of a stock symbol
function getSymbolPrice(symbol){
    try {
        // Retrieve the API key authentication object from the Finnhub API client
        const api_key = finnhub.ApiClient.instance.authentications['api_key'];
        
        // Set the API key from the environment variable
        api_key.apiKey = process.env.API_KEY;

        // Create a new instance of the Finnhub client
        const finnhubClient = new finnhub.DefaultApi();

        // Fetch the quote for the given symbol and handle the response
        finnhubClient.quote(symbol, (err, data, response) => {
            // Log the response data to the console
            console.log(data);
        });
    } catch(error) {
        // Log any errors that occur during the API call
        console.error('error', error);
    }
}

// Call the function with the stock symbol 'MSFT' (Microsoft)
getSymbolPrice('MSFT')
