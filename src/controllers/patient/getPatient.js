const Patient = require('../../models/patient')

const getPatient = async (request, response) => {
    try {
        const status = request.query

        if (status?.status) {
            const result = await Patient.findAll({
                where: {
                    status: status.status
                }
            })
            return response.status(200).json({ result })
        } else {
            const result = await Patient.findAll()
            return response.status(200).json({ result })
        }

    } catch (error) {
        return response.status(400).json({ msg: "Não foi possível listar os dados" })
    }

}

module.exports = getPatient