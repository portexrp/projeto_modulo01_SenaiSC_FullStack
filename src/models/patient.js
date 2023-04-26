const {Sequelize} = require('sequelize')
const connection = require('../database/index')
const DataTypes = require('sequelize/lib/data-types');

const Patient = connection.define('patient', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    gender: {
        type: Sequelize.STRING
    },

    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notNull:{
                msg: "Data de nascimento obrigatória"
            },
            notEmpty: {
                msg: "Informe a data de nascimento"
            }
        }
    },

    cpf: {
        type: Sequelize.STRING        
    },

    phone: {
        type: Sequelize.STRING
        
    },

    emergencyContact: {
        type: Sequelize.STRING,
        allowNull: false
    },

    allergy: {
        type: Sequelize.STRING
    },

    specificCare: {
        type: Sequelize.STRING
    },

    healthInsurance: {
        type: Sequelize.STRING
    },

    status: {
        type: Sequelize.ENUM,
        values: ['aguardando_atendimento', 'em_atendimento', 'atendido', 'nao_atendido'],
        defaultValue: 'nao_atendido'
    },

    servicesPerdomed: {
        type: Sequelize.STRING,        
        defaultValue: '0'
    }

})

module.exports = Patient