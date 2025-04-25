import Wetrocloud from "wetro-sdk";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();
const API_SECRET = process.env.WETROCLOUD_API_SECRET || "";

// Initialize Wetrocloud with your API secret
const wetrocloud = new Wetrocloud({ apiKey: API_SECRET });

// Wrap everything in an async function
const main = async () => {
    const response : any = await wetrocloud.queryCollection({
        collection_id :"my_unique_collection_id",
        request_query :"What is this about?",
        stream: true,
      });


    console.log("Streaming response:");
    for await (const chunk of response) {
        console.log(chunk.response);
    }
};

// Run the async function
main();
