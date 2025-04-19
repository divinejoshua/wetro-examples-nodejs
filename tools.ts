import Wetrocloud from "wetro-sdk";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();
const API_SECRET = process.env.WETROCLOUD_API_SECRET || "";
// Initialize the Wetrocloud client
const client = new Wetrocloud({
  apiKey: API_SECRET
});

const extract = async () => {
    // Extract structured data from a website
    const response = await client.extract({
        website: "https://en.wikipedia.org/wiki/Bloomberg_Billionaires_Index",
        json_schema: [{ name: "name of rich man", networth: "amount worth" }]
    });

    console.log("Data extraction:", response);

}

extract()