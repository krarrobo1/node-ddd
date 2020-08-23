// Implementando inyeccion de dependencias
const { asClass, createContainer, asFunction, asValue } = require('awilix');
const StartUp = require('./startup');
const Server = require('./server');
const Routes = require('./routes');

const  UserRoutes  = require('./routes/user.routes');

const { UserService } = require('../services');
const { UserRepository } = require('../dal/repositories');
const { UserController } = require('./controllers');



const db = require('../dal/entities');
const config = require('../config/environments');


const container = createContainer();

// IoC
container
    .register({
        app: asClass(StartUp).singleton(),
        server: asClass(Server).singleton()
    })
    .register({
        UserController: asClass(UserController).singleton()
    })
    .register({
        router: asFunction(Routes).singleton()
    })
    .register({
        config: asValue(config)
    })
    .register({
        db: asValue(db)
    })
    .register({
        UserRoutes: asFunction(UserRoutes).singleton()
    })
    .register({
        UserService: asClass(UserService).singleton()
    })
    .register({
        UserRepository: asClass(UserRepository).singleton()
    });

module.exports = container;