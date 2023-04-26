const {Sequelize} = require('sequelize')
const connection = require('../database/index')
const DataTypes = require('sequelize/lib/data-types');

const Doctor = connection.define('doctors', {
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

   college: {
        type: Sequelize.STRING,
        allowNull: false
   },

   crm: {
        type: Sequelize.STRING,
        allowNull: false
   },

   specialization: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ['clínico_geral', 'anestesista', 'dermatologia', 'ginecologia', 'neurologia', 'pediatria', 'psiquiatria', 'ortopedia'],
        defaultValue: 'clínico_geral'
   },

   status: {
    type: Sequelize.ENUM,    
    values: ['ativo','inativo'],
    defaultValue: 'ativo'
   },

   servicesPerdomed: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: '0'
}

})

module.exports = Doctor