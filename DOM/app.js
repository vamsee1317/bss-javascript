
// 1. getElementsByTagName() :
// const uList = document.getElementsByTagName('ul');
// console.log(uList);

// const listItems = document.getElementsByTagName("li");
// console.log(listItems);

// // 2. getElementsByClassName() :
// const courseList = document.getElementsByClassName("courseList");
// console.log(courseList);

// // 3. getElementById() :
// const courseTitle = document.getElementById("ttCourse");
// console.log(courseTitle);
// 4. querySelector() :
// const courseHeading = document.querySelector("ul li");
// console.log(courseHeading);
// 5. querySelectorAll() :
// const courseListItems = document.querySelectorAll("ul>li");
// console.log(courseListItems);



// DOM Attribute Manipulation :

// const profileContainer = document.getElementById("profileContainer");

// console.log(profileContainer);

// const profilePicture = document.getElementById("profilePicture");

// profilePicture.setAttribute("src", "https://images.pexels.com/photos/15568759/pexels-photo-15568759/free-photo-of-bird-among-spring-blossoms-on-tree.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load");

// profileContainer.appendChild(profilePicture);

// console.log(profilePicture);

// Applying styles using DOM props :

// profilePicture.style.height = "400px";
// profilePicture.style.width = "400px";
// profilePicture.style.borderRadius = "50%";
// profilePicture.style.objectFit = "cover";


// Adding a dynamic className
// profilePicture.className = "profilePic";

// profilePicture.classList.add("roundedProfile");
// profilePicture.classList.remove("roundedProfile");
// profilePicture.classList.toggle("roundedProfile");
// profilePicture.classList.toggle("roundedProfile");
// profilePicture.classList.toggle("roundedProfile");


// console.log(profilePicture.classList);




// Contributor container

const contributorsContainer = document.getElementById("contributorsContainer");

const contributors = [
    {
      "image": "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "name": "John Doe",
      "role": "Lead Developer",
      "contribution": "Developed core application features and improved system performance."
    },
    {
      "image": "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "name": "Jane Smith",
      "role": "Project Manager",
      "contribution": "Led project planning and ensured timely delivery of milestones."
    },
    {
      "image": "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "name": "Alice Johnson",
      "role": "UI/UX Designer",
      "contribution": "Designed user-friendly interfaces and enhanced user experience."
    },
    {
      "image": "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "name": "Michael Brown",
      "role": "Marketing Strategist",
      "contribution": "Developed digital marketing campaigns and increased brand awareness."
    }
  ]
  

  contributorsContainer.innerHTML = contributors.map((item)=>{
    return `
         <div class="profileCard">
            <img src=${item.image} alt=${item.name}>
            <h2>${item.name}</h2>
            <p>${item.role}</p>
        </div>
    `
  }).join("")