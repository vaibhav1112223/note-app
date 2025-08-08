import {Ratelimit} from "@upstash/ratelimit"
import {Redis} from "@upstash/redis"
import dotenv from "dotenv"
dotenv.config()
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// Allow 5 requests per 10 seconds per IP
export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(10, '10s'),
  analytics: true,
  prefix: 'ratelimit',
});