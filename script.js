const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2302-ACC-ET-WEB-PT-E';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
const fetchAllPlayers = async () => {
    try {
         const response = await fetch( API_URL)
      const players = await response.json();
      return players;

    } catch (err) {
        console.error(error);
    }
};

const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch (`${API_URL}/${Id}`);
      const player= await response.json();
      return player
 } catch (err) {
        console.error( err);
    }
};

const addNewPlayer = async (playerObj) => {
    try {
        const response =await fetch (`${API_URL}/${id}`) `,{
       method: 'POST',
        });

          const addedNewPlayer = await response.json();
          return addedNewPlayer;
        
        } catch (err) {
        console.error( err);
    }
};

const removePlayer = async (playerId) => {
    try {
       const response = await fetch (`${API_URL}/${id}`, {
         method: 'REMOVE', 
        });
         const removedPlayer =await response.json();
         return removedPlayer;
       } catch (err) {
        console.error( err);
    }
};

/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 * player, then adds that string to a larger string of HTML that represents all the players. 
 * 
 * Then it takes that larger string of HTML and adds it to the DOM. 
 * 
 * It also adds event listeners to the buttons in each player card. 
 * 
 * The event listeners are for the "See details" and "Remove from roster" buttons. 
 * 
 * The "See details" button calls the `fetchSinglePlayer` function, which makes a fetch request to the
 * API to get the details for a single player. 
 * 
 * The "Remove from roster" button calls the `removePlayer` function, which makes a fetch request to
 * the API to remove a player from the roster. 
 * 
 * The `fetchSinglePlayer` and `removePlayer` functions are defined in the
 * @param playerList - an array of player objects
 * @returns the playerContainerHTML variable.
 */
const renderAllPlayers = (playerList) => {
    try { 
        playerContainer.innerHTML= '';
         playerList.forEach((player) => {
       const playerElement = document.createElement('div');
       playerElement.classList.add('player');
        playerElement.innerHTML = `
        <h2>${player.name}</h2>
        <p>${player.breed}</p>
        <p>${player.weight}</p>
        <p>${player.status}</p> 
        <img scr =${player.image_url} class = img/>
        <p>${player.teamId}>/p> 
        <p>${player.cohortId}>/p> 

        <button class="details-button" data-id="${player.id}">See Details</button>
        <button class="remove-button" data-id="${player.id}">Remove from roster </button> `;

    playerContainer.appendChild(playerElement);

    const detailsButton = partyElement.getElementById('.details-button');
detailsButton.addEventListener('click', async (event) => {
  try {
    const id = event.target.dataset.id;
    renderPlayerById(id);
  }  catch (error) {
    console.error(error);
  }
});

    const removeButton = partyElement.getElementById('.remove-button');
    removeButton.addEventListener('click', async (event) => {
      try {
        const id = event.target.dataset.id;
        await removePlayer(id);
        const players = await fetchAllPlayers
      } catch (error) {
        console.error(error);
      }
    });
});
} catch (error) {
  console.error(error);
}
};
         
                   


/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
const renderNewPlayerForm = (playerId) => {
    try {
        
    } catch (err) {
        console.error('Uh oh, trouble rendering the new player form!', err);
    }
}

const init = async () => {
    const players = await fetchAllPlayers();
    renderAllPlayers(players);

    renderNewPlayerForm();
}

init();
