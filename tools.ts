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
        website: "https://yeungmancooking.com/collections/ymc-merch",
        json_schema: [{ name: "Name of Item", price: "Price of Item", image: "Image of Item" }]
    });

    console.log("Data extraction:", JSON.stringify(response));

}

extract()