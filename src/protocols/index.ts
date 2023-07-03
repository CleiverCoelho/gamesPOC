export type User = {
    id: number;
    name: string;
    age: string;
}

export type Game = {
    id: number;
    title: string;
    descriprion: string;
    votes: number;
}

export type Vote = {
    id: number;
    userName: number;
    gameVote: number;
}