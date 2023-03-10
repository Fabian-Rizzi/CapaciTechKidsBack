const {tblCourses,tblUsers,tblUsersXCourses} = require("../DB_connection.js");
const realDB = require("../utils/DBReal.js");
const categoriesXCourses = require("./postCategoriesXCourse.js");

const relaciones = async() => {
    const allCourses = await tblCourses.findAll()
    try {
    for (let i = 0; i < allCourses.length; i++) {
         categoriesXCourses(allCourses[i].PK_Course, realDB[i].Category);
         tblUsersXCourses.create({
             tblCoursePKCourse: allCourses[i].PK_Course,
             tblUserPKUser : realDB[i].PK_User
            }) } }
            catch (error){
                return error.message
            }
}

module.exports = relaciones;