let m = document.getElementById('m');
let n = document.getElementById('n');
let c = document.getElementById('c');
let h = document.getElementById('h');
let o = document.getElementById('o');
let home = document.getElementById('home');
let header = document.getElementById('header');
let table = document.getElementById('table');
let tbody = document.getElementById('tbody');
let tableBody = '';
let counter = 0;

home.style.display = 'none';
header.innerHTML = "Select Bird Type :-"

c.style.display= 'none'
h.style.display= 'none'
o.style.display= 'none'
table.style.display= 'none'

let which_bird
function bird(bird_type){
    header.innerHTML = "Select Bird Category :-"

    which_bird = bird_type
    n.style.display= 'none'
    m.style.display= 'none'

    c.style.display= 'block'
    h.style.display= 'block'
    o.style.display= 'block'
}


function birdCat(cat){

    c.style.display= 'none'
    h.style.display= 'none'
    o.style.display= 'none'

    home.style.display="none"

    getData(cat);

}

async function getData(cat){

    header.innerHTML = "Bird Matches Found :-"

    home.style.display="block"

    const response = await fetch('./index.json');
    const jsonData = await response.json();
    jsonData[which_bird].forEach(item => {
        if(item['category']==cat){
            counter++
            tableBody += `<tr>
            <td scope="row">${counter}</td>
            <td scope="row">${item.name}</td>
            <td scope="row">${item.location}</td>
          </tr>`
        }
    });
    
    tbody.innerHTML = tableBody;
    table.style.display = 'block'
}



let dark = document.querySelector('#dark');
console.log(dark);

dark.addEventListener('click',function(){
    document.body.classList.toggle('dark-theme')
    if(document.body.classList.contains('dark-theme'))
        dark.src = './moon.png'
    else
        dark.src = './sun.png'
})


