# Projeto Login — Sistema de Autenticação

Projeto desenvolvido para a atividade avaliativa de Git e GitHub.

## Descrição
Página de login com tema escuro, validação de campos via JavaScript,
painel administrativo (dashboard) e tela de cadastro de usuários.

## Tecnologias
- HTML5
- CSS3
- JavaScript (ES6)
- Git e GitHub

## Estrutura de arquivos
| Arquivo | Função |
|---|---|
| index.html | Tela de login |
| style.css | Estilos globais (tema escuro) |
| script.js | Validação do formulário de login |
| dashboard.html | Painel principal |
| dashboard.css | Estilos do painel |
| cadastro.html | Formulário de cadastro |
| cadastro.js | Validação do cadastro |

## Como testar
Credenciais de teste na tela de login:
- Usuário: `adm`
- Senha: `123`

## Estratégia de branches
| Tipo | Nome | Base | Finalidade |
|---|---|---|---|
| Principal | main | — | Código estável e publicado |
| Desenvolvimento | develop | main | Desenvolvimento ativo |
| Feature | feature/validacao-campos | develop | Validação do login |
| Feature | feature/dashboard | develop | Painel principal |
| Feature | feature/cadastro-usuario | develop | Tela de cadastro |
| Hotfix | hotfix/erro-html | main | Correção estrutural no HTML |
| Release | release/v1.1.0 | develop | Preparação da versão 1.1.0 |

## Versão
v1.1.0

## Autor
Matheus Luna — 4º semestre 
