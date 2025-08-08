import { ratelimit } from '../config/upstash.js';

export const rateLimitMiddleware = async (req, res, next) => {
  try{const ip = req.ip || 'anonymous';

  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return res.status(429).json({ error: 'Too many requests' });
  }

  next();
}catch(error){
console.log("rate limit error",error)
next(error)
  }
};