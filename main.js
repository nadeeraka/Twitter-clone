
const form = document.querySelector('form');

form.addEventListener('submit',(event)=>
{
    console.log('hi')
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name')
    const data = formData.get('data')

    const dataObj = {
        name,
        data
    }
    console.log(dataObj);
})