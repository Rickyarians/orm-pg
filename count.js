const { User } = require('./models')

User.count().then(result => {
  console.log(result)
})
