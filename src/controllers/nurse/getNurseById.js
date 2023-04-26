const Nurse = require('../../models/nurse')

const getNurse = async (request, response) => {
    try {
        const id = request.params.id

        if (id) {
            
            const result = await Nurse.findByPk(id)
            return response.status(200).json({ result })   

        } else {

            return response.status(400).json({ 
                msg: "Não foi possível listar os dados, id não encontrado"
            })
            
        }
        
    } catch (error) {
        return response.status(400).json({ msg: "Não foi possível listar os dados" })
    }

}

module.exports = getNurse