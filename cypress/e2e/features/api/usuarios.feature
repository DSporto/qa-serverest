# language: pt

Funcionalidade: Gerenciamento de usuários via API

  Cenário: Cadastrar um novo usuário com sucesso
    Dado que possuo os dados de um novo usuário
    Quando envio uma requisição para cadastrar o usuário
    Então a API deve retornar o status 201
    E deve retornar o identificador do usuário criado

 Cenário: Buscar usuário cadastrado por ID
   Dado que existe um usuário cadastrado via API
   Quando envio uma requisição para buscar o usuário pelo ID
   Então a API deve retornar o status 200
   E deve retornar os dados do usuário cadastrado  