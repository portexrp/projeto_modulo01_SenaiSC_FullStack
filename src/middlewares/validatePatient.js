const yup = require('yup')

validation = yup.object().shape({
    name: yup
    .string("O campo Nome deve ser uma string")
    .required("O campo nome é obrigatório"),

    gender: yup
    .string("O campo Gênero deve ser uma string"),

    birthday: yup
    .string("O campo Data de Nascimento deve ser uma string")
    .required("O campo Data de Nascimento é obrigatório"),

    cpf: yup
    .string("O campo CPF deve ser uma string")
    .required("O campo CPF é obrigatório")
    .min(11,"CPF deve conter 11 digitos")
    .max(11,"CPF deve conter 11 digitos"),

    phone: yup
    .string("O campo Telefone deve ser uma string"),

    emergencyContact: yup
    .string("O campo Contato de Emergência deve ser uma string")
    .required("O campo Contato de Emergência é obrigatório"),

    allergy: yup
    .string("O campo Alergias deve ser uma string"),

    specificCare: yup
    .string("O campo Cuidados Específicos deve ser uma string"),

    healthInsurance: yup
    .string("O campo Convênio deve ser uma string")

    
})

const validatePatient = (request, response, next)=>{
    try {
        validation.validateSync(request.body)
        next()
    } catch (error) {
        return response.status(400).json({
            msg: error.message
        })
    }
    
}

module.exports = validatePatient