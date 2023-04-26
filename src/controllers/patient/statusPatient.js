const { stat } = require('fs')
const Patient = require('../../models/patient')

const statusPatient = async (request, response) => {

    try {
        const statusPatient = await Patient.findByPk(request.params.id)

        if (!statusPatient) {
            return response.status(404).json({
                msg: "Usuário não encontrado."
            })
        }        
         
        statusPatient.status = request.params.status.slice(7)
               
        await statusPatient.save()

        return response.status(200).json({
            msg: "Status atualizado com sucesso",
            dados: statusPatient
        })

    } catch (error) {
        return response.status(400).json({
            msg: "Não pudemos atender sua solicitação"
        })
    }
}

module.exports = statusPatient