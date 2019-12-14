const user = ''

const getUser = (user) => fetch(`https://api.github.com/users/${user}/repos`).then(res => res.json())

export default {
    getUser
}
