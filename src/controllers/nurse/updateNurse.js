const Nurse = require('../../models/nurse')

const updateNurse = async (request, response) => {

    try {
        const verifyNurse = await Nurse.findByPk(request.params.id)

        if (!verifyNurse) {
            return response.status(404).json({
                msg: "Usuário não encontrado."
            })
        }

        let result = await Nurse.findOne({
            where: {
                cpf: request.body.cpf
            }
        })

        if(result){
            return response.status(409).json({msg: "CPF já cadastrado."})
        }

        verifyNurse.name = request.body.name || verifyNurse.name
        verifyNurse.gender = request.body.gender || verifyNurse.gender
        verifyNurse.birthday = request.body.birthday || verifyNurse.birthday
        verifyNurse.cpf = request.body.cpf || verifyNurse.cpf
        verifyNurse.phone = request.body.phone || verifyNurse.phone
        verifyNurse.college = request.body.college || verifyNurse.college
        verifyNurse.cofen = request.body.cofen || verifyNurse.cofen
              
        
        const updatedNurse = await verifyNurse.save()

        return response.status(200).json({
            msg: "dados atualizado com sucesso",
            dados: updatedNurse
        })

    } catch (error) {
        return response.status(400).json({
            msg: "Não pudemos atender sua solicitação"
        })
    }
}

module.exports = updateNurse