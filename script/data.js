var nums2 = [2, 4, 5];


var csharp_topics = [
    "Variables", "Git control", "Lambda expression"
];

var csharp_div = document.getElementById("csharp_list");    


csharp_topics.forEach(element => {

    var list_el = document.createElement("li");

    list_el.textContent = element;

    csharp_div.appendChild(list_el);
});
