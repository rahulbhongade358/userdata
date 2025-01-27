const form = document.getElementById('form');
const display = document.getElementById('userinfo');
const arr = []
form.addEventListener('submit',function(e){
    e.preventDefault()
    let Name = document.getElementById('name').value
    let Age = document.getElementById('age').value
    let address = document.getElementById('Address').value
    let userobj = {
        'Name' : Name ,
        'Age' : Age ,
        'Address' : address,
    };
    display.innerHTML=null
    arr.push(userobj)
   for (let i = 0; i < arr.length; i++) {
    let card = document.createElement("div")
    card.setAttribute("class", "card");
    let name= document.createElement("p")
    name.setAttribute("class" , "name")
    let age= document.createElement("p")
    age.setAttribute("class" , "age")
    let add= document.createElement("p")
    add.setAttribute("class" , "address")
    name.innerText= `Name: ${arr[i].Name}`
    age.innerText= `Age: ${arr[i].Age}`
    add.innerText=`Address: ${arr[i].Address }`

    card.append(name,age,add)
    
    display.append(card)

   }

   console.log(arr)

})
