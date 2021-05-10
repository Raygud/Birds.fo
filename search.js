function dropdownChange()    {
    var Eyes=document.getElementById("Eyes").value; 
    
    

    if(Eyes==="0")  {  
        var path = "http://127.0.0.1:5500/improvedbirds.html"
    }

    if(Eyes==="1")  {  
        var path = "http://127.0.0.1:5500/Redeye.html"
    } 

    

    

const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let birds = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = birds.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.Family.toLowerCase().includes(searchString) || 
            character.Status.toLowerCase().includes(searchString)||
            character.Plumage.toLowerCase().includes(searchString)||
            character.Eyes.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});
alert(path);
const loadCharacters = async () => {
    try {
        const res = await fetch(path);
        birds = await res.json();
        displayCharacters(birds);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character" >
            <a href="birds/${character.name}.html" style="color: inherit;
            text-decoration: none;"><h2>${character.name}</h2></a>
                <p1 class="latin">Scientific: ${character.Latín}</p1>
                <p1>Family: ${character.Family}</p1>
                <p2>Status: ${character.Status}</p2>
                <img src="imgs/${character.image}"></img>
                <audio controls >
  <source src="sounds/${character.name}.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();

}
