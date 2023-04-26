const Nurse = require('../../models/nurse')

 const createNurse = async (request, response) => {
    try {
    console.log(request.body)
        let result = await Nurse.findOne({
            where: {
                cpf: request.body.cpf
            }
        })

        if(result){
            return response.status(409).json({msg: "CPF já cadastrado."})
        }

        let  newNurse = {
            name: request.body.name,
            gender: request.body.gender,
            birthday: request.body.birthday,
            cpf: request.body.cpf,
            phone: request.body.phone,
            college: request.body.college,
            cofen: request.body.cofen
            

        }
        
        newNurse = await Nurse.create(newNurse)  

        return response.status(201).json({
            msg: `Cadastro ${newNurse.name} efetuado com sucesso!`,
            dados: newNurse
         })
    } catch (error) {
        return response.status(400).json({msg: "Dados inválidos ou mal formados."})
    }
    
}

module.exports = createNurse