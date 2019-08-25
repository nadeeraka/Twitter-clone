
const form = document.querySelector('form');
const loding = document.querySelector('.loding');

loding.style.display='none'

form.addEventListener('submit',(event)=>
{
    
    console.log('hi')
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name')
    const data = formData.get('data')
    if(name&&data)
    {
        form.style.display='none';
        loding.style.display=''
    }
    else{
        alert('plase submit the form')
    }

    const dataObj = {
        name,
        data
    }
    console.log(dataObj);

})