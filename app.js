

function tables(event){
    {
        event.preventDefault()
    }

let  table = document.querySelector("#value").value

for ( let i = 0; i <= 10; i++ ){
  title= (table + "X" + i+  "=" + i* table)

document.querySelector("#result").innerHTML = title;

}

// document.addEventListener('submit',table)
}


// for loop's
// let table = prompt("Enter Any Number");
// for ( let i = 1; i <= 10; i++) {
// console.log( table + "X" + i+  "=" + i* table)
// }