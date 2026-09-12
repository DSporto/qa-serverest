# language: pt

Funcionalidade: Login de usuário

  Cenário: Realizar login com sucesso
    Dado que possuo um usuário cadastrado
    E que estou na página de login
    Quando informo credenciais válidas
    E clico no botão entrar
    Então o login deve ser realizado com sucesso

  Cenário: Não realizar login com credenciais inválidas
    Dado que estou na página de login
    Quando informo credenciais inválidas
    E clico no botão entrar
    Então deve ser exibida uma mensagem de credenciais inválidas