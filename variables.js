var fullName = "Shyamal Krishna";
console.log(`my full name is ${fullName}`);

var num1 = 7;
var num2 = 6;

console.log(num1*num2);

var answer = num1>num2;

console.log(answer);

// lose check == is used
// 2 == "2" is true but 2 === "2" is false
//  Exact check === is used
function hi(){
    console.log(hi);
    return(0);
}

var check = function (name, role){
    switch (role){
        case "admin":
            return(`${name} can do any thing`);
        case "user":
            return(`${name} can do make use of your resources`);
        default:
            return(`${name} do not have permission to enter`);
    }
}

var check1= check("jimy", "admin")
console.log(check1);

// array dose not have have fixed number of entries.
// var arr = new Array;

// push is used to add element at the end of a array
// unshift is use to insert element at the start of th array;
// shift is used to delete element from front
// pop can be used to delete element from the end
// indexOf is used to find index of a element
// every is used to check each element of array with a function and give a && of all boolean result
// fill is used to change all element bettween given range
// filter is used to remove some values that give false result with respect to function
// slice is used to remove other element expect the one present in the range mentioned.
// splice also replace what is sliced out 


// object is same as dictionary as shown below
var name="shyamal"
var user={name:"ska",
age:22,
courseList:[],
buyCourse: function(courseName){
    this.courseList.push(courseName);
},
getCourseCount: function(){
    return `no. of courses registered = ${this.courseList.length} by ${this.name}`;
}
};
console.log(user.getCourseCount());

var mycou = [1, 1, 2, 3, 4, "hsbfhb ds", "bdjs bc"];

mycou.forEach((s)=>(console.log(s)));

// for (const n of array) it gives value by idex
// for (const n it dic/object) it gives key


// document.getElementsByTagName
// document.getElementsByClassName
// document.getElementById
// document.querySelector() you can use class/id to get entire html elements
// window.getComputedStyle(variable).propertyname to find property on html page
// to change a property variable.style.propertyname = new propert
