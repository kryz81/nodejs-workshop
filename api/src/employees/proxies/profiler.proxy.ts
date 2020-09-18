const PROFILER_URL = '100.20.30.40/api';

export function informProfiler(userData) {
  console.log(`Sending user data to Profiler...${PROFILER_URL}`, userData);
}
