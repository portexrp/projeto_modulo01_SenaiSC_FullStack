
# Hospital JSPost Express

Projeto desenvolvido para automatizar o cadastro da equipe de atendimento e a evolução do paciente, sendo possível acompanhar o status de atendimento, doenças anteriores, cuidados específicos, e alguma alergia caso exista.
No cadastro de peciente também existe o cadastro de um telefone de emergência, caso necessário o contato com algum responsável ou acompanhante.

O sistema foi projetado para atender as demandas internas do Hospital JSPost Express, referência no atendimento rápido e humanizado.
## Documentação da API

#### Cadastro de Pacientes

```http
  POST /api/pacientes
```
No corpo da request, informar objeto json com os campos

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `String` | **Obrigatório**. Nome  |
| `gender` | `String` |  Gênero |
| `birthday` | `String` | **Obrigatório**. Data Nascimento formato(01/01/2000) |
| `cpf` | `String` | **Obrigatório**. CPF |
| `phone` | `String` |  Telefone |
| `emergencyContact` | `String` | **Obrigatório**. Contato de Emergência  |
| `allergy` | `String` |  Alergias |
| `specificCare` | `String` |  Cuidados específicos |
| `healthInsurance` | `String` |  Convênio |
| `status` | `ENUM` |  values: ['aguardando_atendimento', 'em_atendimento', 'atendido', 'nao_atendido'] - defaultValue: 'nao_atendido' |
| `servicesPerdomed` | `String` |  defaultValue: '0' |

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

No corpo da request, informar objeto json com os campos

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `INTEGER` | **Obrigatório**. O ID do Paciente que você quer atualizar |
| `name` | `String` |  Nome  |
| `gender` | `String` |  Gênero |
| `birthday` | `String` |  Data Nascimento formato(01/01/2000) |
| `cpf` | `String` |  CPF |
| `phone` | `String` |  Telefone |
| `emergencyContact` | `String` | Contato de Emergência  |
| `allergy` | `String` |  Alergias |
| `specificCare` | `String` |  Cuidados específicos |
| `healthInsurance` | `String` |  Convênio |
| `status` | `ENUM` |  values: ['aguardando_atendimento', 'em_atendimento', 'atendido', 'nao_atendido'] - defaultValue: 'nao_atendido' |
| `servicesPerdomed` | `String` |  defaultValue: '0' |

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

No corpo da request, informar objeto json com os campos

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `INTEGER` | **Obrigatório**. O ID do Paciente que você quer atualizar |
| `status` | `ENUM` |  values: ['aguardando_atendimento', 'em_atendimento', 'atendido', 'nao_atendido'] - defaultValue: 'nao_atendido' |


#### Atualiza Status de um paciente só serão aceitos as Strings descrita no status, caso seja enviado um status diferente o sistema irá retornar um erro.


--------------------------------


#### Recebe todos os pacientes cadastrados na base, sendo possível filtrar via "query params". 
Exemplo: /api/pacientes?status=atendido
O sistema irá listar todos os pacientes que se encaixe no status passado via query params.

```http
  GET /api/pacientes/
```


Response: 

HTTP Status Code 200 (OK), com a lista de pacientes.

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
No corpo da request, informar objeto json com os campos

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `String` | **Obrigatório**. Nome  |
| `gender` | `String` |  Gênero |
| `birthday` | `String` | **Obrigatório**. Data Nascimento formato(01/01/2000) |
| `cpf` | `String` | **Obrigatório**. CPF |
| `phone` | `String` |  Telefone |
| `college` | `String` | **Obrigatório**. Instituição de ensino superior  |
| `crm` | `String` | **Obrigatório**. CRM |
| `specialization` | `ENUM` |  values: ['clínico_geral', 'anestesista', 'dermatologia', 'ginecologia', 'neurologia', 'pediatria', 'psiquiatria', 'ortopedia'] defaultValue: clínico_geral' |
| `status` | `ENUM` |  values: ['ativo','inativo'],    defaultValue: 'ativo' |
| `servicesPerdomed` | `String` |  defaultValue: '0' |

```http

```http
Exemplo:

{
	"name": "Reinaldo Porto",
	"gender": "Masculino",
	"birthday": "01/12/1988",
	"cpf":"12345678901",
	"phone":"16-90000 0000",
	"college":"USP",
	"crm":"123456"	
}

Retorno:

{
	"msg": "Cadastro Reinaldo Porto efetuado com sucesso!",
	"dados": {
		"specialization": "clínico_geral",
		"id": 3,
		"name": "Reinaldo Porto",
		"gender": "Masculino",
		"birthday": "1988-01-12",
		"cpf": "12345678901",
		"phone": "16-90000 0000",
		"college": "USP",
		"crm": "123456",
		"status": "ativo",
		"servicesPerdomed": "0",
		"updatedAt": "2023-04-24T23:09:11.851Z",
		"createdAt": "2023-04-24T23:09:11.851Z"
	}
}


```
Response: 

HTTP Status Code 201 (CREATED) 

HTTP Status Code 400 (Bad Request)

HTTP Status Code 409 (Conflict) em caso de CPF já cadastrado

--------------------------------

#### Atualiza um médico

```http
  PUT /api/medicos/{id}
