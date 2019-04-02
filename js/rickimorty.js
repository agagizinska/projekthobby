console.log("Wybierz postać!")
let selectElement;

const  fetchCharacters = async () => {
    const charactersData = await fetch('https://rickandmortyapi.com/api/character').then(data =>data.json()).then(data => data.results);
    populateCharactersSelect(charactersData);
    
}
const populateCharactersSelect = (character) => {
    selectElement = document.querySelector('.character-selector');
    const characterOptions = character.map(character => {
        const optionElement = document.createElement('option');
        optionElement.value = character.id;
        optionElement.label = character.name; 
        optionElement.textContent = character.name;
        return optionElement;
    })
    characterOptions.forEach(characterOption => {
        selectElement.appendChild(characterOption);
    });
}
const fillCharacterImage = (imageUrl) => {
    document.querySelector('.character-image').setAttribute('src', imageUrl);

}
const fillCharacterName = (name) => {
    document.querySelector('.character-name').setAttribute('src', name);
 }

const getCharacterByName = async(characterId) => {
    const data = await fetch('https://rickandmortyapi.com/api/character/' + characterId).then(data => data.json());
    console.log(data);
    const { image } = data; 
    fillCharacterImage(image);
}


 const changeCharacter = () => {
     console.log("Zmieniam postać!");
     console.log(event.target.value);
     getCharacterByName(event.target.value);
 }



 fetchCharacters();
