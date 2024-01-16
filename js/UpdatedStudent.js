function getStudentConstructor() {
  const gradeSettings = {
    min: 0,
    max: 100,
  };

  function checkAttendance(lessonVisited = true, currentLesson, lessonsCount) {
    if (typeof lessonVisited !== 'boolean') throw new Error('arg lessonVisited should be boolean');
    if (currentLesson >= lessonsCount) throw new Error(`Cannot add more than ${lessonsCount} lessons`);
    this.attendance[currentLesson] = lessonVisited;
  }

  function setGrade(grade, currentLesson) {
    if (typeof grade !== 'number') throw new Error('Grade should be a number');
    if (grade > gradeSettings.max || grade < gradeSettings.min) throw new Error('Invalid grade value');
    const currentLessonIndex = currentLesson - 1;

    if (currentLessonIndex < 0 || !this.attendance[currentLessonIndex]) {
      throw new Error('Cannot set grade, student has not been on the lesson');
    }
    this.grades[currentLessonIndex] = grade;
  }

  function getAge() {
    if (typeof this.birthYear !== 'number') throw new Error('birthYear should be a number');
    return new Date().getFullYear() - this.birthYear;
  }

  return function StudentConstructor(name, surname, birthYear, lessonsCount = 25) {
    let currentLesson = 0;
    return {
      name,
      surname,
      birthYear: Number(birthYear),
      grades: new Array(lessonsCount),
      attendance: new Array(lessonsCount),
      get currentLesson() {
        return currentLesson;
      },
      getAge() {
        return getAge.call(this);
      },
      present() {
        checkAttendance.call(this, true, currentLesson, lessonsCount);
        currentLesson += 1;
      },
      absent() {
        checkAttendance.call(this, false, currentLesson, lessonsCount);
        currentLesson += 1;
      },
      setGrade(grade) {
        setGrade.call(this, grade, currentLesson);
      },
    };
  };
}

const Student = getStudentConstructor();

const updatedStudent = new Student('Max', 'Stellar', 2000);
updatedStudent.present();
updatedStudent.present();
updatedStudent.present();
updatedStudent.setGrade(20);
console.log(updatedStudent);

const student3 = new Student('Luna', 'Ray', 2000);
student3.present();
student3.setGrade(50);
student3.absent();
student3.absent();
student3.present();
student3.setGrade(50);
console.log(student3);
