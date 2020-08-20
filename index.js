const container = require('./api/cointainer');

const app = container.resolve('app');

app.start().catch( err =>{
    console.log(err);
    process.exit();
})