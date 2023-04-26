const Doctor = require('../../models/doctor')

const getDoctorById = async (request, response) => {
    try {
        const id = request.params.id

        const result = await Doctor.findByPk(id)
        if(!result){
            return response.status(404).json({ msg: "Id não encontrado na base" })
        }
        return response.status(200).json({ result })

    } catch (error) {
        return response.status(400).json({ msg: "Não foi possível listar os dados" })
    }

}

module.exports = getDoctorById