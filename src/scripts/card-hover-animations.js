function handleMouseEnter(){
    console.log('Handle mouse enter ')
}

function addEventListenersToCards(){
    const cardElements = document.getElementsByClassName('s-card');

    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements [index];
        card.addEventListener('mouseenter', handleMouseEnter)

        
    }
    
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);