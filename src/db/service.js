class DBService {
  constructor() {
    this.students = new Map();
    
    const dummyStudents = [
      { matricula: 'A01753959', name: 'John Doe',  calificacion: 9, deuda: 0 },
      { matricula: 'A00836202', name: 'Jane Smith', calificacion: 6, deuda: 0 },
      { matricula: 'A01534786', name: 'Bob Johnson', calificacion: 8, deuda: 120 },
      { matricula: 'A09842356', name: 'Alice Brown', calificacion: 5, deuda: 800 },
    ];


    dummyStudents.forEach((student) => {
      this.students.set(student.matricula, student);
    });
  }

  getAllStudents() {
    return Array.from(this.students.values());
  }

  getStudentById(matricula) {
    return this.students.get(matricula);
  }
}

module.exports = new DBService;
