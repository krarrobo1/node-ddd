class UserController{
    constructor({ UserService }){
        this._userService = UserService;
     }
    
    async getUsers(req, res){
        console.log();
        const users =  await this._userService.getUsers();
        return res.send({
            ok: true,
            data: users
        })
    }

    async createUser(req, res){
        const { body } = req;
        const createdUser = await this._userService.createUser(body, { attributes: ['name', 'lastname']});
        return res.send({
            ok: true,
            data: createdUser
        })
    }
}

module.exports = UserController;