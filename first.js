const form = document.getElementById('form');
const display = document.getElementById('userinfo');
const arr = []
form.addEventListener('submit',function(e){
    e.preventDefault()
    let name = document.getElementById('name').value
    let age = parseInt(document.getElementById('age').value)
    let address = document.getElementById('Address').value
    let userobj = {
        'Name' : name ,
        'Age' : age ,
        'Address' : address,
    };

    arr.push(userobj)
   for (let i = 0; i < arr.length; i++) {
    display.innerText = `
    User ${i+1}:
    Name: ${arr[i].Name}
    Age: ${arr[i].Age}
    Address: ${arr[i].Address}
    --------------------
    `;
    
   }
})
