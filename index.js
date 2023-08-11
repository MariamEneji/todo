
const button = document.querySelector('button')

const input = document.querySelector('input')

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        createTodo();
    }
})



button.addEventListener('click', createTodo)


    function createTodo(e) {
    let input = button.previousElementSibling;

    let divTodo = button.nextElementSibling

    let ul = divTodo.firstElementChild

    const todo = input.value

    

    // create li
    // set textCOntent
    // append li to ul

    let li = document.createElement('li')

    li.textContent = todo.trim() 

    ul.append(li)



    // clear input

    input.value = ''

    // //linethrough li
    li.onclick = (e) => {
        e.target.classList.toggle('line');
    }
  
    // add delete button

    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'X'



    deleteButton.onclick = (e) => {
        e.target.parentElement.parentElement.remove()

        alert('removed successfully')
        

    }
    let span = document.createElement('span')
    span.append(deleteButton);
    li.append(span)


    


    console.log(ul)
    console.log(todo)
    console.log(todo.trim())
}