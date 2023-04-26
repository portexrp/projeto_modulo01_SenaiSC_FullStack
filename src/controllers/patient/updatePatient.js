const Patient = require('../../models/patient')

const updatePatient = async (request, response) => {

    try {
        const verifyPatient = await Patient.findByPk(request.params.id)

        if (!verifyPatient) {
            return response.status(404).json({
                msg: "Usuário não encontrado."
            })
        }

        let result = await Patient.findOne({
            where: {
                cpf: request.body.cpf
            }
        })

        if(result){
            return response.status(409).json({msg: "CPF já cadastrado."})
        }

        verifyPatient.name = request.body.name || verifyPatient.name
        verifyPatient.gender = request.body.gender || verifyPatient.gender
        verifyPatient.birthday = request.body.birthday || verifyPatient.birthday
        verifyPatient.cpf = request.body.cpf || verifyPatient.cpf
        verifyPatient.phone = request.body.phone || verifyPatient.phone
        verifyPatient.emergencyContact = request.body.emergencyContact || verifyPatient.emergencyContact
        verifyPatient.allergy = request.body.allergy || verifyPatient.allergy
        verifyPatient.specificCare = request.body.specificCare || verifyPatient.specificCare
        verifyPatient.healthInsurance = request.body.healthInsurance || verifyPatient.healthInsurance
        verifyPatient.status = request.body.status || verifyPatient.status

        const updatedPatient = await verifyPatient.save()

        return response.status(200).json({
            msg: "dados atualizado com sucesso",
            dados: updatedPatient
        })

    } catch (error) {
        return response.status(400).json({
            msg: "Não pudemos atender sua solicitação"
        })
    }
}

module.exports = updatePatient