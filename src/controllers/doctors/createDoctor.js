const Doctor = require('../../models/doctor')

 const createDoctor = async (request, response) => {
    try {

        let result = await Doctor.findOne({
            where: {
                cpf: request.body.cpf
            }
        })

        if(result){
            return response.status(409).json({msg: "CPF já cadastrado."})
        }

        let  newDoctor = {
            name: request.body.name,
            gender: request.body.gender,
            birthday: request.body.birthday,
            cpf: request.body.cpf,
            phone: request.body.phone,
            college: request.body.college,
            crm: request.body.crm,
            specialization: request.body.specialization,
            status: "ativo",
            servicesPerdomed: '0'

        }
        
        newDoctor = await Doctor.create(newDoctor)  

        return response.status(201).json({
            msg: `Cadastro ${newDoctor.name} efetuado com sucesso!`,
            dados: newDoctor
         })
    } catch (error) {
        return response.status(400).json({msg: "Dados inválidos ou mal formados."})
    }
    
}

module.exports = createDoctor