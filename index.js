import express, { json } from 'express'
import checkAuth from './utils/checkAuth.js'
import mongoose from 'mongoose'
import {registerValidation} from './validations/auth.js'
import { login, me, register } from './controllers/UserController.js'
import * as TireController  from './controllers/TireController.js'

mongoose
.connect('mongodb+srv://dinar19966:13759450@cluster.xecn9.mongodb.net/')
.then(() => console.log('DB ok'))
.catch((err) => console.log('DB error', err))


const app = express();

app.use(express.json())

app.get('/', (req,res) => {
    res.send('Hi')
})

app.post('/auth/register', registerValidation, register);
app.post('/auth/login', login);
app.get('/auth/me', checkAuth, me);

app.get('/tires', TireController.getAll )
app.get('/tires/:name', TireController.getOne )
app.post('/tires', checkAuth, TireController.create  )
app.delete('/tires', checkAuth, TireController.remove  )
// app.patch('/tires', checkAuth, TireController.patchTire ) в разработке

app.listen(4444, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('Сервер запущен')
})
