
// 1. getElementsByTagName() :
const uList = document.getElementsByTagName('ul');
console.log(uList);

const listItems = document.getElementsByTagName("li");
console.log(listItems);

// 2. getElementsByClassName() :
const courseList = document.getElementsByClassName("courseList");
console.log(courseList);

// 3. getElementById() :
const courseTitle = document.getElementById("ttCourse");
console.log(courseTitle);
// 4. querySelector() :
const courseHeading = document.querySelector("ul li");
console.log(courseHeading);
// 5. querySelectorAll() :
const courseListItems = document.querySelectorAll("ul>li");
console.log(courseListItems);


