# language: pt

Funcionalidade: Autenticação de usuário via API

  Cenário: Realizar login via API com sucesso
    Dado que existe um usuário válido para autenticação
    Quando envio uma requisição de login com credenciais válidas
    Então a API de login deve retornar o status 200
    E deve retornar um token de autorização