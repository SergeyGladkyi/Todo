const boardParent = document.querySelector('.board-wrap')
const btnAdd = document.querySelector('.input_wrap__btn-add')
const inputText = document.querySelector('.input_wrap__inpt')





btnAdd.addEventListener('click', function() {
    
    const toDo = document.createElement('div') // Создал блок 
    toDo.classList.add('board_wrap__added')  // Добавил стили нашему блоку
    boardParent.appendChild(toDo) // ДОбавил блок в родетеля

    const creatP = document.createElement('p') // Создал параграф в котором будет значения инпута
    creatP.classList.add('board_wrap__added-text') // Добавил стили параграфу
    toDo.appendChild(creatP) // Добавли параграф в наш ново-созданый блок
    creatP.textContent = inputText.value // Добавляю значения в параграх todo
    inputText.value = '' // Стираю занчачения инпута
    
    // создаем кнопку удаления to do (remove)
    const deleteToDo = document.createElement('button') // Создал саму кнопку удаления
    deleteToDo.textContent = 'delete' // Подписал кнопку удаления
    deleteToDo.classList.add('board_wrap__added-btn-remove') // Добавли стили кнопку удаления
    toDo.appendChild(deleteToDo) // Добавли кнопку в ново-созданый блок
    
    // Создаем функционал кнопки удаления 
    deleteToDo.addEventListener('click', function() {
     this.parentElement.remove(toDo)  // По клику удаляем toDo
    })
})





    