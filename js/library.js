import { getTeamsFromStorage, removeTeamsFromStorage } from './scouts_storage.js';

const list = document.querySelector('.library');

const buildLibrary= () => {
    const favoriteTeams = getTeamsFromStorage();
    const listItemElements = favoriteTeams.map(team => {
        const listItem = document.createElement('li');
        listItem.classList.add('fav-item');
        const title = document.createElement('p');

            const button = document.createElement('button');
            button.textContent = 'dislike';
            button.classList.add('dislike_button');
            button.onclick = () => {
                removeTeamsFromStorage(team.id);

                while(list.firstChild) {
                    list.removeChild(list.firstChild);
                }
                buildLibrary();
            };
       
        title.textContent = team.name;
        
        listItem.appendChild(title);
        listItem.appendChild(button);
        return listItem;
    }); 

    listItemElements.forEach(item => {
        list.appendChild(item);
    })
}
buildLibrary();
