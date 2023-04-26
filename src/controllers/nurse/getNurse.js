const Nurse = require('../../models/nurse')

const getNurse = async (request, response) => {
    try {
        
            const result = await Nurse.findAll()
            return response.status(200).json({ result })
                    
        
    } catch (error) {
        return response.status(400).json({ msg: "Não foi possível listar os dados" })
    }

}

module.exports = getNurse