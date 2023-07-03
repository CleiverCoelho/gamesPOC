--
-- PostgreSQL database dump
--

-- Dumped from database version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: games; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.games (
    id integer NOT NULL,
    title text NOT NULL,
    description text
);


--
-- Name: games_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.games_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: games_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.games_id_seq OWNED BY public.games.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    age integer NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: vote; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.vote (
    id integer NOT NULL,
    "userName" integer NOT NULL,
    "gameVote" integer NOT NULL
);


--
-- Name: vote_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.vote_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: vote_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.vote_id_seq OWNED BY public.vote.id;


--
-- Name: games id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.games ALTER COLUMN id SET DEFAULT nextval('public.games_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: vote id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vote ALTER COLUMN id SET DEFAULT nextval('public.vote_id_seq'::regclass);


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.games VALUES (2, 'Counter Strike', 'FPS fallen professor gigante');
INSERT INTO public.games VALUES (3, 'PUBG', 'Battlegrounds netenho e tecnosh');
INSERT INTO public.games VALUES (4, 'Call Of Duty', 'O melhor foi o Ghost mas essa conversa fica pra outra hora');
INSERT INTO public.games VALUES (1, 'Valorant', 'o melhor e maior jogo de fps de todos os tempos sem clubismo');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'cleiver', 20);
INSERT INTO public.users VALUES (2, 'joao', 22);
INSERT INTO public.users VALUES (3, 'pedro', 30);
INSERT INTO public.users VALUES (4, 'marco', 28);
INSERT INTO public.users VALUES (5, 'maria', 22);
INSERT INTO public.users VALUES (6, 'ana', 33);
INSERT INTO public.users VALUES (7, 'thiago', 27);


--
-- Data for Name: vote; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.vote VALUES (1, 1, 1);
INSERT INTO public.vote VALUES (2, 2, 1);
INSERT INTO public.vote VALUES (3, 2, 2);
INSERT INTO public.vote VALUES (4, 4, 2);
INSERT INTO public.vote VALUES (5, 5, 3);
INSERT INTO public.vote VALUES (6, 6, 4);
INSERT INTO public.vote VALUES (7, 3, 1);
INSERT INTO public.vote VALUES (8, 3, 3);
INSERT INTO public.vote VALUES (9, 4, 1);
INSERT INTO public.vote VALUES (10, 7, 2);


--
-- Name: games_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.games_id_seq', 4, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 7, true);


--
-- Name: vote_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.vote_id_seq', 10, true);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: vote vote_gameVote_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vote
    ADD CONSTRAINT "vote_gameVote_fkey" FOREIGN KEY ("gameVote") REFERENCES public.games(id);


--
-- Name: vote vote_userName_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vote
    ADD CONSTRAINT "vote_userName_fkey" FOREIGN KEY ("userName") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

