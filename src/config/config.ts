import { createClient } from "@libsql/client";
import mondaySdk from "monday-sdk-js";
import { Template } from "./types";

const client = createClient({
  // url: import.meta.env.DB_URL,
  // authToken: import.meta.env.DB_TOKEN,
  // encryptionKey: import.meta.env.VITE_ENCRYPTION_KEY,
  url: "libsql://templates-mlinder10.turso.io",
  authToken:
    "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MDkxNjgwMTMsImlkIjoiZTEzOWUxYWMtZDY5Yy0xMWVlLWEwZjEtNTYyYWRhNTU1MDAyIn0.IPiKfmfsy_aebfKKuGOsLUUw150gv1I4YhfR-nGATyWuN7AMeEVJBVgx6f3-9pUmFpUyUmZ6gamrjS5yV5t8CQ",
});

export default client;

export const monday = mondaySdk();

export const mockTemps: Template[] = [
  {
    tid: 1,
    uid: "0",
    bid: "0",
    template: "test",
  },
  {
    tid: 2,
    uid: "0",
    bid: "0",
    template: "new",
  },
  {
    tid: 3,
    uid: "0",
    bid: "0",
    template: "another",
  },
  {
    tid: 3,
    uid: "0",
    bid: "0",
    template: "another",
  },
  {
    tid: 3,
    uid: "0",
    bid: "0",
    template: "another",
  },
  {
    tid: 3,
    uid: "0",
    bid: "0",
    template: "another",
  },
  {
    tid: 3,
    uid: "0",
    bid: "0",
    template: "another",
  },
  {
    tid: 3,
    uid: "0",
    bid: "0",
    template: "another",
  },
];
