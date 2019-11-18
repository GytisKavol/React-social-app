const UserApiController = require('./controllers/UserApiController')
const userApiController = new UserApiController()


module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('home')
    })
    app.get('/api/users', userApiController.getUsers)
    app.get('/api/places', userApiController.getPlaces)
    app.post('/api/user', userApiController.findUser)
    return app
}
