# gamesPOC
## Rotas para user, game, vote
### o CRUD está implementado na Rota vote

# Rota USER
## POST: /user
### Body: { "name": "cleiver", "age": 21 }
## GET: /user

# Rota Game
## GET: /game
## PUT: /game
### Body: { "newDescription": "descrição clubista inserida", "gameId": 1 }
#### Cuidado: Ao modificar a descricao de um jogo, o seu voto pode ser deletado

# Rota Vote
## GET: /vote
## GET: /vote/ranking
## POST: /vote
### Body: { "userId": 1, "gameId": 1 }
## DELETE: /vote
### Body: { "reason": "clubismo", "voteId": 1 }
#### Unica justificativa para deletar um voto é clubismo
#### voce pode desconfiar de clubismo se a descricao de um jogo estiver "manipulada"

###### (Não há verificação de manipulação de descricoes ou não. Contamos com a boa fé dos usuarios hehe)
