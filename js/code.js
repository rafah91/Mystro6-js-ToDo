console.log(`welcome`)
const TodoInput = document.querySelector(`.todo-input`)
const TodoBtn = document.querySelector(`.todo-btn`)
const TodoResult = document.querySelector(`.todo-result`)

function addTodo(e){
 e.preventDefault();
console.log(TodoInput.value)
 const todoLi=document.createElement(`li`)
 todoLi.classList.add(`my-2`)
const todoTitle=document.createElement(`h4`)

todoTitle.innerText=TodoInput.value
TodoInput.value=``
todoTitle.classList.add(`d-inline-block`)
todoTitle.classList.add(`me-5`)

todoLi.appendChild(todoTitle)

const todoAction = document.createElement(`div`)
todoAction.classList.add(`d-inline-block`)
todoAction.classList.add(`float-end`)

const btnComplete = document.createElement(`button`)
btnComplete.classList.add(`btn`)
btnComplete.classList.add(`btn-primary`)
btnComplete.innerHTML=`<i class="fa-solid fa-check"></i>`
todoAction.appendChild(btnComplete)

const btnDelete = document.createElement(`button`)
btnDelete.classList.add(`btn`)
btnDelete.classList.add(`btn-danger`)
btnDelete.innerHTML=`<i class="fa-solid fa-trash-can"></i>`
todoAction.appendChild(btnDelete)



todoLi.appendChild(todoAction)

TodoResult.appendChild(todoLi)
}

function todoToggole(e){
const item=e.target

if (item.classList[1]==`fa-check`){
    console.log(`completed`)
    const taskli = item.parentElement.parentElement.parentElement
    taskli.childNodes[0].classList.toggle(`completed`)

}
else if (item.classList[1]==`fa-trash-can`){
    const taskli = item.parentElement.parentElement.parentElement.classList.add(`deleted`)
}




}







TodoBtn.addEventListener(`click`,addTodo)
TodoResult.addEventListener(`click` ,todoToggole)