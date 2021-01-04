var input = document.getElementById('taskInput');
var btn = document.getElementById('addTask');
var taskList = document.getElementById('task-list');
btn.addEventListener('click', addTasks);
// object to store tasks
var tasks = {}
// enter key event listener
input.addEventListener("keyup",function(event){
    if(event.keyCode===13){
        event.preventDefault();
        btn.click();
    }
})
// onbody load tasks will get loaded
function p(){
    var clear=Object.keys(localStorage)
    console.log(clear)
    clear.map((t)=>(
        createHtmlElement(t)
    ))
}
// dom manipulation
function createHtmlElement(e){
    var taskElement=document.createTextNode(e)
    var listElement = document.createElement('li');
    var check = document.createElement('input')
    check.setAttribute('type', 'checkbox')
    check.setAttribute('id',e)
    check.setAttribute('onchange', 'deleteThis(this)')
    listElement.appendChild(taskElement)
    listElement.appendChild(check)
    taskList.appendChild(listElement)
}
// to delete if checked
function deleteThis(ele) {
    var key=ele.getAttribute('id')
    localStorage.removeItem(key)
     if (ele.checked) {
        ele.parentElement.remove()
    }
}
// add tasks main function
function addTasks() {
    var task = input.value;
    if (input.value == '') {
        alert('enter tasks first')
    }
    else {
        tasks[task] = false;
        var taskList = Object.keys(tasks)
        taskList.map((item) => (
            window.localStorage.setItem(item, false)
        ))
        createHtmlElement(task)
        input.value = '';
    }
}