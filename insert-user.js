const { User } = require('./models')

User.create({
    firstName: 'ricky',
    lastName: 'ariansyah',
    email: 'admin',
    password: 'admin'
   })
    .then(result => {
      console.log(result)
})

