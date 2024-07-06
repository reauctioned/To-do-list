let todoList = ['here','there']

renderList()

function renderList(){

        let todoHTML = ''
        
        for (let i = 0; i < todoList.length; i++) {
            let list = todoList[i]
            let html = `<p>${list} <button>Delete</button> </p>`
        todoHTML += html
    }

    document.querySelector('.allList').innerHTML = todoHTML
}

function addTodo() {
    let inpElement = document.querySelector('.todoName').value
    todoList.push(inpElement)
    document.querySelector('.todoName').value = ''
  renderList()
}
