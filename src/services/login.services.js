const login = require('login')


class loginservices {
    async loginuser (data){
        return await login.create(data)
    }
}

module.exports = new loginservices()