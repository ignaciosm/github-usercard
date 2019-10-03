/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/




/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


// Add Axios Script to HTML (not working, fix later)

// let axiosScript = document.createElement("script");
// axiosScript.src ="https://unpkg.com/axios/dist/axios.min.js";
// let parentElement = document.querySelector('body');
// parentElement.insertBefore(axiosScript, script)

//  Get request

const entryPoint = document.querySelector(".cards");

axios.get('https://api.github.com/users/ignaciosm')
  .then(response => {
    // handle success
    console.log(response.data);

      data = response.data
      const newCard = myCard(data);
      entryPoint.appendChild(newCard);
    

  })
  .catch(error => {
    // handle error
    console.log(error);
  });

function myCard(data) {
  // const githubURL = `https://api.github.com/users/${githubUser}`

  const card = document.createElement('div');
  const img = document.createElement('img');
  const info = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const address = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.appendChild(img);
  card.append(info);
  info.appendChild(name);
  card-info.appendChild(username);
  card-info.appendChild(location);
  card-info.appendChild(profile);
  profile.appendChild(address);
  card-info.appendChild(followers);
  card-info.appendChild(following);
  card-info.appendChild(bio);
  
  card.classList.add('card');
  info.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  img.src = data.avatar_url;
  name.textContent = data.name;
  username.textContent = data.login;
  location.textContent = `Location: ${data.location}`;
  address.href = data.html_url;
  profile.textContent = `Profile: ${address}`; // the link is not working, TODO
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = `Bio: ${data.bio}`;

  return card;

}

// FOLLOWERS CARDS

axios.get('https://api.github.com/users/ignaciosm/followers')
  .then(response => {
    // handle success
    console.log(response.data);

    data = response.data
      data.forEach(item => {
        const newCard = myCard(item);
        entryPoint.appendChild(newCard);
      })
      

  })
  .catch(error => {
    // handle error
    console.log(error);
  });
