// Countries list
let countries = [
  "India",
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Brazil",
  "China",
  "Japan",
  "South Korea",
  "Russia",
  "Mexico",
  "South Africa",
  "Argentina",
  "Indonesia",
  "Saudi Arabia",
  "Turkey"
];

// Elements select karna --->
let container = document.querySelector(".container");
let selectBox = document.querySelector(".select-option");
let list = document.querySelector(".list");
let search = document.querySelector("#search");
let text = document.querySelector(".select-option span");

// Dropdown open/close --->
selectBox.addEventListener("click",() => {
    container.classList.toggle("active");
})



// List show karna --->
function showList(data) {
  
  list.innerHTML = "";

  data.forEach(function (country) {
    let li = document.createElement("li");
    li.innerText = country;

     list.appendChild(li);

    // click pe select --->
    li.onclick = function () {
      text.innerText = country;
      container.classList.remove("active");
    };

   
  });

}

// Search ka kaam --->
// search.onkeyup = function () {

//   let value = search.value.toLowerCase();
  

//   let filtered = countries.filter(function (item) {
//     return item.toLowerCase().includes(value);
//   });

//   showList(filtered);

// };


search.addEventListener("keyup" ,() => {

  let value = search.value.toLowerCase();

  let filtered = countries.filter((item) => {
    return item.toLowerCase();
  })

  showList(filtered);
  
})



// First time list show --->
showList(countries);












