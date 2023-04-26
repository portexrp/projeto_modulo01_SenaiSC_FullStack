const Doctor = require('../../models/doctor')

const deleteDoctor = async (request, response) => {

    try {
        const id = request.params.id

        const result = await Doctor.findByPk(id)

        if(!result){
            return response.status(404).json({ msg: "Id não encontrado na base" })
        }
           
        await Doctor.destroy({
            where: {
                id: id
            }
        })

        return response.status(204).json()

    } catch (error) {
        return response.status(400).json({ msg: "Não foi possível atender sua solicitação" })
    }

}

module.exports = deleteDoctor