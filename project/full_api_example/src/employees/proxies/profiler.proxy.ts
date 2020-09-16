import { PROFILER_URL } from '../../config';

export function informProfiler(userData) {
  console.log(`Sending user data to Profiler...${PROFILER_URL}`, userData);
}
