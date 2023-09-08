
const tabs = document.querySelectorAll('.ref-item a');
const tabContent = document.querySelectorAll('.tab-page');

tabs.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        
        const target = element.getAttribute('href').substring(1)

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


const timeStamps = document.querySelectorAll('.stamp')
const storyPanels = document.querySelectorAll('.story-panel')

timeStamps.forEach(function(stamp){
    
    stamp.addEventListener('click',function(stampChange){
        timeStamps.forEach(function(each){
            each.classList.remove('active-stamp')
        })
        stamp.classList.add('active-stamp')

        storyPanels.forEach(function(story){
            story.classList.remove('current-story')
        })

        const date = document.getElementById(`${stamp.id}`)
        date.classList.add('current-story')
    })
});


const wordCloud = document.getElementById("word-cloud")
const wordItems = document.querySelectorAll("#word-item")

/* 
|||||||||||||||||||||||||||||||||||||||||||||||||||
Word Cloud Area
|||||||||||||||||||||||||||||||||||||||||||||||||||
*/

const border = 50

function getRandomFont(){
    const fontSize = [36]
    const index = Math.floor(Math.random()*fontSize.length)
    return fontSize[index]
}
getRandomFont()

/* stores the values of the attributes of all
<p> items in here so we can check to see
if we can input random in a new area.
*/


function getRandomNumber(min, max) {
    const randomDecimal = Math.random();
    const randomNumber = min + randomDecimal * (max - min);
    return Math.floor(randomNumber); // Use Math.floor to get an integer
}

function getRandomNumberNotInRanges(ranges, minRangeHeight, maxRangeHeight, minRangeWidth, maxRangeWidth) {
    let numHeight = getRandomNumber(minRangeHeight, maxRangeHeight);
    let numWidth = getRandomNumber(minRangeWidth, maxRangeWidth);
    while (isInRanges(numHeight, numWidth, ranges)){
        numHeight = getRandomNumber(minRangeHeight, maxRangeHeight);
        numWidth = getRandomNumber(minRangeWidth, maxRangeWidth);
    };

    ranges.push({
        min: numHeight, 
        max: numHeight + 50, 
        minw: numWidth, 
        maxw: numWidth + 50,
    })
    console.log(ranges)

    return [numHeight, numWidth];
}

function isInRanges(numHeight, numWidth, ranges) {
    for (const range of ranges) {

        console.log(range.min)
        console.log(numHeight)
        if(range.min < numHeight + 25){
            if(range.max > numHeight - 25){
                return true
            }
        if(range.minw < numWidth + 25){
            if(range.maxw > numWidth -25){
                return true
            }
        }
    }
}
    // //   if (((numHeight - 20) >= range.min && (numHeight+20) <= range.max)){

    // //     // && (numWidth >= range.minw && numWidth <= range.maxw)
    //     return true;
    //   }
    // }
    // return false;
  }

const ranges =[
]


function setPosition(paragraph, index){


    const randomNums =getRandomNumberNotInRanges(
        ranges, 
        wordCloud.offsetTop+border,
        (wordCloud.offsetHeight+wordCloud.offsetTop-border), 
        wordCloud.offsetLeft+border, 
        (wordCloud.offsetHeight+wordCloud.offsetLeft-border)
    )
    
    paragraph.style.position = "absolute";
    paragraph.style.top = `${randomNums[0]}px`;
    paragraph.style.left = `${randomNums[1]}px`;
    paragraph.style.fontSize = `${getRandomFont()}px`
    paragraph.id = (`cloudItem${index}`)
}


function moveRandom(element) {
    // Generate random values for translation
    const randomX = Math.random() * 20 - 10; // Random value between -10 and 10
    const randomY = Math.random() * 20 - 10; // Random value between -10 and 10
  
    // Apply the random translation to the element
    element.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }
  
  // Reset the translation when the mouse leaves the element
  function resetTranslation(element) {
    element.style.transform = 'translate(0, 0)';
  }

wordItems.forEach((paragraph,index) => {
    setPosition(paragraph, index)
    const element = document.getElementById(`cloudItem${index}`)

    element.addEventListener('mouseover', () => {
        moveRandom(element);
    });


      
});
