const body = document.body;
const contentToChange = document.getElementById('contentToChange')
const contentContainer = document.getElementById('contentContainer');
let currentActiveButton = null;
let currentActiveButtonClick = null;

contentContainer.addEventListener("click", e => e.stopPropagation());

function OpenContent(content, event, object){
    event.stopPropagation();
    if (currentActiveButton) {
        currentActiveButton.classList.remove('active');
        currentActiveButton.onclick = currentActiveButtonClick;
    }
    object.classList.add('active')
    currentActiveButtonClick = object.onclick;
    object.onclick = CloseContent;
    currentActiveButton = object;
    contentContainer.style.opacity = 1;
    contentToChange.innerText = content;
}
    

function CloseContent(){
    if (currentActiveButton) {
        currentActiveButton.classList.remove('active');
        currentActiveButton.onclick = currentActiveButtonClick;
    }
    contentContainer.style.opacity = 0;
}
body.addEventListener("click", CloseContent);




