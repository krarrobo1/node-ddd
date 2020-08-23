const { User } = require('../index');

module.exports = {
    toDomainEntity(user){
        const { id, name, lastname } = user
        return new User({ id, name, lastname });
    }
}