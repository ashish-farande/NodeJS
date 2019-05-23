console.log('Client side javascript file is loaded.');





const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message_1 = document.querySelector('#message_1')
const message_2 = document.querySelector('#message_2')





weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value;
    console.log(location);

    message_1.textContent = "Loading..."
    message_2.textContent = ''
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
        
        response.json().then((data)=>{
            if(data.error)
                message_1.textContent = data.error;
            else{
                message_1.textContent = data.location;
                message_2.textContent = data.forecast;
                console.log(data.location);
                console.log(data.forecast);
            }
        })
    })
})
