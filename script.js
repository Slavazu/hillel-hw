function studentManagement() {
  function Student(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = Array(25).fill(undefined);
  }

  Student.prototype.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  };

  Student.prototype.getAverageGrade = function () {
    if (this.grades.length === 0) {
      return 0;
    }

    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  };

  Student.prototype.present = function () {
    this.updateAttendance(true);
  };

  Student.prototype.absent = function () {
    this.updateAttendance(false);
  };

  Student.prototype.updateAttendance = function (isPresent) {
    const emptySlotIndex = this.attendance.findIndex((value) => value === undefined);

    if (emptySlotIndex !== -1 && emptySlotIndex !== undefined) {
      this.attendance[emptySlotIndex] = isPresent;
    } else {
      console.log('Масив відвідуваності вже повний');
    }
  };

  Student.prototype.summary = function () {
    const averageGrade = this.getAverageGrade();
    const attendanceRate = this.getAttendanceRate();

    if (averageGrade > 90 && attendanceRate > 0.9) {
      return 'Молодець!';
    } if (averageGrade > 90 || attendanceRate > 0.9) {
      return 'Добре, але можна краще';
    }
    return 'Редиска!';
  };

  Student.prototype.getAttendanceRate = function () {
    if (this.attendance.length === 0) {
      return 0;
    }

    const totalClasses = this.attendance.length;
    const attendedClasses = this.attendance.filter((isPresent) => isPresent).length;
    return attendedClasses / totalClasses;
  };

  const student1 = new Student('Микола', 'Микитась', 1995);
  const student2 = new Student('Ганна', 'Ганнець', 1998);
  const student3 = new Student('Олена', 'Оленіна', 1997);

  student1.present();
  student1.absent();
  student1.grades = [95, 92, 88, 97];

  student2.present();
  student2.present();
  student2.grades = [85, 89, 91, 94];

  student3.absent();
  student3.present();
  student3.present();
  student3.grades = [78, 80, 85, 88];

  console.log(`${student1.firstName} ${student1.lastName}: ${student1.summary()}`);
  console.log(`${student2.firstName} ${student2.lastName}: ${student2.summary()}`);
  console.log(`${student3.firstName} ${student3.lastName}: ${student3.summary()}`);
}

studentManagement();
