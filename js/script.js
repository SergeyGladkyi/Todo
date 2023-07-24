const boardParent = document.querySelector('.board-wrap')
const btnAdd = document.querySelector('.input_wrap__btn-add')
const inputText = document.querySelector('.input_wrap__inpt')
const container = document.querySelector('.container')

// поиск модального окна 
const PopUpWrap = document.querySelector('.creatPopUp_wrap')
const PopUp = document.querySelector('.creatPopUp')
const btnClosePopUp = document.querySelector('.btn_creatPopUp')
const overlay = document.querySelector('.overlay')

// поиск елементов внутри модального окна
const creatPopUpTextarea = document.querySelector('.creatPopUp_textarea')
const bcreatPopUpBtnSave = document.querySelector('.creatPopUp__btn-save')

let toDoArray = []
const arr2 = toDoArray.splice('')
console.log(arr2)

inputText.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        if (inputText.value === '') return // Если значание инпута пусто то ни чего не выводим
        
        const toDo = document.createElement('div') // Создал блок 
        toDo.classList.add('board_wrap__added')  // Добавил стили нашему блоку
        boardParent.appendChild(toDo) // Добавил блок в родетеля
        
        const creatTextarea = document.createElement('textarea') // Создал текстАреа в котором будет значения инпута
        creatTextarea.classList.add('creatTextarea') // Добавил стили текстАреа
        toDo.appendChild(creatTextarea) // Добавли параграф в наш ново-созданый блок
        creatTextarea.textContent = inputText.value // Добавляю значения в текстАреа todo
        inputText.value = '' // Стираю занчачения инпута
        
        creatTextarea.addEventListener('keyup', function() {
            if(creatTextarea.scrollTop > 0) {
                creatTextarea.style.height = creatTextarea.scrollHeight + "px"
            }
        })
        
        
        // создаем кнопку удаления to do (remove)
        const deleteToDo = document.createElement('button') // Создал саму кнопку удаления
        deleteToDo.textContent = 'delete' // Подписал кнопку удаления
        deleteToDo.classList.add('board_wrap__added-btn-remove') // Добавли стили кнопку удаления
        toDo.appendChild(deleteToDo) // Добавли кнопку в ново-созданый блок
        
        // Создаем функционал кнопки удаления 
        deleteToDo.addEventListener('click', function() {
            this.parentElement.remove(toDo)  // По клику удаляем toDo
        })
        
        
        // Создаем кнопку редактировать 
        const editTodo = document.createElement('button') // Создал кнопку редактировать
        creatTextarea.disabled = true  // Добавил атрибут disabled что бы textArea не был активный
        editTodo.textContent = 'edit' // подписал кнопку редактировать 
        editTodo.classList.add('board_wrap__added-btn-remove') // Добавил стили кнопке редактировать
        toDo.appendChild(editTodo) // Добавил кнопку редактировать в нова-созданый блок
        
        // Создаем функционал  
        editTodo.addEventListener('click', function() {
            creatTextarea.disabled = false  // Манипуляция атрибутов через DOM
        })    
    }
})


btnAdd.addEventListener('click', function() {
    if (inputText.value === '') return // Если значание инпута пусто то ни чего не выводим
    
    
    const toDo = document.createElement('div') // Создал блок 
    toDo.classList.add('board_wrap__added')  // Добавил стили нашему блоку
    boardParent.appendChild(toDo) // Добавил блок в родетеля
    
    
    const creatP = document.createElement('p') // Создал текстАреа в котором будет значения инпута
    creatP.classList.add('creatP') // Добавил стили текстАреа
    toDo.appendChild(creatP) // Добавли параграф в наш ново-созданый блок
    creatP.textContent = inputText.value // Добавляю значения в текстАреа todo
    localStorage.setItem('name', inputText.value) // Сохраняем значения инпута в хранилище
    localStorage.getItem('name')
    
    toDoValue = creatP.textContent = inputText.value
    arr2.push(toDoValue)

    inputText.value = '' // Стираю занчачения инпута
    
    
    // creatTextarea.addEventListener('keyup', function() {
        //     if(creatTextarea.scrollTop > 0) {
            //         creatTextarea.style.height = creatTextarea.scrollHeight + "px"
            //     }
            // })
            
            // // создаю блок где буду наши кнопки
            // const createFeleblock = document.createElement('div')
            // createFeleblock.classList.add('createFeleblock')
            // toDo.appendChild(createFeleblock)
            
            
            // создаем кнопку удаления to do (remove)
            const deleteToDo = document.createElement('button') // Создал саму кнопку удаления
            deleteToDo.textContent = 'delete' // Подписал кнопку удаления
            deleteToDo.classList.add('board_wrap__added-btn-remove') // Добавли стили кнопку удаления
            toDo.appendChild(deleteToDo) // Добавли кнопку в ново-созданый блок
            
            // Создаем функционал кнопки удаления 
            deleteToDo.addEventListener('click', function() {
                this.parentElement.remove(toDo)  // По клику удаляем toDo
            })
            
            // Создаем кнопку редактировать 
            const createEdit = document.createElement('button')
            createEdit.classList.add('board_wrap__added-btn-edit')
            createEdit.textContent = 'edit'
            toDo.appendChild(createEdit)
            
            // По клике на редактировать всплывает модальное окно
            createEdit.addEventListener('click', function() {
                PopUp.style.display = 'block'
                overlay.style.display = 'block'
                
                btnClosePopUp.addEventListener('click', function() {
                    PopUp.style.display = 'none'
                    overlay.style.display = 'none'
        })

        let arr3 = arr2.forEach((el) => {
            creatPopUpTextarea.append(el) // !!!!!!!!!
        })
        
        
        
    })
       
})





