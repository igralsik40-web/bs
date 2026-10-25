//fetch, api
const conatiner = document.getElementById("conatiner")

function getUsers() {
     conatiner.innerHTML = "Загрузка"

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(users => {
                console.log(users)
                conatiner.innerHTML = users.map(el => `
        <div>
        <h3>${el.name}</h3>
        <h4>${el.email}</h4>
        </div>
        `).join("")
            })
}

getUsers()
