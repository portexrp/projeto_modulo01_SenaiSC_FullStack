const Doctor = require('../../models/doctor')

const updateDoctor = async (request, response) => {

    try {
        const verifyDoctor = await Doctor.findByPk(request.params.id)

        if (!verifyDoctor) {
            return response.status(404).json({
                msg: "Usuário não encontrado."
            })
        }

        let result = await Doctor.findOne({
            where: {
                cpf: request.body.cpf
            }
        })

        if(result){
            return response.status(409).json({msg: "CPF já cadastrado."})
        }

        verifyDoctor.name = request.body.name || verifyDoctor.name
        verifyDoctor.gender = request.body.gender || verifyDoctor.gender
        verifyDoctor.birthday = request.body.birthday || verifyDoctor.birthday
        verifyDoctor.cpf = request.body.cpf || verifyDoctor.cpf
        verifyDoctor.phone = request.body.phone || verifyDoctor.phone
        verifyDoctor.college = request.body.college || verifyDoctor.college
        verifyDoctor.crm = request.body.crm || verifyDoctor.crm
        verifyDoctor.specialization = request.body.specialization || verifyDoctor.specialization        
        verifyDoctor.status = request.body.status || verifyDoctor.status


        const updatedDoctor = await verifyDoctor.save()

        return response.status(200).json({
            msg: "dados atualizado com sucesso",
            dados: updatedDoctor
        })

    } catch (error) {
        return response.status(400).json({
            msg: "Não pudemos atender sua solicitação"
        })
    }
}

module.exports = updateDoctor