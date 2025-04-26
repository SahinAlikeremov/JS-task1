//Task 1
let age = prompt("Please enter your age:")

if (age < 18) {
    alert("Access Denied");
} else {
    alert("Access Granted");
}


//Task2
let number = prompt("Zəhmət olmasa dörd rəqəmli ədəd daxil edin:");
console.log(+number.charAt(0) + +number.charAt(1) + +number.charAt(2) + +number.charAt(3));

//Task 3
let fullName = prompt("Zəhmət olmasa soyadınızı və adınızı daxil edin:")
console.log(`Salam, ${fullName}`);