class UserApiController {
    constructor(){
        this.getUsers = this.getUsers.bind(this)
        this.getPlaces = this.getPlaces.bind(this)
        this.findUser = this.findUser.bind(this)
    }
    
    _userList() {
        return[
             {id:1, 
            firstName: 'Jonas', 
            lastName: 'Grybas', 
            gender: 'Male', 
            age: '29', 
            thingsYouLike: 'Swimming', 
            thingsYouDislike: 'Cats', 
            email: 'Jonas@email.com', 
            country: 'Germany', 
            countryMostVisited: 'Berlin'},
            {id:2, 
            firstName: 'Ernestas', 
            lastName: 'Arlauskas', 
            gender: 'Male', 
            age: '33', 
            thingsYouLike: 'Running', 
            thingsYouDislike: 'Dogs', 
            email: 'Ernestas@email.com', 
            country: 'Lithuania', 
            countryMostVisited: 'Alytus'},
            {id:3, 
                firstName: 'Gytis', 
                lastName: 'Kavoliunas', 
                gender: 'Male', 
                age: '22', 
                thingsYouLike: 'Waling', 
                thingsYouDislike: 'Birds', 
                email: 'Gytis@email.com', 
                country: 'Lithuania', 
                countryMostVisited: 'Alytus'}
        ] 
    }
    
    _visitingPlacesList() {
        return[
            {id: '1',
            vistingPlaceCountry:'Lithuania',
            visitingPlacesList:['Alytus','Ignalina','Panevezys']},

            {id: '2',
            vistingPlaceCountry:'Germany',
            visitingPlacesList:['Berlin','Frankfurt','Dortmund']},
        
            {id: '3',
            vistingPlaceCountry:'France',
            visitingPlacesList:['Paris','Nice','Bordoux']},

            {id: '4',
            vistingPlaceCountry:'Spain',
            visitingPlacesList:['Toledo','Barcelona','Madrid']},
        ]
    }




    getUsers(req, res, next){
        const users = this._userList()
        return res.json(users)
    }
    getPlaces(req, res, next){
        const places = this._visitingPlacesList()
        return res.json(places)
    }
    findUser(req, res, next){
        const userId = parseInt(req.body.userId) || 0
        const users = this._userList()
        const amount = users.length
        let result = {}
        for (let i = 0; i < amount; i++) {
            let user = users[i]
            if (user.id == userId){
                result = user
                break
            }
        }
        return res.json(result)
    }
}
module.exports = UserApiController
