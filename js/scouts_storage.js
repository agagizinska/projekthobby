import scouts from '../assets/data.js' 

const STORAGE_KEY = "teams";

export const addTeamToStorage = id => {
    const teamToAdd = scouts.find(team => team.id == id);
    const teamInStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(teamInStorage) {
        // tu już było klikane na LIKE
        teamInStorage.push(teamToAdd);
        const uniqueIds = [...new Set(teamInStorage.map(team => team.id))];
        const uniqueTeams = scouts.filter(scoutTeam => uniqueIds.includes(scoutTeam.id));
        localStorage.setItem(STORAGE_KEY, JSON.stringify(uniqueTeams));
    }
    else {
        // tu nie było klikane
        localStorage.setItem(STORAGE_KEY, JSON.stringify([teamToAdd]));
    }

}

export const getTeamsFromStorage = () => {
    const dataStorage = JSON.parse(localStorage.getItem(STORAGE_KEY)  || "[]");
    return dataStorage; 
}

export const removeTeamsFromStorage = (id) => {
    const teamsOutFromStorage = getTeamsFromStorage();
    const newArray = teamsOutFromStorage.filter(team => team.id != id);
    // wykrzyknik to zaprzeczenie
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newArray));

}


