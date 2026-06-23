import { api } from "@/lib/api";
import { API_ENDPOINTS } from "@/constants/endpoint";

type VotePartLeaderResponse = {
  success: boolean;
  data: { closed: boolean } | null;
  error: { status: number; code: string; message: string } | null;
};

export async function votePartLeader(name: string): Promise<VotePartLeaderResponse> {
  const { data } = await api.post<VotePartLeaderResponse>(
    API_ENDPOINTS.VOTES.PART_LEADER,
    { name },
  );
  return data;
}

type Ranking = {
  rank: number;
  name: string;
  votes: number;
};

type PartLeaderResultResponse = {
  success: boolean;
  data: {
    closed: boolean;
    totalVotes: number;
    part: string;
    rankings: Ranking[];
  } | null;
  error: { status: number; code: string; message: string } | null;
};

type VoteDemoDayResponse = {
  success: boolean;
  data: { closed: boolean } | null;
  error: { status: number; code: string; message: string } | null;
};

export async function voteDemoDay(team: string): Promise<VoteDemoDayResponse> {
  const { data } = await api.post<VoteDemoDayResponse>(
    API_ENDPOINTS.VOTES.DEMO_DAY,
    { team },
  );
  return data;
}

export async function getPartLeaderResult(part: string): Promise<PartLeaderResultResponse> {
  const { data } = await api.get<PartLeaderResultResponse>(
    `${API_ENDPOINTS.VOTES.PART_LEADER_RESULT}?part=${part}`,
  );
  return data;
}

type DemoDayRanking = {
  rank: number;
  team: string;
  votes: number;
};

type DemoDayResultResponse = {
  success: boolean;
  data: {
    closed: boolean;
    totalVotes: number;
    rankings: DemoDayRanking[];
  } | null;
  error: { status: number; code: string; message: string } | null;
};

export async function getDemoDayResult(): Promise<DemoDayResultResponse> {
  const { data } = await api.get<DemoDayResultResponse>(
    API_ENDPOINTS.VOTES.DEMO_DAY_RESULT,
  );
  return data;
}
