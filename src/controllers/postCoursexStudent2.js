const {tblCourses,tblUsers, tblUsersXCourses} = require("../DB_connection.js");



const postCoursexStudent2 = async (course,student) => {
  
  student = parseInt(student)

    try{
    const estu  = await tblUsers.findByPk(student)

      estu.UserType === "Student"?
  await tblUsersXCourses.create({
    tblCoursePKCourse: course,
    tblUserPKUser : student
   }) : null
} 
    catch(error){
    return error
    }
}

module.exports = postCoursexStudent2; 