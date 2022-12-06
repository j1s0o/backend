import dotenv from 'dotenv'

dotenv.config()

const MONGO_OPTIONS = {
    useUnifiedTopology : true,
    useNewUrlParser : true,
    socketTimeout : 30000,
    keepAlive : true,
    poolSize  : 50,
    autoIndex : false,
    retryWrites: false
}

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.Server_Port) : 1337

const SERVER_USERNAME = process.env.SERVER_USERNAME || 'j1s0o'
const SERVER_PASSWORD = process.env.SERVER_PASSWORD || 'j1s0o'
const MONGO_URL = `mongodb+srv://${SERVER_USERNAME}:${SERVER_PASSWORD}@cluster0.uokxjnk.mongodb.net/?retryWrites=true&w=majority`

export const config = {
    mongo: {
        url : MONGO_URL
    },
    server : {
        port : SERVER_PORT
    }
}