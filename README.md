
# Hospital JSPost Express

Projeto desenvolvido para automatizar o cadastro da equipe de atendimento e a evolução do paciente, sendo possível acompanhar o status de atendimento, doenças anteriores, cuidados específicos, e alguma alergia caso exista.
No cadastro de peciente também existe o cadastro de um telefone de emergência, caso necessário o contato com algum responsável ou acompanhante.

O sistema foi projetado para atender as demandas internas do Hospital JSPost Express, referência no atendimento rápido e humanizado.
## Documentação da API

#### Cadastro de Pacientes

```http
  POST /api/pacientes
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. Nome  |
| `gender` | `string` |  Gênero |
| `birthday` | `string` | **Obrigatório**. Data Nascimento formato(01/01/2000) |
| `cpf` | `string` | **Obrigatório**. CPF |
| `phone` | `string` |  Telefone |
| `emergencyContact` | `string` | **Obrigatório**. Contato de Emergência  |
| `allergy` | `string` |  Alergias |
| `specificCare` | `string` |  Cuidados específicos |
| `healthInsurance` | `string` |  Convênio |
| `status` | `ENUM` |  values: ['aguardando_atendimento', 'em_atendimento', 'atendido', 'nao_atendido'] - defaultValue: 'nao_atendido' |
| `servicesPerdomed` | `string` |  defaultValue: '0' |

```http
  Exemplo de uso:
  {
	"name": "Reinaldo Porto",
	"gender": "Masculino",
	"birthday": "01/12/1988",
	"cpf":"12345678901",
	"phone":"16-90000 0000",
	"emergencyContact":"Sandra C. Porto",
	"allergy":"none",
	"specificCare":"none",
	"healthInsurance":"SUS"	
}

Retorno:

{
	"msg": "Cadastro Reinaldo Porto efetuado com sucesso!",
	"Dados": {
		"status": "nao_atendido",
		"id": 5,
		"name": "Reinaldo Porto",
		"gender": "Masculino",
		"birthday": "1988-01-12",
		"cpf": "12345678901",
		"phone": "16-90000 0000",
		"emergencyContact": "Sandra C. Porto",
		"allergy": "none",
		"specificCare": "none",
		"healthInsurance": "SUS",
		"servicesPerdomed": "0",
		"updatedAt": "2023-04-23T14:32:40.666Z",
		"createdAt": "2023-04-23T14:32:40.666Z"
	}
}

```
Response: 

HTTP Status Code 201 (CREATED) 

HTTP Status Code 400 (Bad Request)

HTTP Status Code 409 (Conflict) em caso de CPF já cadastrado

--------------------------------

#### Atualiza um paciente

```http
  PUT /api/pacientes/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `INTEGER` | **Obrigatório**. O ID do Paciente que você quer atualizar |
| `name` | `string` |  Nome  |
| `gender` | `string` |  Gênero |
| `birthday` | `string` |  Data Nascimento formato(01/01/2000) |
| `cpf` | `string` |  CPF |
| `phone` | `string` |  Telefone |
| `emergencyContact` | `string` | Contato de Emergência  |
| `allergy` | `string` |  Alergias |
| `specificCare` | `string` |  Cuidados específicos |
| `healthInsurance` | `string` |  Convênio |
| `status` | `ENUM` |  values: ['aguardando_atendimento', 'em_atendimento', 'atendido', 'nao_atendido'] - defaultValue: 'nao_atendido' |
| `servicesPerdomed` | `string` |  defaultValue: '0' |

Response: 

HTTP Status Code 200 (OK)

HTTP Status Code 400 (Bad Request)

HTTP Status Code 404 (Not Found) em caso de não ser encontrado registro com o código informado

#### O sistema irá atualizar apenas os campos enviados via body no formado de JSON


--------------------------------


#### Atualiza Status de um paciente

```http
  PUT /api/pacientes/{id}/status=""
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `INTEGER` | **Obrigatório**. O ID do Paciente que você quer atualizar |
| `status` | `ENUM` |  values: ['aguardando_atendimento', 'em_atendimento', 'atendido', 'nao_atendido'] - defaultValue: 'nao_atendido' |


#### Atualiza Status de um paciente só serão aceitos as strings descrita no status, caso seja enviado um status diferente o sistema irá retornar um erro.


--------------------------------


#### Recebe todos os pacientes cadastrados na base, sendo possível filtrar via "query params". 
Exemplo: /api/pacientes?status=atendido
O sistema irá listar todos os pacientes que se encaixe no status passado via query params.

```http
  GET /api/pacientes/
```


Response: 

HTTP Status Code 200 (OK), com a lista de pacientes.

--------------------------------

```http
  GET /api/pacientes/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `INTEGER` | **Obrigatório**. O ID do Paciente que você quer listar|

Response: 

HTTP Status Code 200 (OK), com os dados do paciente.

HTTP Status Code 404 (Not Found) em caso de não ser encontrado registro com o código informado


--------------------------------

#### Exclusão de Paciente

```http
  GET /api/pacientes/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `INTEGER` | **Obrigatório**. O ID do Paciente que você quer deletar|

Response:

HTTP Status Code 204 (No Content) em caso de sucesso, sem necessidade de response body.

HTTP Status Code 404 (Not Found) em caso de requisição com código não existente na base de dados.

-----------------------------------------------

#### Cadastro de Medicos

```http
  POST /api/medicos
```
