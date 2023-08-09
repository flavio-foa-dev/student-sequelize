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
-




Comandos	Descrição
sequelize db:migrate	executa todas as migrações pendentes para atualizar o banco de dados.
sequelize db:migrate:schema:timestamps:add	Atualiza uma tabela de migração para ter marcação de data/hora
sequelize db:migrate:status	Exibe o status de todas as migrações
sequelize db:migrate:undo	reverte a migração mais recente do banco de dados.
sequelize db:migrate:undo:all	Reverte todas as migrações
sequelize db:seed	Inicializa um seeder específico
sequelize db:seed:undo	Deleta arquivo do banco de dados
sequelize db:seed:all	Inicializa todos os seeders
sequelize db:seed:undo:all	Deleta todos os dados do banco de dados
sequelize db:create	Cria um banco com uma configuração específica
sequelize db:drop	exclui o banco de dados especificado na configuração.
sequelize init	Inicializa um projeto
sequelize init:config	Inicializa as configurações
sequelize init:migrations	Inicializa as migrações
sequelize init:models	Inicializa as models
sequelize init:seeders	Inicializa os seeders
sequelize migration:generate [alias: migration:create]	Gera um novo arquivo de migração
sequelize model:generate [alias: model:create]	Gera uma model e sua migração
sequelize seed:generate	Gera um novo arquivo de seed




queries de SELECT, a ordem lógica é a seguinte:

FROM: pega as tabelas onde estão os dados

WHERE: filtra os dados

GROUP BY: agrega os dados

HAVING: filtra os dados agregados

SELECT: retorna os resultados

ORDER BY: ordena os resultados

LIMIT: limita a quantidade de resultados

# Associations
Pessoas    Turmas  Matriculas
A.hasmany(B)
Pessoa.associate = function(models)
Pessoas.hasMany(model.Turmas, {foreignkey: 'id-pessoa'})// padrao ele cria uma coluna PessoaId caso nao passe o paremetro
Pessoas.hasMany(model.Matriculas) // padrao ele cria uma coluna MatriculaId

- belongsTo = pertence a, e adicionado no outro lado da relacao
- Turmas.belongsTo(modelsPessoas)
- Matriculas.belongsTo(modelsPessoas)


- Equipe.hasMany(Atleta); uma equipe tem muitos atleta
- Atleta.belongsTo(Equipe); um atleta pertence a uma equipe

- estudante_id:{
-  allownull: false,
-  type: Sequelize.Integer,
-  references: { model: 'Pessoas, Key: "id"}
- }

- router.get('/pessoas/:estudante_id/matricula/matricula_id', function(req, res) {})
- router.get('/pessoas/:estudante_id/matricula, function(req, res) {})
-
