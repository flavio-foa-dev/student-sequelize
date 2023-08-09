# student-sequelize

- projeto do zero com Sequelize;
- docker-compose
- mysql;
- Express;
- modelos e arquivos de migração via npx sequelize-cli
- migrações com ORMs
- migrações para criação de tabelas no banco
- seed
- Como funciona o modelo MVC
- camada de controle
- Sequelize para consultar o banco
- rotas
- HTTP GET
- Sequelize para as operações de CRUD
- requisição HTTP
- Enviar dados através do corpo da requisição HTTP
- rotas a cada método do controlador
- Interpretar o diagrama de banco
- Identificar os tipos de relação do projeto
- Associar tabelas através de métodos do Sequelize
- Referenciar tabelas associadas
- Migrar tabelas associadas
- Popular tabelas associadas
- Adicionar a opção "Paranoid" para fazer a exclusão softDelete
- migrações para adicionar colunas às tabelas
- coluna deletedAt para utilizar o recurso de exclusão suave
- Restaurar registros deletados via exclusão suave, utilizando o .restore()
- Definir um escopo de modelo padrão (defaultScope)
- Definir outros escopos adicionais, conforme necessidade do projeto
- Utilizar um escopo adicional com o método .findAll()
- Validar dados de entrada utilizando validadores próprios do Sequelize
- Refinar e customizar validações de campos utilizando funções e JS puro
- O que são escopos de associação
- Como definir um novo escopo de associação
- Utilizar métodos próprios/mixins em tabelas associadas
- Adicionar um filtro de busca via parâmetros de query
- Utilizar operadores para fazer operações com dados
- Retornar resultados filtrados através de operadores
- Filtrar e enumerar registros com métodos "finders"
- Ordenar os resultados com a opção "order"
- Agrupar registros com "group"
- Passar comandos do SQL dentro do Sequelize com Sequelize.literal()
- Criar métodos para atualizar mais de uma tabela
- Adicionar transações às operações de banco via Sequelize
- Criar métodos para atualizar mais de uma tabela
- Adicionar transações às operações de banco via Sequelize
- camada de serviços
- Transferir a interface com a database do controlador para o serviço
- controlador para acessar os serviços
- Criar serviços específicos que herdem métodos da classe principal
- Organizar os serviços criando um ponto de entrada (index.js)
- Criar métodos específicos para um serviço/modelo
- Passar parâmetros de controladores para serviços
- Conectar serviços entre si
- efatorar a aplicação para separar controladores e serviços




queries de SELECT, a ordem lógica é a seguinte:

FROM: pega as tabelas onde estão os dados

WHERE: filtra os dados

GROUP BY: agrega os dados

HAVING: filtra os dados agregados

SELECT: retorna os resultados

ORDER BY: ordena os resultados

LIMIT: limita a quantidade de resultados