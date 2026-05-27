import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;

const hasRedis = Boolean(url && token);

if (!hasRedis) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      '[rateLimiter] UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN must be set in production — rate limiting cannot be disabled'
    );
  }
  console.warn('[rateLimiter] Redis not configured — rate limiting disabled (dev/test only)');
}

const redis = hasRedis ? new Redis({ url: url!, token: token! }) : null;

/** 5 requests / 10s per user when Upstash is configured; otherwise no limit (dev without Redis). */
export const ratelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, '10 s'),
    })
  : {
      limit: async () => ({ success: true, limit: 5, remaining: 5, reset: 0 }),
    };
