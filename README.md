# Site Usabilidade

Projeto desenvolvido conforme atividade proposta na disciplina de Usabilidade e 
Acessibilidade Multimídia no quarto semestre do curso Tecnólogo em Análise e
Desenvolvimento de Sistemas (TADS) da [Univel](https://univel.br/home). 

## Objetivo

Criar um website utilizando os conceitos de usabilidade e acessibilidade, seguindo as regras abaixo:
1. Utilizar o layout passado pela [imagem em anexo](.github/readme/layout.jpg), pois o mesmo deve ser respeitado.
2. Deve ter recursos de acessibilidade.
3. Deve estar funcional a parte de redes sociais.
4. Deve estar funcionando a parte de catálogo, abrindo a foto etc.
5. Deve ter menu, banner, catálogo de fotos e rodapé.
6. Deve ter o recurso de pesquisa, logo da sua empresa.
7. Deve ter o nome da sua empresa/negócio. 
8. Deve conter no catalogo: novidades, ofertas e mais vendidos.
10. No catálogo deve ter no mínimo 9 imagens, busquem da sua preferência.

## Setup

1. Instale as dependências:
```bash
npm install
# ou
yarn install
```

Copie o arquivo `default.env` e renomeie para `.env.local`. Neste arquivo, informe as keys do [Algolia](https://www.algolia.com/).
```dotenv
NEXT_PUBLIC_ALGOLIA_APP_ID=appid
NEXT_PUBLIC_ALGOLIA_API_KEY=apikey
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.
