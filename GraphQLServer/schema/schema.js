
const { 
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');
const mongoose = require('mongoose');

const Book = require('../model/books');
const Author = require('../model/author');

const CONNECTION_STRING = 'mongodb://localhost:27017/gql';
const CONNECTION_OPTIONS = { useNewUrlParser: true };
//conect mongoDb
mongoose.connect(CONNECTION_STRING, CONNECTION_OPTIONS);
mongoose.connection.once('open', function () {
    console.log('connection made sucessfull');
   
}).on('error', function (error) {
    console.log('connection error:', error)
})




//book type
const BookType = new GraphQLObjectType({
    name:'Book',
    description: 'book type tracks all books in the api',
    fields:()=>({
        id: { type: GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
        author:{
            type:AuthorType,
            resolve:(parent,args)=>{
              return Author.findById(parent.authorId)
            }
        }
    })
})
//Author type
const AuthorType = new GraphQLObjectType({
    name:'Author',
    description:'author type tracks all authors',
    fields:()=>({
        id: { type: GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLInt},
        books:{
            type: new GraphQLList(BookType),
            resolve(parent,args){
              return Book.find({authorId:parent.id})
            }
        }
    })
})
//root queries
const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    description:'this is the root query of the graphical api',
    fields:{
        book:{
            type:BookType,
            description:'pass in the book id as a query parameter',
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                //code to get data from db/other source
             return Book.findById(args.id)
            }
        },
        author:{
            type:AuthorType,
            args:{id:{type:GraphQLID}},
            resolve:(parent,args)=>{
                return Author.findById(args.id)
            }
        },
        books:{
            type:new GraphQLList(BookType),
            resolve(){
              return Book.find({})
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve() {
             return Author.find({})
            }
        }

    }
})

const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addAuthor:{
            type:AuthorType,
            args:{
                name: { type: new GraphQLNonNull(GraphQLString)},
                age: { type: new GraphQLNonNull(GraphQLInt) }                
            },
            resolve(parent,args){
                let author = new Author({
                    name:args.name,
                    age:args.age
                });
               return author.save()
            }
        },
        addBook:{
            type:BookType,
            args:{
                name: { type:new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                authorId: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent,{name,genre,authorId}){
                let book = new Book({
                    name,genre,authorId
                });
               return book.save()
            }

        }
    }
})
module.exports = new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
})







 