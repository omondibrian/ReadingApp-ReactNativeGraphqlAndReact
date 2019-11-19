const express = require('express');
const GraphQLHttp = require('express-graphql');
const cors = require('cors')
const schema = require('./schema/schema')
const app = express();
app.use(cors());
app.get('/',(req,res) =>{

})
app.use('/graphql', GraphQLHttp({
    schema:schema,
    graphiql:true
}))
app.listen(4000,()=>{console.log('listening on port 4000 ....')})