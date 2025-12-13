
async function addUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    await fetch('/add', {
        method : 'post',
        header : {'Content-Type' : 'application/json'},
        body: JSON.stringify({name, email})
})


async function loadUsers() {
    const res = await fetch('/all')
    const users = await res.json()
    document.getElementById('users').innerHTML = 
    users.map(i => `$(i.name) and ${i.email}`)
}


loadUsers();
} 