```
No corpo da request, informar objeto json com os campos
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name` | `String` |  Nome  |
| `gender` | `String` |  Gênero |
| `birthday` | `String` |  Data Nascimento formato(01/01/2000) |
| `cpf` | `String` |  CPF |
| `phone` | `String` |  Telefone |
| `college` | `String` |  Instituição de ensino superior  |
| `crm` | `String` |  CRM |
| `specialization` | `ENUM` |  values: ['clínico_geral', 'anestesista', 'dermatologia', 'ginecologia', 'neurologia', 'pediatria', 'psiquiatria', 'ortopedia'] defaultValue: clínico_geral' |
| `status` | `ENUM` |  values: ['ativo','inativo'],    defaultValue: 'ativo' |
| `servicesPerdomed` | `String` |  defaultValue: '0' |

Response: 

HTTP Status Code 200 (OK)

HTTP Status Code 400 (Bad Request)

HTTP Status Code 404 (Not Found) em caso de não ser encontrado registro com o código informado

#### O sistema irá atualizar apenas os campos enviados via body no formado de JSON


--------------------------------


#### Atualiza Status de um medicos

```http
  PUT /api/medicos/{id}/status=""
```

No corpo da request, informar objeto json com os campos

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `INTEGER` | **Obrigatório**. O ID do Paciente que você quer atualizar |
| `status` | `ENUM` |  values: ['ativo', 'inativo'] - defaultValue: 'ativo' |


#### Atualiza Status de um medico só serão aceitos as Strings descrita no status, caso seja enviado um status diferente o sistema irá retornar um erro.


--------------------------------


#### Recebe todos os medicos cadastrados na base, sendo possível filtrar via "query params". 
Exemplo: /api/medicos?status=ativo
O sistema irá listar todos os medicos que se encaixe no status passado via query params(ativo ou inativo).

```http
  GET /api/medicos/
```


Response: 

HTTP Status Code 200 (OK), com a lista de medicos.


--------------------------------

#### Exclusão de médico

```http
  GET /api/medicos/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `INTEGER` | **Obrigatório**. O ID do Médico que você quer deletar|

Response:

HTTP Status Code 204 (No Content) em caso de sucesso, sem necessidade de response body.

HTTP Status Code 404 (Not Found) em caso de requisição com código não existente na base de dados.


--------------------------------------

#### Cadastro de Enfermeiro(a)

```http
  POST /api/enfermeiros
```
No corpo da request, informar objeto json com os campos

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `String` | **Obrigatório**. Nome  |
| `gender` | `String` |  Gênero |
| `birthday` | `String` | **Obrigatório**. Data Nascimento formato(01/01/2000) |
| `cpf` | `String` | **Obrigatório**. CPF |
| `phone` | `String` |  Telefone |
| `college` | `String` | **Obrigatório**. Instituição de ensino superior  |
| `cofen` | `String` | **Obrigatório**. Coren |


```http

```http
Exemplo:

{
	"name": "Reinaldo Porto",
	"gender": "Masculino",
	"birthday": "01/12/1988",
	"cpf":"12345678901",
	"phone":"16-90000 0000",
	"college":"USP",
	"cofen":"123456"	
}

Retorno:

{
	"msg": "Cadastro Reinaldo Porto efetuado com sucesso!",
	"dados": {    		
		"id": 3,
		"name": "Reinaldo Porto",
		"gender": "Masculino",
		"birthday": "1988-01-12",
		"cpf": "12345678901",
		"phone": "16-90000 0000",
		"college": "USP",
		"cofen": "123456",		
		"updatedAt": "2023-04-24T23:09:29.851Z",
		"createdAt": "2023-04-24T23:09:29.851Z"
	}
}


```
Response: 

HTTP Status Code 201 (CREATED) 

HTTP Status Code 400 (Bad Request)

HTTP Status Code 409 (Conflict) em caso de CPF já cadastrado

--------------------------------

#### Atualiza um médico

```http
  PUT /api/enfermeiros/{id}
```
No corpo da request, informar objeto json com os campos
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name` | `String` |  Nome  |
| `gender` | `String` |  Gênero |
| `birthday` | `String` |  Data Nascimento formato(01/01/2000) |
| `cpf` | `String` |  CPF |
| `phone` | `String` |  Telefone |
| `college` | `String` | Instituição de ensino superior  |
| `cofen` | `String` |  Cofen |


Response: 

HTTP Status Code 200 (OK)

HTTP Status Code 400 (Bad Request)

HTTP Status Code 404 (Not Found) em caso de não ser encontrado registro com o código informado

#### O sistema irá atualizar apenas os campos enviados via body no formado de JSON


--------------------------------


#### Recebe todos os medicos cadastrados na base, sendo possível filtrar via "query params". 
Exemplo: /api/medicos?status=ativo
O sistema irá listar todos os medicos que se encaixe no status passado via query params(ativo ou inativo).

```http
  GET /api/enfermeiros/
```


Response: 

HTTP Status Code 200 (OK), com a lista de Enfermeiro(a).


--------------------------------

#### Exclusão de médico

```http
  GET /api/enfermeiros/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `INTEGER` | **Obrigatório**. O ID do Médico que você quer deletar|

Response:

HTTP Status Code 204 (No Content) em caso de sucesso, sem necessidade de response body.

HTTP Status Code 404 (Not Found) em caso de requisição com código não existente na base de dados.

--------------------------------------------

#### Realizar atendimento

```http
  POST /api/atendimentos
```

No corpo da request, informar objeto json com os campos de identificador do paciente e identificador do médico

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `patientId`      | `INTEGER` | **Obrigatório**. O ID do Paciente que você quer atualizar|
| `doctorId`      | `INTEGER` | **Obrigatório**. O ID do Médico que você quer atualizarr|
| `status`      | `String` | **Obrigatório**. Status do paciente que você quer atualizar|
