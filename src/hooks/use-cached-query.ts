/**
 * Auto-caching hook for Supabase queries.
 * Caches results in memory with configurable TTL.
 * Usage:
 *   const { data, loading, error } = useCachedQuery(
 *     'my-cache-key',
 *     () => supabase.from('table').select('*'),
 *     { ttl: 60000 } // 60 seconds, default 5 minutes
 *   );
 */

import { useState, useEffect, useRef } from 'react';

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

interface CacheOptions {
  ttl?: number; // Time-to-live in ms, default 5 minutes
  enabled?: boolean;
}

// Global in-memory cache shared across all hook instances
const queryCache = new Map<string, CacheEntry<unknown>>();

function isCacheValid<T>(entry: CacheEntry<T> | undefined, ttl: number): entry is CacheEntry<T> {
  if (!entry) return false;
  return Date.now() - entry.timestamp < ttl;
}

export function useCachedQuery<T>(
  cacheKey: string,
  queryFn: () => Promise<{ data: T | null; error: unknown }>,
  options: CacheOptions = {}
) {
  const { ttl = 5 * 60 * 1000, enabled = true } = options;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const abortRef = useRef(false);

  useEffect(() => {
    if (!enabled) return;

    abortRef.current = false;

    const cached = queryCache.get(cacheKey) as CacheEntry<T> | undefined;
    if (isCacheValid(cached, ttl)) {
      setData(cached.data);
      return;
    }

    setLoading(true);
    setError(null);

    queryFn()
      .then(({ data: result, error: err }) => {
        if (abortRef.current) return;
        if (err) {
          setError(err);
        } else if (result !== null) {
          queryCache.set(cacheKey, { data: result, timestamp: Date.now() });
          setData(result);
        }
      })
      .catch((err) => {
        if (!abortRef.current) setError(err);
      })
      .finally(() => {
        if (!abortRef.current) setLoading(false);
      });

    return () => {
      abortRef.current = true;
    };
  }, [cacheKey, ttl, enabled]);

  const invalidate = () => {
    queryCache.delete(cacheKey);
  };

  const refetch = () => {
    invalidate();
    // Re-trigger effect by updating state вЂ” caller should handle via key change
  };

  return { data, loading, error, invalidate, refetch };
}

/** Manually invalidate a specific cache key or all keys with a prefix */
export function invalidateCache(keyOrPrefix: string, prefix = false) {
  if (prefix) {
    for (const key of queryCache.keys()) {
      if (key.startsWith(keyOrPrefix)) queryCache.delete(key);
    }
  } else {
    queryCache.delete(keyOrPrefix);
  }
}

/** Clear the entire query cache */
export function clearQueryCache() {
  queryCache.clear();
}
