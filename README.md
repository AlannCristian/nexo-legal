# Nexo Legal

Landing page de um escritório de advocacia fictício, desenvolvida para
estudo e portfólio. O projeto apresenta áreas de atuação, etapas de
atendimento, depoimentos fictícios, perguntas frequentes e contato
demonstrativo.

## Tecnologias

- Next.js com App Router
- React e TypeScript
- Tailwind CSS
- Lucide React

## Como rodar localmente

Com Node.js instalado, abra o terminal na raiz do projeto:

```bash
npm ci
npm run dev
```

Acesse http://localhost:3000 ou use o endereço indicado no terminal.
No PowerShell do Windows, use `npm.cmd` se o script `npm.ps1` estiver
bloqueado.

## Como testar a versão de produção

```bash
npm run build
npm start
```

## Estrutura

| Pasta         | Responsabilidade                                                    |
| ------------- | ------------------------------------------------------------------- |
| `app/`        | Página inicial, layout, fontes, estilos e metadados                 |
| `components/` | Seções da página e componentes interativos                          |
| `lib/`        | Conteúdo das áreas de atuação, etapas, depoimentos, navegação e FAQ |
| `actions/`    | Validação do formulário no servidor                                 |

## Contato demonstrativo

O formulário usa uma Server Action para validar os dados e simular
o envio. Para testar, use dados fictícios. O botão de WhatsApp exibe
uma explicação dentro da página.
