const Patient = require('../../models/patient')

 const createPatient = async (request, response) => {
    try {

        let result = await Patient.findOne({
            where: {
                cpf: request.body.cpf
            }
        })

        if(result){
            return response.status(409).json({msg: "CPF já cadastrado."})
        }

        let  newPatient = {
            name: request.body.name,
            gender: request.body.gender,
            birthday: request.body.birthday,
            cpf: request.body.cpf,
            phone: request.body.phone,
            emergencyContact: request.body.emergencyContact,
            allergy: request.body.allergy,
            specificCare: request.body.specificCare,
            healthInsurance: request.body.healthInsurance,
            status: request.body.status,
            servicesPerdomed: '0'

        }
        
        newPatient = await Patient.create(newPatient)  

        return response.status(201).json({
            msg: `Cadastro ${newPatient.name} efetuado com sucesso!`,
            Dados: newPatient})
    } catch (error) {
        return response.status(400).json({msg: "Dados inválidos ou mal formados."})
    }
    
}

module.exports = createPatient