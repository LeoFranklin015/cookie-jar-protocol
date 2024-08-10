import { Button } from "frames.js/next";
import { frames } from "./frames";

const handleRequest = frames(async (ctx) => {
  return {
    image: (
      <div
        tw="bg-black flex w-full h-full justify-center items-center"
        className=" items-center"
      >
        <div tw="text-white">Dao-Name</div>
      </div>
    ),
    buttons: [
      <Button action="post" target="/worldcoin">
        Verify Here
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
