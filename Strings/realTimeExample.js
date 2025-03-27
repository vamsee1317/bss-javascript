// User input from a registration form
let fullName = "   John Doe   ";
let email = "John.Doe@Example.COM";
let phoneNumber = "9876543210";
let orderID = "ORD12345XYZ";
let productList = "Laptop,Mouse,Keyboard";

// 1️⃣ .trim() → Remove extra spaces from the user's full name
fullName = fullName.trim();
console.log("Full Name:", fullName); // Output: "John Doe"

// 2️⃣ .toUpperCase() → Convert email to uppercase (not usually needed, just for demo)
console.log("Email (UpperCase):", email.toUpperCase()); // Output: "JOHN.DOE@EXAMPLE.COM"

// 3️⃣ .toLowerCase() → Normalize email input for case-insensitive storage
email = email.toLowerCase();
console.log("Normalized Email:", email); // Output: "john.doe@example.com"

// 4️⃣ .length → Check username length validation
if (fullName.length < 5) {
    console.log("Error: Full name must be at least 5 characters long.");
} else {
    console.log("Full Name Validated! ✅");
}

// 5️⃣ .includes() → Validate if email contains '@'
if (!email.includes("@")) {
    console.log("Error: Invalid email format.");
} else {
    console.log("Email Validated! ✅");
}

// 6️⃣ .indexOf() → Find position of '@' in email
let atIndex = email.indexOf("@");
console.log("Position of '@':", atIndex); // Output: 8

// 7️⃣ .slice() → Extract domain from email
let domain = email.slice(atIndex + 1);
console.log("Email Domain:", domain); // Output: "example.com"

// 8️⃣ .substring() → Extract first part of order ID
let orderNumber = orderID.substring(3, 8);
console.log("Extracted Order Number:", orderNumber); // Output: "12345"

// 9️⃣ .replace() → Mask phone number for privacy
let maskedPhone = phoneNumber.replace(phoneNumber.slice(0, 6), "******");
console.log("Masked Phone Number:", maskedPhone); // Output: "******3210"

// 🔟 .split() → Convert product list into an array
let productArray = productList.split(",");
console.log("Product List:", productArray); // Output: ["Laptop", "Mouse", "Keyboard"]

// 1️⃣1️⃣ .charAt() → Get the first letter of the user's first name
let firstInitial = fullName.charAt(0);
console.log("First Initial:", firstInitial); // Output: "J"

// 1️⃣2️⃣ .concat() → Merge first name and last name dynamically
let firstName = fullName.split(" ")[0];
let lastName = fullName.split(" ")[1];
let formattedName = firstName.concat(" ", lastName);
console.log("Formatted Name:", formattedName); // Output: "John Doe"
