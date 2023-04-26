require('dotenv').config()

const express = require('express')
const connection = require('./src/database')
const app = express()

const createPatient = require('./src/controllers/patient/createPatient')
const updatePatient = require('./src/controllers/patient/updatePatient.js')
const statusPatient = require('./src/controllers/patient/statusPatient.js')
const getPatient = require('./src/controllers/patient/getPatient.js')
const getPatientById = require('./src/controllers/patient/getPatientById.js')
const deletePatient = require('./src/controllers/patient/deletePatient.js')

const createDoctor = require('./src/controllers/doctors/createDoctor')
const updateDoctors = require('./src/controllers/doctors/updateDoctors')
const statusDoctor = require('./src/controllers/doctors/statusDoctor')
const getDoctor = require('./src/controllers/doctors/getDoctor')
const getDoctorById = require('./src/controllers/doctors/getDoctorById')
const deleteDoctor = require('./src/controllers/doctors/deleteDoctor')

const createNurse = require('./src/controllers/nurse/createNurse')
const updateNurse = require('./src/controllers/nurse/updateNurse')
const getNurse = require('./src/controllers/nurse/getNurse')
const getNurseById = require('./src/controllers/nurse/getNurseById')
const deleteNurse = require('./src/controllers/nurse/deleteNurse')

const Service = require('./src/controllers/services/service')

const validatePatient = require('./src/middlewares/validatePatient')







app.use(express.json())
connection.authenticate()
connection.sync({ alter: true })

app.post('/api/pacientes', validatePatient ,createPatient)
app.put('/api/pacientes/:id', updatePatient)
app.put('/api/pacientes/:id/:status', statusPatient)
app.get('/api/pacientes', getPatient)
app.get('/api/pacientes/:id', getPatientById)
app.delete('/api/pacientes/:id', deletePatient)

app.post('/api/medicos', createDoctor)
app.put('/api/medicos/:id', updateDoctors)
app.put('/api/medicos/:id/:status', statusDoctor)
app.get('/api/medicos', getDoctor)
app.get('/api/medicos/:id', getDoctorById)
app.delete('/api/medicos/:id', deleteDoctor)

app.post('/api/enfermeiros', createNurse)
app.put('/api/enfermeiros/:id', updateNurse)
app.get('/api/enfermeiros', getNurse)
app.get('/api/enfermeiros/:id', getNurseById)
app.delete('/api/enfermeiros/:id', deleteNurse)

app.post('/api/atendimento', Service)


app.listen(3000)