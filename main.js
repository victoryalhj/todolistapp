//유저는 할일을 추가할 수 있다.(+) +버튼을 클릭하면 할일이 추가된다

//각 할일에 삭제와 체크버튼이 있다.(delete/check)
//삭제버튼을 클릭하면 할일이 리스트에서 삭제된다.
//체크버튼을 누르면 할일이 끝난것으로 간주하고 밑줄이간다.
//1.check버튼 클릭하는 순간 false>true
//2.true이면 끝난걸로 간주하고 밑줄
//3.false이면 안끝난걸로 간주하고 그대로

//끝난 할일은 되돌리기 버튼을 클릭하면 다시 되돌릴 수 있다.
//탭을 이용해 아이템들을 상태별로 나누어서 볼 수 있다.
//모바일 버전에서도 확인할 수 있는 반응형 웹이다

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];

addButton.addEventListener("click", addTask);

function addTask() {
  let task = {
    id: randomIDGenerate(),
    taskContents: taskInput.value,
    isComplete: false,
  };
  taskList.push(task);
  console.log(taskList);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].isComplete == true) {
      resultHTML += `<div class="task">
          <div class="task-done">${taskList[i].taskContents}</div>
          <div>
            <button onclick="toggleComplete('${taskList[i].id}')">
              <i class="fa-solid fa-rotate-left"></i>
            </button>
            <button onclick="deleteTask('${taskList[i].id}')">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>`;
    } else {
      resultHTML += ` <div class="task">
        <div>${taskList[i].taskContents}</div>
        <div>
        <button onclick="toggleComplete('${taskList[i].id}')">
            <i class="fa-solid fa-check"></i>
        </button>
        <button onclick="deleteTask('${taskList[i].id}')">
            <i class="fa-solid fa-trash"></i>
        </button>
         </div>
        </div>`;
    }
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {
  console.log("id", id);
  for (let i = 0; i < taskList.length; i++) {
    if ((taskList[i].id = id)) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render()
  console.log(taskList);
}

function deleteTask(id) {
  for(let i=0; i<taskList.length; i++){
    if(taskList[i].id == id){
      taskList.splice(i,1)
      break;
    }
  }
  render()
  console.log(taskList)
}

function randomIDGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
