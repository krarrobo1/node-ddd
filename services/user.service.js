const { toDomainEntity } = require('../domain/mappers');
const { toDbEntity } = require('../dal/mappers');
class UserService{
    constructor({UserRepository}){
        this._userRepository = UserRepository;
    }
    async getUsers(){
        const users = await this._userRepository.getUsers();
        return users.map(toDomainEntity);
    }
    async createUser(user){
        user = toDbEntity(user);
        const created = await this._userRepository.createUser(user);
        return created;
    }
}
module.exports = UserService;