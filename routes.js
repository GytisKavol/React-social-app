const UserApiController = require('./controllers/UserApiController')
const userApiController = new UserApiController()
const HobbyController = require('./controllers/HobbyController')
const hobbyController = new HobbyController()


module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('home')
    })
    app.get('/api/users', userApiController.getUsers)
    app.get('/api/travels', userApiController.getTravels)
    app.post('/api/places', userApiController.getPlaces)
    app.get('/api/hobbys', hobbyController.getHobbys)
    app.get('/api/prioritys', hobbyController.getPrioritys)
    app.get('/api/genders', hobbyController.getGenders)
    app.post('/api/user',userApiController.findUser)
    app.post('/api/travel', userApiController.findTravel)
    return app
}
