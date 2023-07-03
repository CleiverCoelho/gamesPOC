export type User = {
    id: number;
    name: string;
    age: number;
}

export type CreateUser = Omit<User, 'id'>

export type Game = {
    id: number;
    title: string;
    descriprion: string;
    votes: number;
}

export type Vote = {
    id: number;
    userId: number;
    gameId: number;
}

export type Ranking = {
    title: number;
    totalVotes: number;
}

export type createVoteType = Omit<Vote, 'id'>;

export type RequestError = {
    status: number;
    data: object | null;
    errors: string[];
    name: string;
    message: string;
};

export type UpdateGameDescription = {
    newDescription: string,
    gameId: number
}

export type DeleteVote = {
    reason: string
    voteId: number
}
