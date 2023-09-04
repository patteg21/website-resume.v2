
const tabs = document.querySelectorAll('.ref-item a');
const tabContent = document.querySelectorAll('.tab-page');

tabs.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        
        const target = element.getAttribute('href').substring(1)

        console.log(target)
        tabContent.forEach(content=>{
            content.classList.remove('active')
        })

        document.getElementById(target).classList.add('active')
    })
});



const projects = document.querySelectorAll('.project')
let number = 0

const leftButton = document.getElementById('left-button')
const rightButton = document.getElementById('right-button')

leftButton.addEventListener('click', (event)=>{
    event.preventDefault();
    
    projects.forEach(project=>{
        project.classList.remove('current')
    })

    if(number === 0){
        number = projects.length - 1
        projects[number].classList.add('current')
    } else{
        number -= 1
        projects[number].classList.add('current')
    }

        projects[number].classList.add('current')
})

rightButton.addEventListener('click', (event)=>{
    event.preventDefault();
    
    projects.forEach(project=>{
        project.classList.remove('current')
    })

    if(number === projects.length - 1){
        number = 0
        projects[number].classList.add('current')
    } else{
        number += 1
        projects[number].classList.add('current')
    }

        projects[number].classList.add('current')
})
