const input = document.querySelector('input')
const enterBtn = document.querySelector('.enter')
const clearBtn = document.querySelector('.delete')
const list = document.querySelector('.your-tasks ul')
const yourTasks = document.querySelector('.your-tasks h2')
const completedList = document.querySelector('.completed-tasks ul')
const completedTasks = document.querySelector('.completed-tasks h2')
const unchecked = ['fa-regular', 'fa-square']
const checked = ['fa-solid', 'fa-check-square']
let checkedCount = 0


function addTasks () {
  const task = input.value
  const li = document.createElement('li')
  const span = document.createElement('span')
  const icon = document.createElement('i')
  
  icon.classList.add(...unchecked)
  span.classList.add('fa-li')
  span.appendChild(icon)

  li.textContent = task
  li.appendChild(span)
  list.appendChild(li)

  list.hasChildNodes() ? yourTasks.textContent = 'Your tasks:' : yourTasks.textContent = '' 
  icon.addEventListener('click', (e) => {
    if (icon.classList.contains(...unchecked)) {
      icon.classList.remove(...unchecked)
      icon.classList.add(...checked)
      li.style.textDecoration = 'line-through'
      checkedCount++
      completedTasks.textContent = `Completed ${checkedCount} task${checkedCount > 1 ? 's' : ''}`
      completedList.appendChild(li)
       list.hasChildNodes() ? yourTasks.textContent = 'Your tasks:' : yourTasks.textContent = '' 
    } else {
      icon.classList.remove(...checked)
      icon.classList.add(...unchecked)
      li.style.textDecoration = 'none'
      checkedCount--
      completedTasks.textContent = `Completed ${checkedCount} task${checkedCount > 1 ? 's' : ''}`
      if (checkedCount === 0) completedTasks.textContent = ''
      list.appendChild(li)
      list.hasChildNodes() ? yourTasks.textContent = 'Your tasks:' : yourTasks.textContent = '' 
    }
  })
  input.value = ''
  input.focus()
}

function clearTasks() {
  const allListItems = document.querySelectorAll('li')
  allListItems.forEach(li => {
    li.remove()
  })
  yourTasks.textContent = ''
  completedTasks.textContent = ''
  checkedCount = 0

}

input.addEventListener('change', addTasks)
clearBtn.addEventListener('click', clearTasks)
let clickCount = 0
enterBtn.addEventListener('click', () => {
  clickCount++
  if (clickCount === 5) {
    alert('this button actually doesn\'t do anything. try clicking elsewhere dummy')
  }
})
