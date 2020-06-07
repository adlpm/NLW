import express from 'express'
import routes from './routes'
import path from 'path'
import cors from 'cors'
import { errors } from 'celebrate'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors())

app.listen(3333)

// const users = [
//   'Andreza',
//   'Layme',
//   'Pifano',
//   'Moura',
//   'Dantas'
// ]

// app.get('/users', (request, response) => {
//   const search = String(request.query.search)
//   const filteredUsers = typeof search == 'string' ? users.filter(user => user.includes(search)) : users
//   response.json(filteredUsers)
// })

// app.get('/users/:id', (request, response) => {
//   const id = Number(request.params.id)
//   const user = users[id]

//   return response.json(user)
// })

// app.post('/users', (request, response) => {
//   const data = request.body
//   console.log(data)
//   const user = {
//     name: data.name,
//     email: data.email
//   }

//   return response.json(user)
// })
