const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(
  '881088275340-5230uo8sds3aonhekjhmbg53arru4l79.apps.googleusercontent.com'
)
app.use(bodyParser.json())
app.use(cors())
app.post('/api/google-login', async (req, res) => {
  const ticket = await client.verifyIdToken({
    idToken: req.body.token
  })
  res.status(200).json(ticket.getPayload())
  console.log(res.data)
})

app.get('/api/testing')

app.listen(8000, () => {
  console.log('Server is ready at http://localhost:7000')
})

// const express = require('express')
// const app = express()
// const port = 8000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
