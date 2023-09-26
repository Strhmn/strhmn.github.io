let randomButton = document.querySelector("#btn-random")
let tableOne = document.querySelector("#table-one")
let tableTwo = document.querySelector("#table-two")
let averageText = document.querySelector("#general h2")

const names = [ 
    ["Diego","Martin","Valeria","Lucas","Carolina","Ana","Celeste","Matias","Gabriela","Facundo"], 
    ["Maria","Silvia","Daniel","Javier","Alejandro","Juan","Eduardo","Paula","Laura","Patricia"]
]
const lastNames = [
    ["Gonzalez","Rodriguez","Perez","Fernandez","Lopez","Denis","Morales","Romero","Diaz","Garcia"],
    ["Martinez","Castro","Gomez","Sanchez","Flores","Vargas","Torres","Ramirez","Hernandez","Herrera"]
]

function randomRows(){


    while(tableOne.childElementCount > 0){
        tableOne.removeChild(tableOne.firstChild)
        tableTwo.removeChild(tableTwo.firstChild)
    }

    let generalAverage = 0
    
    for(let i = 0; i < 10; i++){

        let rowOne = document.createElement("tr")
        let rowTwo = document.createElement("tr")
        let cell = document.createElement("td")
        cell.textContent = names[randomNumber(2)][randomNumber(10)]
        rowOne.appendChild(cell)
    
        cell = document.createElement("td")
        cell.textContent = lastNames[randomNumber(2)][randomNumber(10)]
        rowOne.appendChild(cell)
    
        cell = document.createElement("td")
        let ul = document.createElement("ul")
        let notes = [randomNumber(11),randomNumber(11),randomNumber(11)]
        let average = 0
    
        notes.forEach(Number => {
           let li = document.createElement("li") 
           li.textContent = Number
           average += Number
           ul.appendChild(li)
        });
    
        cell.appendChild(ul)
        rowOne.appendChild(cell)
        rowTwo = rowOne.cloneNode(true);
        tableOne.appendChild(rowOne)

        cell = document.createElement("td")
        average = average / 3

        if(average % 1 != 0){
            average = average.toFixed(1)
        }

        cell.textContent = average
        rowTwo.appendChild(cell)

        rowTwo.style.color = "#161616"
        if(average < 7)rowTwo.style.backgroundColor = "#D44D5C"
        else if (average < 10) rowTwo.style.backgroundColor = "yellow"
        else rowTwo.style.backgroundColor = "#32E875"

        tableTwo.appendChild(rowTwo)
        generalAverage += parseFloat(average);
    }

    averageText.innerHTML = `Promedio general: ${(generalAverage / 10).toFixed(1)}`

}

function randomNumber(max){
    return Math.floor(Math.random() * max);
}

randomButton.addEventListener("click",randomRows)
