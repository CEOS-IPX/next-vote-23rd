export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REISSUE: "/auth/reissue",
    LOGOUT: "/auth/logout",
  },

  VOTES: {
    PART_LEADER: "/votes/part-leader",
    PART_LEADER_RESULT: "/votes/part-leader/result",
    DEMO_DAY: "/votes/demo-day",
    DEMO_DAY_RESULT: "/votes/demo-day/result",
  },
} as const;
