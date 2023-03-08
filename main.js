
class Project{
  
    tasks = [];
    constructor(title) {
        this.title = title;
    }
 
    addTask(task) {
        this.tasks.append(task);
    }

    listTasks() {
        return this.tasks;
    }

}

class Task {

    constructor(title, description, isdone=false) {
        this.title = title;
        this.description = description;
        this.isdone = isdone;
    }

    changeState() {
        if (this.isdone === false) {
            this.isdone = true;
        }
        else{
            this.isdone = false
        }
    }

    changeTitle(title) {
        this.title = title;
    }

    changeDescription(description) {
        this.description = description;
    }
}

const modal = document.querySelector('#modal');
const form = document.querySelector('#form');
const formContainer = document.querySelector('#form-container')
let actionMode = '';
const sidebar = document.querySelector('#projects');
const editIcon = './img/edit.png';
const projects = [];
projects.push(new Project('Untitled'));
showProjects();

function changeLabel(mode) {

    if (mode === 'add') {
        const label = document.querySelector('#form-label')
        label.textContent = "Add New Project";
        formContainer.prepend(label);


        form.value = "Untitled"
        form.style.width = '280px';
        form.style.height = '40px';
        actionMode = mode
    }

}

function showModal(mode) {

    changeLabel(mode);
    modal.style.display = 'flex';

}

function hideModal() {
    modal.style.display = 'none';
}

function action() {

    if (actionMode === 'add') {
        addProject(form.value);
        hideModal();
    }

}

function createProjectDiv(title) {
    const card = document.createElement('div');
    card.classList.add('sidebar-project');

    const cardtitle = document.createElement('h2');
    cardtitle.textContent = title;
    card.append(cardtitle);

    const edit = document.createElement('img');
    edit.src = editIcon;
    edit.classList.add('edit-button');
    card.append(edit)

    return card;

}

function showProjects() {
    sidebar.textContent = '';
    for (let i = 0; i < projects.length; i++) {
        const element = projects[i];
        const divProject = createProjectDiv(element.title);
        sidebar.appendChild(divProject);
    }
}

function addProject(title) {
    projects.push(new Project(title));
    showProjects();
}


const addProjectButton = document.querySelector('#add_project');
addProjectButton.addEventListener('click', function() {
    showModal('add');
});


const denyButton = document.querySelector('#deny-button');
denyButton.addEventListener('click', hideModal)

const confirmButton = document.querySelector('#confirm-button');
confirmButton.addEventListener('click', action)
