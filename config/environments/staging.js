module.exports = {
    PORT: process.env.PORT,
    DB: {
        user: 'postgres',
        password: 'secret-password',
        database: 'school_stage',
        host: 'localhost',
        dialect: 'postgres'
    }
}