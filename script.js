const btn = document.getElementById("btn")
const birthday = document.getElementById("birthday")

const result = document.getElementById("result")



function calculateAge(){
    const b_value = birthday.value;
  if(b_value === ""){
    alert("Please enter your birthday")

  } else{
    let age = getAge(b_value)
    result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }

}

function getAge(b_value){
const currentDate = new Date();
const bDate = new Date(b_value);
let age = currentDate.getFullYear() - bDate.getFullYear()

const month = currentDate.getMonth() - bDate.getMonth();

if (month < 0 || (month === 0 && currentDate.getDate() < bDate.getDate())) {
    age --
}
 return age;
console.log(age)

}
btn.addEventListener("click", calculateAge);