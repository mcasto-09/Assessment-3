import express from 'express'
import session from 'express-session'
import morgan from 'morgan'
import nunjucks from 'nunjucks'

const app = express()
const port = '8000'

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.static)
app.use(session({
    secret: 'shh',
    saveUninitialized: true,
    resave: false
}))
nunjucks.configure('views', {
    autoescape:true,
    express: app,
})

app.listen(port, () => {
    console.log(`App is listening on port http://localhost:${port}`)
})