console.log(document.querySelector('.container-description').textContent);
//To change the content of DOM using query Selectors
document.querySelector('.container-description').textContent="Query Selector";
//querySelector is sufficinet for changes required in DOM




console.log(document.querySelector('.container'));
console.log(document.querySelector('.container').value);
//document.querySelector('.preference').value='Tea as an option';
const trigger=function(event)
{
    event.preventDefault();
    document.querySelector('.container-description').textContent="Hello On Click View will change";
    document.querySelector('.Heading').textContent="Heading Changed on click";
   
}
document.querySelector('.container').addEventListener('click',trigger);
