var tableUsers = document.querySelector('.admin__table-users'),
    tableDepart = document.querySelector('.admin__table-depart'),
    tableFood = document.querySelector('.admin__table-food'),
    tableMenu = document.querySelector('.admin__table-menu'),
    tableOrders = document.querySelector('.admin__table-orders'),
    tableHistory = document.querySelector('.admin__table-history'),
    link1 = document.querySelector('.link1'),
    link2 = document.querySelector('.link2'),
    link3 = document.querySelector('.link3'),
    link4 = document.querySelector('.link4'),
    link5 = document.querySelector('.link5'),
    link6 = document.querySelector('.link6');

link1.addEventListener('click', openTableUsers);
link2.addEventListener('click', openTableDepart);
link3.addEventListener('click', openTableFood);
link4.addEventListener('click', openTableMenu);
link5.addEventListener('click', openTableOrders);
link6.addEventListener('click', openTableHistory);

function openTableUsers() {
    tableUsers.style.display = 'block';
    tableDepart.style.display = 'none';
    tableFood.style.display = 'none';
    tableMenu.style.display = 'none';
    tableOrders.style.display = 'none';
    tableHistory.style.display = 'none';
    editUserForm.style.display = 'none';
    editDepartForm.style.display = 'none';
    editFoodForm.style.display = 'none';
    editMenuForm.style.display = 'none';
}

function openTableDepart() {
    tableUsers.style.display = 'none';
    tableDepart.style.display = 'block';
    tableFood.style.display = 'none';
    tableMenu.style.display = 'none';
    tableOrders.style.display = 'none';
    tableHistory.style.display = 'none';
    editUserForm.style.display = 'none';
    editDepartForm.style.display = 'none';
    editFoodForm.style.display = 'none';
    editMenuForm.style.display = 'none';
}

function openTableFood() {
    tableUsers.style.display = 'none';
    tableDepart.style.display = 'none';
    tableFood.style.display = 'block';
    tableMenu.style.display = 'none';
    tableOrders.style.display = 'none';
    tableHistory.style.display = 'none';
    editUserForm.style.display = 'none';
    editDepartForm.style.display = 'none';
    editFoodForm.style.display = 'none';
    editMenuForm.style.display = 'none';
}

function openTableMenu() {
    tableUsers.style.display = 'none';
    tableDepart.style.display = 'none';
    tableFood.style.display = 'none';
    tableMenu.style.display = 'block';
    tableOrders.style.display = 'none';
    tableHistory.style.display = 'none';
    editUserForm.style.display = 'none';
    editDepartForm.style.display = 'none';
    editFoodForm.style.display = 'none';
    editMenuForm.style.display = 'none';
}

function openTableOrders() {
    tableUsers.style.display = 'none';
    tableDepart.style.display = 'none';
    tableFood.style.display = 'none';
    tableMenu.style.display = 'none';
    tableOrders.style.display = 'block';
    tableHistory.style.display = 'none';
    editUserForm.style.display = 'none';
    editDepartForm.style.display = 'none';
    editFoodForm.style.display = 'none';
    editMenuForm.style.display = 'none';
}

function openTableHistory() {
    tableUsers.style.display = 'none';
    tableDepart.style.display = 'none';
    tableFood.style.display = 'none';
    tableMenu.style.display = 'none';
    tableOrders.style.display = 'none';
    tableHistory.style.display = 'block';
    editUserForm.style.display = 'none';
    editDepartForm.style.display = 'none';
    editFoodForm.style.display = 'none';
    editMenuForm.style.display = 'none';
}

// //////////////////////////////////////////////////////

backUserBtn = document.querySelector('.backUserBtn'),
editUserForm = document.querySelector('.editUserForm');

Array.from(document.querySelectorAll('.editUser'), function(el){
    el.onclick = function(){
        openEditUser();
    }
  })

backUserBtn.addEventListener('click', closeEditUser);

function openEditUser() {
    tableUsers.style.display = 'none';
    editUserForm.style.display = 'block';
}

function closeEditUser() {
    tableUsers.style.display = 'block';
    tableDepart.style.display = 'none';
    tableFood.style.display = 'none';
    tableMenu.style.display = 'none';
    tableOrders.style.display = 'none';
    tableHistory.style.display = 'none';
    editUserForm.style.display = 'none';
}

// //////////////////////////////////////////////////////

backDepartBtn = document.querySelector('.backDepartBtn'),
editDepartForm = document.querySelector('.editDepartForm');

Array.from(document.querySelectorAll('.editDepart'), function(el){
    el.onclick = function(){
        openEditDepart();
    }
})

backDepartBtn.addEventListener('click', closeEditDepart);

function openEditDepart() {
    tableDepart.style.display = 'none';
    editDepartForm.style.display = 'block';
}

function closeEditDepart() {
    tableDepart.style.display = 'block';
    editDepartForm.style.display = 'none';
}

// //////////////////////////////////////////////////////

backFoodBtn = document.querySelector('.backFoodBtn'),
editFoodForm = document.querySelector('.editFoodForm');

Array.from(document.querySelectorAll('.editFood'), function(el){
    el.onclick = function(){
        openEditFood();
    }
})

backFoodBtn.addEventListener('click', closeEditFood);

function openEditFood() {
    tableFood.style.display = 'none';
    editFoodForm.style.display = 'block';
}

function closeEditFood() {
    tableFood.style.display = 'block';
    editFoodForm.style.display = 'none';
}

// //////////////////////////////////////////////////////

backMenuBtn = document.querySelector('.backMenuBtn'),
editMenuForm = document.querySelector('.editMenuForm');

Array.from(document.querySelectorAll('.editMenu'), function(el){
    el.onclick = function(){
        openEditMenu();
    }
})

backMenuBtn.addEventListener('click', closeEditMenu);

function openEditMenu() {
    tableMenu.style.display = 'none';
    editMenuForm.style.display = 'block';
}

function closeEditMenu() {
    tableMenu.style.display = 'block';
    editMenuForm.style.display = 'none';
}





