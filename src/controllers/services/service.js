const Patient = require('../../models/patient')
const Doctor = require('../../models/doctor')


const Service = async (request, response) =>{
    const find = request.body
    
    if(find.patientId && find.doctorId){
          
        const patient = await Patient.findByPk(find.patientId)
        
        if (patient) {
            
            const doctor = await Doctor.findByPk(find.doctorId)
            
            if(doctor){
                patient.servicesPerdomed = Number(patient.servicesPerdomed)+1
                patient.status = 'atendido'
                doctor.servicesPerdomed = Number(doctor.servicesPerdomed)+1
                await patient.save()
                await doctor.save()

                return response.status(200).json({
                    msg: `Atendimento do paciente ${patient.name} foi realizado pelo médico ${doctor.name}`                    
                })
            }else{
                return response.status(400).json({
                    msg: "Médico não encontrato"
                })
            }

        }else{
            return response.status(400).json({
                msg: "Paciente não encontrato"
            })
        }


    }else{

    }

}

module.exports = Service