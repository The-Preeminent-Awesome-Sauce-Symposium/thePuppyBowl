const playerContainer = document.getElementById('all-players-container');
const team1Container = document.getElementById('team1-container');
const team2Container = document.getElementById('team2-container');

const cohortName = '2302-ACC-ET-WEB-PT-E';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;
//https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-E/players


const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${APIURL}players`);
        const players = await response.json();
        //console.log(players);
        return players;
    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};

const renderAllPlayers = (playerList) => {
    try {
        playerContainer.innerHTML = '';
        playerList.data.players.forEach((player) => {
            const playerElement = document.createElement('div');
            playerElement.classList.add('player');
            player.teamId = "No Team";
            playerElement.innerHTML = `
                <img src=${player.imageUrl}>
                <h2>${player.name}</h2>
                <p>${player.breed}</p>
                <button class="button1" data-id="${player.id}">Add to Team 1</button><br>
                <button class="button2" data-id="${player.id}">Add to Team 2</button>
            `;
            playerContainer.appendChild(playerElement);

            const team1Button = playerElement.querySelector('.button1');
            team1Button.addEventListener('click', async (event) =>{
                try {
                    //console.log("Team 1");
                    renderSinglePlayer1(player.id);
                } catch (error) {

                }
            });

            const team2Button = playerElement.querySelector('.button2');
            team2Button.addEventListener('click', async (event) =>{
                try {
                    //console.log("Team 2");
                    renderSinglePlayer2(player.id);
                } catch (error) {

                }
            });

        });
    } catch (err) {
        console.error('Uh oh, trouble rendering players!', err);
    }
};

const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}players/${playerId}`);
        const singlePlayer = await response.json();
        console.log(singlePlayer);
        return singlePlayer;
    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

const renderSinglePlayer1 = async (playerId) => {
    try {
        const singlePlayer = await fetchSinglePlayer(playerId);
        const playerDetailsElement = document.createElement('div');
        playerDetailsElement.classList.add('player-details');
        playerDetailsElement.innerHTML = `
                <img src=${singlePlayer.data.player.imageUrl}>
                <h2>${singlePlayer.data.player.name}</h2>
                <p>${singlePlayer.data.player.breed}</p>
                <button class="remove1" data-id="${singlePlayer.id}">Remove from Team</button>
        `;
        team1Container.appendChild(playerDetailsElement);
    } catch (err) {
        console.error(`Oh no, trouble rendering player #${playerId}!`, err);
    }  
};

const renderSinglePlayer2 = async (playerId) => {
    try {
        const singlePlayer = await fetchSinglePlayer(playerId);
        const playerDetailsElement = document.createElement('div');
        playerDetailsElement.classList.add('player-details');
        playerDetailsElement.innerHTML = `
                <img src=${singlePlayer.data.player.imageUrl}>
                <h2>${singlePlayer.data.player.name}</h2>
                <p>${singlePlayer.data.player.breed}</p>
                <button class="remove2" data-id="${singlePlayer.id}">Remove from Team</button>
        `;
        team2Container.appendChild(playerDetailsElement);
    } catch (err) {
        console.error(`Oh no, trouble rendering player #${playerId}!`, err);
    }  
};

const init = async () => {
    const players = await fetchAllPlayers();
    renderAllPlayers(players);
}

init();