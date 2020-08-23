module.exports = {
    PORT: process.env.PORT,
    DB: {
        username: 'postgres',
        password: 'secret-password',
        database: 'school_prod',
        host: 'localhost',
        dialect: 'postgres'
    }
}