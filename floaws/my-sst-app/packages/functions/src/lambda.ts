import { ApiHandler } from "sst/node/api";
import { Time } from "@my-sst-app/core/time";


export const handler = ApiHandler(async (_evt) => {
  return {
    body: `Hello world vishwajit. The time is ${Time.now()}`,
  };
});
