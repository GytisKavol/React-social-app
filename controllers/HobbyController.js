class HobbyController {
    constructor(){
        this.getHobbys = this.getHobbys.bind(this)
        this.getPrioritys = this.getPrioritys.bind(this)
        this.getGenders = this.getGenders.bind(this)

    }
    
_hobbysList(){
    return [
        
        {
            id: 1, 
            hobby: 'Sport'
        }, 
        {
            id: 2, 
            hobby: 'NailArt'
        }, 
        {
            id: 4, 
            hobby: 'Climbing'
        }, 
        {
            id: 5, 
            hobby: 'Rideing'
        },
        {
            id: 6, 
            hobby: 'Drive'
        },
        {
            id: 7, 
            hobby: 'Walk'
        },
        {
            id: 8, 
            hobby: 'Swim'
        },
        {
            id: 9, 
            hobby: 'Programming'
        },
        {
            id: 10, 
            hobby: 'ToCookFood'
        },
        {
            id: 11, 
            hobby: 'Cars'
        }
        
        
]}

getHobbys(req, res, next){ 
   
    return res.json(this._hobbysList())
} 

_prioritysList(){
    return [
        
        {
            id: 1, 
            priority: 'NotOlderThan24Years'
        }, 
        {
            id: 2, 
            priority: 'NotOlderThan21Years'
        }, 
        {
            id: 4, 
            priority: 'OnlyWomen'
        }, 
        {
            id: 5, 
            priority: 'OnlyMen'
        },
        {
            id: 6, 
            priority: 'WithoutCats'
        },
        {
            id: 7, 
            priority: 'WithoutDogs'
        },
        {
            id: 8, 
            priority: 'WithoutPets'
        },

]}

getPrioritys(req, res, next){ 
   
    return res.json(this._prioritysList())
} 
_gendersList(){
    return [
        
        {
            id: 1, 
            gender: 'Male'
        }, 
        {
            id: 2, 
            gender: 'Female'
        }, 

]}

getGenders(req, res, next){ 
   
    return res.json(this._gendersList())
} 

}
module.exports = HobbyController