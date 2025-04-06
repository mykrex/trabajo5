const basedatos = require('../db/service');

const getData = (req, res) => {
    const data = basedatos.getAllStudents();

    if (!data || data.length === 0) {
        return res.status(404).json({ message: 'No se encontraron estudiantes' });
    }

    const studentsStatus = [];

    data.forEach(student => {
        let status = '';

        if (student.calificacion >= 7 && student.deuda === 0) {
            status = 'Aprobado';
        } else if (student.calificacion < 7 && student.deuda === 0) {
            status = 'Pendiente';
        } else if (student.calificacion >= 7 && student.deuda > 0) {
            status = 'Reestructura';
        } else if (student.calificacion < 7 && student.deuda > 0) {
            status = 'Expulsado';
        }

        studentsStatus.push({
            matricula: student.matricula,
            name: student.name,
            status: status,
        });
    });

    res.status(200).json(studentsStatus);
};

module.exports = { getData };