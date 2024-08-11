import { fetchMetadata } from "frames.js/next";
import Home from "@/components/screens/home";

export async function generateMetadata() {
  return {
    title: "My Page",
    // provide a full URL to your /frames endpoint
    other: await fetchMetadata(
      new URL(
        "/frames?jarId=0x7e564951f9c2adf9fe273f859e6e2289d898c4fccda42f76ab711b1dd2e22114&SourcechainId=84532",
        process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000"
      )
    ),
  };
}

export default function Index() {
  return (
    <>
      <Home />
    </>
  );
}
