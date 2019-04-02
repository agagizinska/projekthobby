import scouts from "../assets/data.js"
// .. - dwie kropki przenoszą nas do folderu "powyżej"
import { addTeamToStorage } from './scouts_storage.js' 

console.log(scouts);


const section = document.querySelector('.scouts_store');
const createTitleElement = (name, number) => {
    const cardTitleElement = document.createElement('h1');
    cardTitleElement.textContent = `${name} (${number})`; 
    return cardTitleElement;
}

const createPoster = (imgUrl) => {
    const image = document.createElement('img');
    image.setAttribute('src', imgUrl);
    image.classList.add('team_poster'); 
    return image; 
}

const createPlace = (place) => {
    const cardPlace = document. createElement('p');
    cardPlace.textContent = `${place}`;
    cardPlace.classList.add('team_place');
    return cardPlace;
}

const createFavoriteButton = (onClickFn) => {
    const button = document.createElement('button');
    button.textContent = 'like';
    button.classList.add('like_button');
    button.onclick = onClickFn;
    return button; 

}


const scoutsCardElements = scouts.map(team => {
    const teamWrapper = document.createElement('div');
    teamWrapper.setAttribute('class', 'team_Wrapper');
    teamWrapper.appendChild(createTitleElement(team.name, team.number));
    teamWrapper.appendChild(createPoster(team.image));
    teamWrapper.appendChild(createPlace(team.place));
    teamWrapper.appendChild(createFavoriteButton (
        () => addTeamToStorage(team.id)
    ));
    return teamWrapper;
} );

scoutsCardElements.forEach(element => section.appendChild(element));