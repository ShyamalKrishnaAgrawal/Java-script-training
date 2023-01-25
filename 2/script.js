courses=[
    {
        name: 'java',
        price: '60'
    },
    {
        name: 'python',
        price: '50'
    },
    {
        name: 'c#',
        price: '70'
    }
];

function generateList(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML="";
    courses.forEach((course) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        const name= document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("list-group-item");
        const price= document.createTextNode(course.price);
        span.appendChild(price);

        li.appendChild(span);

        ul.appendChild(li);
    });
    console.log(ul);
}

window.addEventListener("load", generateList);

const button = document.querySelector(".sort-btn")
button.addEventListener("click", () => {
    courses.sort( (a,b) => a.price - b.price);
    generateList();
});