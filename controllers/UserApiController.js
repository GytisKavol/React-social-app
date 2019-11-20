class UserApiController {
    constructor(){
        this.getUsers = this.getUsers.bind(this)
        this.getTravels = this.getTravels.bind(this)
        this.getPlaces = this.getPlaces.bind(this)
        this.findUser = this.findUser.bind(this)
        this.findTravel = this.findTravel.bind(this)
        this.findPlace = this.findPlace.bind(this)

    }
    
    _travelsList(){
        return [
            {
                id: 1, 
                country: 'Marokas', 
                places: [
                    {
                        id: 1, title: 'Kasablanka'
                    },
                    {
                        id: 2, title: 'Marakešas'
                    }
                ]
            },
            {
                id: 2, 
                country: 'Kanada', 
                places:[
                    {
                        id: 1, title:'Kvebeko trasa'
                    },
                    {
                        id: 2, title:'Pasienio kriokliai'
                    }
                ]
            },
            {
                id: 3, 
                country: 'Japonija', 
                places:[
                    {
                        id: 1, title:'Tokyo Sky Tree'
                    },
                    {
                        id: 2, title:'Sensodzi budistų šventykla'
                    }
                ]
            },
            {
                id: 4, 
                country: 'Portugalija', 
                places:[
                    {
                        id: 1, title:'Komportos kaimas'
                    },
                    {
                        id: 2, title:'Douro upės slėnis'
                    }
                ]
            },
            {
                id: 5, 
                country: 'Meksika', 
                places:[
                    {
                        id: 1, title:'Gvanachuatas'
                    },
                    {
                        id: 2, title:'Akapulkas'
                    }
                ]
            },
            {
                id: 6,
                country: 'Vietnamas',
                places:[
                    {
                        id: 1, title:'Ha Long įlanka'
                    },
                    {
                        id: 2, title:'Hanojus'
                    }
                ]
            },
            {
                id: 7, 
                country: 'Pietų Afrika', 
                places:[
                    {
                        id: 1, title:'Franschhoek vynuogynai'
                    },
                    {
                        id: 2, title:'Krugerio nacionalinis parkas'
                    }
                ]
            },
            {
                id: 8, 
                country: 'Indija',
                places:[
                    {
                        id: 1, title:'Virupaksha šventykla'
                    },
                    {
                        id: 2, title:'Tadž Mahalas'
                    }
                ]
            },
            {
                id: 9, 
                country: 'Turkija', 
                places:[
                    {
                        id: 1, title:'Karaalioglu'
                    },
                    {
                        id: 2, title:'Hadriano vartai'
                    },
                    {
                        id: 3, title:'Termessos'
                    }
                ]
            },
            {
                id: 10,
                country: 'Naujoji Zelandija',
                places:[
                    {
                        id: 1, title:'Kuko kalno nacionalinis parkas'
                    },
                    {
                        id: 2, title:'Mėnulio krateriai'
                    }
                ]
            },
            {
                id: 11, country: 'Australija', places:[
                    {
                        id: 1, title:'Bangos uola'
                    },
                    {
                        id: 2, title:'Karališkasis kanjonas'
                    },
                    {
                        id: 3, title:'Sidnėjaus operos teatras'
                    }
                ]
            },
            {
                id: 12, 
                country: 'Graikija', 
                places:[
                    {
                        id: 1, title:'Korfu sala'
                    },
                    {
                        id: 2, title:'Navagio paplūdimys'
                    }
                ]
            },
            {
                id: 13, country: 'Ispanija', places:[
                    {
                        id: 1, title:'Barselonos jūrų muziejus'
                    },
                    {
                        id: 2, title:'Alhambra'
                    }
                ]
            },
            {
                id: 14, 
                country: 'Amerika', 
                places:[
                    {
                        id: 1, title:'Amerikos Metropoliai'
                    },
                    {
                        id: 2, title:'Antilopės kanjonas'
                    }
                ]
            },
            {
                id: 15, 
                country: 'Prancūzija', 
                places:[
                    {
                        id: 1, title:'Eliziejaus laukai'
                    },
                    {
                        id: 2, title:'Eifelio bokštas'
                    }
                ]
            },
            {
                id: 16, 
                country: 'Italija', 
                places:[
                    {
                        id: 1, title:'San Džiminjano'
                    },
                    {
                        id: 2, title:'Pizos bokštas'
                    }
                ]
            }
    ]
    }
    getTravels(req, res, next){ 
        const travels= this._travelsList().map(item=>{
            return {
                id:item.id,
                country:item.country
            }
        })
        return res.json(travels)
    }  
     
    getPlaces(req, res, next){ 
        const countryId = req.params.countryId
        let places = []
        this._travelsList().forEach(items=>{
            if(countryId==items.id){
               places=items.places
            }
           
        })
      
        return res.json(places)
    }   

   findTravel(req, res, next) {
        const  travelId = parseInt(req.body.travelId) || 0
        const  travels = this._travelsList()
        const  amount = travels.length
        let result = {}
        for (let i = 0; i < amount; i++) {
            let travel = travels[i].places
            if (travel.id == travelId){
                result = travel
                break
            }
        }
        return res.json(result)
   }
   
_usersList(){
    return [
        
        {id: 1, FirstName: 'Simona', LastName: 'Komandierienė', age: '23', gender: 'women', hobby: ['Sport', 'Swim', 'Drive'], email: 'simona@panko.lt', priority: ['WithoutDogs'], choices: ['Kasablanka']},
        {id: 2, FirstName: 'Monika', LastName: 'Ileikytė', age: '23', gender: 'women', hobby: ['NailArt', 'Sport', "Programming"], email: 'monika@panko.lt', priority: ['WithoutCats', 'OnlyWomen'], choices: ['Hanojus']},
        {id: 3, FirstName: 'Martyna', LastName: 'Jaugaitė', age: '24', gender: 'women', hobby: [''], email: 'martyna@panko.lt', priority: [''], choices: ['Alhambra']},
        {id: 4, FirstName: 'Matas', LastName: 'Vitkauskas', age: '21', gender: 'men', hobby: ['NailArt', 'ToCookFood', 'Climbing'], email: 'matas@panko.lt', priority: ['WithoutPets'], choices: ['San Džiminjano']},
        {id: 5, FirstName: 'Andrius', LastName: 'Maličevas', age: '21', gender: 'men', hobby: ['Climbing'], email: 'audrius@panko.lt', priority: ['OnlyMen','WithoutDogs'], choices: ['Eifelio bokštas']},
        {id: 6, FirstName: 'Paulius', LastName: 'Šeštokas', age: '21', gender: 'men', hobby: ['Cars', 'Sport', 'Drive'], email: 'paulius@panko.lt', priority: ['OnlyWomen'], choices: ['Korfu sala']},
        {id: 7, FirstName: 'Audrius', LastName: 'Šimoliūnas', age: '24', gender: 'men', hobby: ['Programming', 'Sport'], email: 'audrius@panko.lt', priority: ['NotOlderThan24Years'], choices: ['Tadž Mahalas']},
        {id: 8, FirstName: 'Aivaras', LastName: 'Klydžia', age: '21', gender: 'men', hobby: [''], email: 'aivaras@panko.lt', priority: [''], choices: ['Termessos']}
]
}

getUsers(req, res, next){ 
    // JSON.parse()
    //requre.body
    const myHobbyChoices = ["NailArt", "Programming", "Sport"]
    const myPlacesChoices = ["Hanojus", "Kasablanka"]
    const myPriorityChoices = ["WithoutCats"]

    const similarUsers = []
    myHobbyChoices.forEach(myChoice => {
        this._usersList().forEach(item => {
            let userFound = false
            let usersHobbies = item.hobby


            let even = (element) => element == myChoice;
            let isUserHasHobby = usersHobbies.some(even)

            if (isUserHasHobby) {

                let isUserWantToPlaces = false
                let usersPlaces = item.choices
                userFound = false
               
                myPlacesChoices.forEach(place => {
                    userFound = false
                    let even = (element) => element == place;
                    isUserWantToPlaces = usersPlaces.some(even)
                   

                    if (isUserWantToPlaces) {

                        let isUserHasPrioritys = false
                        let usersPrioritys = item.priority

                        myPriorityChoices.forEach(priority => {
                            userFound = false
                            let even = (element) => element == priority;
                            isUserHasPrioritys = usersPrioritys.some(even)
                            if (isUserHasPrioritys) {

                                similarUsers.forEach(usr => {
                      
                                    if (usr.id == item.id) userFound = true
                                })
                            
                                if (!userFound)
                                    similarUsers.push(item)

                            }

                        })

                       
      
                  } 

                })
            }

        })
        
})
   
    return res.json(similarUsers)
}   

findUser(req, res, next) {
    const  userId = parseInt(req.body.userId) || 0
    const  users = this._usersList()
    const  amount = users.length
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
findPlace(req, res, next) {
    const  countryId = parseInt(req.body.countryId) || 0
    const  places = this._travelsList()
    const  amount = places.length
    let result = {}
    for (let i = 0; i < amount; i++) {
        let place = places[i]
        if (place.id == countryId){
            result = place
            break
        }
    }
    return res.json(result)
}
}

module.exports = UserApiController