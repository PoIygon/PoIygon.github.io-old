const wrapper = document.querySelector('#about');
    
function createContent(data) {
const content = `
    <h1>About</h1>
    <p>Hello! Im &nbsp;<a href="https://scratch.mit.edu/users/${data.username}">${data.username}</a>. Im a person on scratch that goes on the forums and rarely makes projects on scratch.</p>
    <p>i have ${data.statistics.loves} love-its, ${data.statistics.favorites} favorites and ${data.statistics.views} views. I have over 1k posts on the scratch discussion forums and a former the forum helpers member.</p>
`;
wrapper.insertAdjacentHTML('beforeend', content);
}

fetch('https://scratchdb.lefty.one/v3/user/info/PoIygon')
.then(response => response.json())
.then(data => createContent(data))
.catch((error) => console.log(error));