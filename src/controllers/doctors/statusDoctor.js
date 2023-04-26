const Doctor = require('../../models/doctor')

const statusDoctor = async (request, response) => {

    try {
        const statusDoctor = await Doctor.findByPk(request.params.id)

        if (!statusDoctor) {
            return response.status(404).json({
                msg: "Usuário não encontrado."
            })
        }
        
         
        statusDoctor.status = request.params.status.slice(7) || statusDoctor.status
        
        await statusDoctor.save()

        return response.status(200).json({
            msg: "Status atualizado com sucesso",
            dados: statusDoctor
        })

    } catch (error) {
        return response.status(400).json({
            msg: "Não pudemos atender sua solicitação"
        })
    }
}

module.exports = statusDoctor