const ocular = document.querySelector('#ocular');
    
function createContent(data) {
const content = `
<img src="https://my-ocular.jeffalo.net/api/user/${data.name}/picture" alt="profile picture" class="image" width="111" height="111">
<div class="information">
    <h2>Status</h2>
    <p class="status" style="background-color: ${data.color};">${data.status}</p>
</div>
`;
ocular.insertAdjacentHTML('beforeend', content);
}

fetch('https://my-ocular.jeffalo.net/api/user/PoIygon')
.then(response => response.json())
.then(data => createContent(data))
.catch((error) => console.log(error));