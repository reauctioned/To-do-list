let todoList = []

renderList()

function renderList(){

     let todoHTML = ''
        
        for (let i = 0; i < todoList.length; i++) {
            let listObj = todoList[i];
            let { name, dueDate } = listObj;
            let html = 
            `<div>${name}</div>
             <div>${dueDate}</div> 
            <button onclick="
             todoList.splice(${i},1)
             renderList()
             ">
            Delete
            </button> 
            `
        todoHTML += html
    }

    document.querySelector('.allList').innerHTML = todoHTML
}

function addTodo() {
    let inpElement = document.querySelector('.todoName').value
    let dateElement = document.querySelector('.dueInp').value
    todoList.push({name: inpElement, dueDate: dateElement})
    
    document.querySelector('.todoName').value = ''
    document.querySelector('.dueInp').value = ''
  renderList()
}
