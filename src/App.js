import React, {Component} from 'react'


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {firstValue: '',
                      secondValue: '',
                      thridValue:'',
                      fourthValue:'',
                      fifthValue:'',
                      sixthValue:'',
                      seventhValue:'',
                      eightValue:'',
                      ninthValue:'',
                      tenthValue:'',
                      users: [],
                      places:[]};
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.gender = React.createRef();
        this.age = React.createRef();
        this.thingsYouLike = React.createRef();
        this.email = React.createRef();
        this.login = React.createRef();
        this.country = React.createRef();
        this.countryMostVisited = React.createRef();
        this.thingsYouDislike = React.createRef();
        this.textInput = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this)
      }
    handleSubmit(event) {
        this.setState({ 
          firstValue: this.firstName.current.value, 
          secondValue: this.lastName.current.value,
          thridValue: this.gender.current.value,
          fourthValue: this.age.current.value,
          fifthValue: this.thingsYouLike.current.value,
          sixthValue: this.email.current.value,
          seventhValue: this.login.current.value,
          eightValue: this.country.current.value,
          ninthValue: this.countryMostVisited.current.value,
          tenthValue: this.thingsYouDislike.current.value,
        } )
        event.preventDefault();
      }
 
      componentDidMount(){
        this.setState({ 
          eightValue: this.country.current.value,
          
          })
      }
      componentDidMount(){
        fetch("http://localhost:3000/api/places")
        .then(res => res.json())
        .then(result => {
            this.setState({
                places: result
            })
        })
        .catch(e => console.log(e))

        fetch("http://localhost:3000/api/users")
        .then(res => res.json())
        .then(result => {
            this.setState({
                users: result
            })
        })
        .catch(e => console.log(e))
      }
/*    
      componentDidUpdate(eightValue, country) {
        if(this.country.current.value !== this.state.eightValue ){
          eightValue = this.state.eightValue
          country = this.country.current.value
          console.log(this.country.current.value)
          console.log(this.state.eightValue)
          console.log(eightValue)
          console.log(country)
        }
      }
      */ 
render(){
    let visitedPlaces = '';
    let matchingPerson= '';
    let dislike = '';
    let chosenCountry = '';

    dislike = this.state.tenthValue
    chosenCountry = this.state.eightValue

      this.state.places.map((place,i) =>
      {
        place.visitingPlacesList
        if (chosenCountry === place.vistingPlaceCountry)
        {
          {
            visitedPlaces = 
            <select> 
              <option>{place.visitingPlacesList}</option> 
            </select>
          }
        }
      }
      )


       this.state.users.map(function(item)
       {
          if(item.country === chosenCountry)
          {
            if( dislike !== item.thingsYouLike)
            {
            matchingPerson = <li>Vardas: {item.firstName} <br></br> pavardė: {item.lastName}<br></br>
            Lytis: {item.gender} <br></br> Amzius: {item.age}<br></br>
            Pomegiai: {item.thingsYouLike} <br></br> Nenorimi dalykai: {item.thingsYouDislike}<br></br>
            Pastas: {item.email} <br></br> Lankoma salis: {item.country}, {item.countryMostVisited}<br></br>
            </li>    
            }
          }
        })

       
    return (
        <div>
        <form onSubmit={this.handleSubmit} >
                   
        <div>
        
        <label>
          First name:
          <input type="text" ref={this.firstName}  />
        </label>
        </div>
       <div>
        <label>
          Last name:
          <input type="text" ref={this.lastName}  />
        </label>
        </div>
        <div>
        <label>
          Gender:
          <select ref={this.gender}>
      <option value="male">Male</option>
      <option value="female">Female</option>
          </select>
        </label>
        </div>
        <div>
        <label>
          Age:
          <input type="text" ref={this.age}  />
        </label>
        </div>
        <div>
        <label>
          Things you like to do:
          <input type="text" ref={this.thingsYouLike}  />
        </label>
        </div>
        <div>
        <label>
          Things you dislike:
          <input type="text" ref={this.thingsYouDislike}  />
        </label>
        </div>
       <div>
        <label>
          Email:
          <input type="email" ref={this.email}  />
        </label>
        </div>
        <div>
          Join or create a team
          <select ref={this.login}>
      <option value="join">Join</option>
      <option value="createTeam">Create team</option>
          </select>
          </div>
        <div>
          Choose the country
          <select ref={this.country}>
      <option value="Lithuania">Lithuania</option>
      <option value="France">France</option>
      <option value="Germany">Germany</option>
      <option value="Spain">Spain</option>
          </select>
          </div>
        
      <div ref={this.countryMostVisited}>
      <div>
        Choose most visited places in the country
      {visitedPlaces}
      </div>
      </div>
     <input type="submit" value="Submit" />
      </form >
    
        <div >
        <div>
        {matchingPerson}
        </div>
        
        </div>
        </div>
    )
}
}


export default App