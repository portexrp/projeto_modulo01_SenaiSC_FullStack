const {Sequelize} = require('sequelize')
const connection = require('../database/index')
const DataTypes = require('sequelize/lib/data-types');

const Nurse = connection.define('nurse', {
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

    cofen: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

module.exports = Nurse