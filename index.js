
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

