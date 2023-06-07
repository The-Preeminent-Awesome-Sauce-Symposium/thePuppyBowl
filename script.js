//DECLARATIONS:


const loox = document.getElementById('template');
const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');




// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder: 
// **********
// **********
// **********
const cohortName = `2302-ACC-ET-WEB-PT-E/players`;
const id = `id`;
// Use the APIURL variable for fetch requests|^^^___________VVVVVVVV|
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


//      https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-E/players
// **********
// **********


/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */


//===========================================================
//Players Fetch "call" to   ***  GET ALL OBJECTS ARRAY***   :
//===========================================================
const fetchAllPlayers = async () => {
    try {                     // ^^^array of objects^^^
        const response = await fetch(`${APIURL}`); // Get is default!
        const lePlayer = await response.json();
        //console check:
        console.log(lePlayer);
//Output:
    return lePlayer;
//Error Catch:
        } catch (error) {
        console.error('Uh oh, trouble fetching players!', error);
                      }
};


//================================================================
//Single Player details Fetch "call" to   ***  GET 1 Object ***   :
//=================================================================




const fetchSinglePlayer = async (playerId) => {
    try {                     // ^^^object^^
        const response = await fetch(`${APIURL}/${id}`); // Get is default!
        const lePlayer = await response.json();
        //console check:
        console.log(lePlayer);

    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};


//============================================
//Players Fetch "call" to *** POST to API ***:
//=============================================
const addNewPlayer = async (playerObj) => {
    try {            // ^^ OBJECT TO **MAP**^^
        const response = await fetch(`${APIURL}/${id}`, {method: 'POST'}); // Get is default!
        const lePlayer = await response.json();
        //console check:
        console.map(lePlayer); // <---MAP print out all data and then log
    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
};



//========================================================
// Single Player Fetch "call" to *** DELETE from API ***:
//========================================================
const removePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}/${id}`, {method: 'DELETE'}); // Get is default!
        const lePlayer = await response.json();
        //console check:
        console.log(lePlayer);
    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
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
const renderAllPlayers = (players) => {
    try {
        
        // playerContainer.innerHTML = 'test1 innerHTML';
        // playerList.forEach(player => {
        //   const playerDeets = document.createElement('div');
        //   playerDeets.classList.add('playerContainer');
        //   playerDeets.innerHTML = `
        //             <h2>${player.name}</h2>code 
        //             <p>${player.breed}</p>
        //             <p>${player.teamId}</p>
        //             <p>${player.cohortId}</p>
        //             <button class="details-button" value="">See Details</button>
        //             <button class="delete-button" value="${player.id}">Delete</button>
        //             <button class="add-button" value03="${player.id}">Add</button>
        //         `;
        //   playerContainer.appendChild(playerDeets)
          
        // });
        
        const container = document.getElementById('song-container'); 

  // transform each element of the array songs 
  players.forEach(id => {
      const playerDeets = document.createElement('div');
      playerDeets.innerHTML = id.name
      container.appendChild(playerDeets)
  });


    // RENDER ARRAY LIST(PLAYERS) OF --> OBJECTS(PLAYERS and DETAILS)
    // Make first console output here
    // make horizontal scroll display of players and column list as side navigation. 
    //log out onto column and pillar nav bar. CSS popup with side nav bar.
    //
        
    } catch (error) {
        console.error('Uh oh, trouble rendering players!', error);
        window.alert(`***Render allPlayer Function test!***
                            ***Le Failure to load!***        
                    Uh oh, trouble rendering players!`);
    }
};


/**
 * It renders a form to the DOM, and when the form is scd ..ubmitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
const renderNewPlayerForm = async (players) => {
    try {
        
         
        //RENDER original Home Site logo bar (async); Init or start function.
        //then
        //RENDER SINGLE OBJECT(PLAYER) and its properties.
        //add HOME BUTTON for beginning of page Logo.
        //or
        //RENDER ENTIRE FORM for new player.
        //add HOME BUTTON for beginning of page Logo.
        //

        // place other form in here.
        // place form in div directly underneath upper scroll bars justified upper left of bottom right quadrant.
        // ________________________________________________________________
        // |^^^^^^^^^^^|^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 
        // | CURRENT   | Horizontal PIX scroll  (renderAllPlayers Function 02)
        // | PLAYER    |__Bar_____________________________________________________
        // |___________|  
        // |___________|  Current Player 
        // |NAV________|         OR
        // |BAR________|    Player
        // |COLUMN_____|        Form (renderNewPlayerForm Function)
        // |___________|
        // |Function 01|
        // |___________|

    } catch (err) {
        console.error('Uh oh, trouble rendering the new player form!', err);
    }
}

const init = async () => {
try{
    loox.innerHTML = 
    `
    <nav>
    <table>
    <tr>
    <th>PLAYER NAME <br>
    AND <br>
    LOGO<br></th>
    <th>horizontal nav bar function goes here</th>
    </tr>
    
    <tr>
    <td>column list01<br>
    column list 02<br>
    column list 03<br>
    column list 04<br>
    column list 05<br>
    column list 06<br>
    column list 07<br>
    column list 08<br>
    column list 09<br>
    column list 10<br>
    column list 11<br>
    column list 12<br>
    </td>

    <td id = "pix"><h1>pictures info and form go here</h1></td>
    </tr>

    </table>
    </nav>
    `

    const players = await fetchAllPlayers();
    console.log(players)
    renderAllPlayers(players);
} catch (err) {
    console.log('Uh oh, trouble rendering INIT!', err)
  } 
    // renderNewPlayerForm();
}

init();
