# language: pt

Funcionalidade: Cadastro de usuário

  Cenário: Cadastrar um novo usuário com sucesso
    Dado que estou na página de cadastro
    Quando preencho os dados de um novo usuário
    E clico no botão cadastrar
    Então o cadastro deve ser realizado com sucesso