const Course = require("./course");
const Student = require("./student");

const CourseManagement = () => {
  let courses = [];

  const addCourse = (id, name, desc) => {
    courses.push(new Course(id, name, desc).getInfo());
  };

  const deleteCourse = (id) => {
    courses = courses.filter((course) => course.id !== id);
  };

  const updateCourse = (id, newCourse) => {
    courses[courses.findIndex((course) => course.id === id)] = newCourse;
  };

  const getCourseById = (id) => {
    return courses.find((course) => course.id === id);
  };

  const getCourseByName = (name) => {
    return courses.find((course) => course.name === name);
  };

  const getAllCourse = () => {
    return courses;
  };

  return [
    addCourse,
    deleteCourse,
    updateCourse,
    getCourseById,
    getCourseByName,
    getAllCourse,
  ];
};

const [
  addCourse,
  deleteCourse,
  updateCourse,
  getCourseById,
  getCourseByName,
  getAllCourse,
] = CourseManagement();

addCourse("INT100", "IT Fund");
addCourse("INT101", "Program Fund");
addCourse("INT102", "Web Tech");
addCourse("INT114", "Discrete");
addCourse("INT103", "Advance Prog");
addCourse("INT105", "Basic SQL");
addCourse("INT104", "User Experience");
addCourse("INT201", "Web based Client Side I");
addCourse("INT202", "Server Side I");
addCourse("INT205", "Database Mgt");
addCourse("INT207", "Network I");
addCourse("INT214", "Statistics IT");
addCourse("INT203", "Web based Client Side II");
addCourse("INT204", "Web Tech");
addCourse("INT206", "Web-based Server Side II");
addCourse("INT208", "Network II");
addCourse("INT209", "DevOps");
addCourse("INT210", "Arch Int Deploy");
addCourse("INT221", "INT 221 Int IT Project I");
addCourse("INT305", "Un-and Semi Structured Data");
addCourse("INT307", "Security I");
addCourse("INT314", "Applied Mathematics for Data Science");
addCourse("INT319", "IT Pro Comm");
addCourse("INT321", "DevOps");
addCourse("INT308", "Security II");
addCourse("INT339", "Prep Career Training");
addCourse("INT340", "Career Training");
addCourse("INT365", "Capstone IT Proj I");
addCourse("INT314", "Applied Mathematics for Data Science");
addCourse("INT319", "IT Pro Comm");

// deleteCourse('INT101')
// updateCourse('INT100', new Course('INT100', 'IT Fund', 'LOVE AJ Siam').getInfo())
// console.log(getCourseById('INT201'))
// console.log(getCourseByName('Security I'))
// console.log(getAllCourse())

const showListOfCourseNotRegistration = (student, courses) => {
  const allCourseOfYear = courses.filter((course) => {
    return course.id.startsWith(student.getYear(), 3);
  });
  const courseOfStudent = student.courses;

  return allCourseOfYear.filter(
    (allCourse) =>
      !courseOfStudent.some((stdCourse) => stdCourse.id === allCourse.id)
  );
};

let course1 = new Course("INT206", "Web-based Server Side II").getInfo();
let course2 = new Course("INT205", "Database Mgt").getInfo();
let std = new Student("62130500102", "Somchai", 2, [course1, course2]);

console.log(std);
console.log(showListOfCourseNotRegistration(std, getAllCourse()));
