import React, {Component} from 'react'

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {value1:'',
                      value2:'',
                      value3:'',
                      value4:'',
                      value5:'',
                      value6:'',
                      title:'',
                      users: [],
                      travels:[],
                      checkedHobbyItems: new Map(),
                      checkedPriorityItems: new Map(),
                      checkedVistingItems: new Map(),
                      hobbys:[],
                      prioritys:[],
                      genders:[],
                      places:[]
                    };

        this.hobbys = React.createRef();
        this.travels = React.createRef();

        this.prioritys = React.createRef();
        this.genders = React.createRef();
        this.places = React.createRef();


        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.age = React.createRef();
        this.thingsYouLike = React.createRef();
        this.email = React.createRef();
        this.thingsYouDislike = React.createRef();
        this.login = React.createRef();

        this.handleHobbyChange = this.handleHobbyChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleVisitingChange = this.handleVisitingChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this)
        this.handleChange = this.handleChange.bind(this);

        this.textInput = React.createRef();
        this.onHandleCurrentUser=this.onHandleCurrentUser.bind(this)
        this.onHandlePlaces=this.onHandlePlaces.bind(this)
    }
    onHandleCurrentUser(userId){

        const data={userId:userId}
        fetch("http://localhost:3000/api/user",{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            this.setState({
                currentUser:result
            })
        })
        .catch(e=>console.log(e));
    }
    onHandlePlaces(countryId){
      const data={countryId:countryId}
      fetch("http://localhost:3000/api/places/"+countryId,{
          method: 'POST',
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(result => {
          this.setState({
              places: result
          })
      })
      .catch(e=>console.log(e));
  }
    handleSubmit(event) {
        this.setState({ 
          value1: this.firstName.current.value, 
          value2: this.lastName.current.value,
          value3: this.age.current.value,
          value4: this.email.current.value,
          value5: this.login.current.value,
          value6: this.genders.current.value,
        } )
        event.preventDefault();
    }
    componentDidMount(){

        fetch("http://localhost:3000/api/users")
        .then(res => res.json())
        .then(result => {
            this.setState({
                users: result
            })
        })
        .catch(e => console.log(e)),

        
        fetch("http://localhost:3000/api/travels")
        .then(res => res.json())
        .then(result => {
            this.setState({
                travels: result
            })
        })
        .catch(e => console.log(e)),

        fetch("http://localhost:3000/api/hobbys")
        .then(res => res.json())
        .then(result => {
            this.setState({
                hobbys: result
            })
        })
        .catch(e => console.log(e)),

        fetch("http://localhost:3000/api/prioritys")
        .then(res => res.json())
        .then(result => {
            this.setState({
              prioritys: result
            })
        })
        .catch(e => console.log(e)),

        fetch("http://localhost:3000/api/genders")
        .then(res => res.json())
        .then(result => {
            this.setState({
              genders: result
            })
        })
        .catch(e => console.log(e))
    }
    handleHobbyChange(e) {
      const item = e.target.name;
      const isChecked = e.target.checked;
      this.setState(prevState => ({ checkedHobbyItems: prevState.checkedHobbyItems.set(item, isChecked) }));
    }
    handleVisitingChange(e) {
      const item = e.target.name;
      const isChecked = e.target.checked;
      this.setState(prevState => ({ checkedVistingItems: prevState.checkedVistingItems.set(item, isChecked) }));
    }
    handlePriorityChange(e) {
      const item = e.target.name;
      const isChecked = e.target.checked;
      this.setState(prevState => ({ checkedPriorityItems: prevState.checkedPriorityItems.set(item, isChecked) }));
    }
    handleChange(event) {
      this.setState({
        title: event.target.value
      })
    }

render(){
  const{currentUser}=this.state
  const{places}=this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit} onClick={e=>this.onHandleCurrentUser()}>               
          <div className="firstName">
            <label>
            First name:
            <input type="text" ref={this.firstName}  />
            </label>
          </div>
          <div className="lastName">
            <label>
            Last name:
            <input type="text" ref={this.lastName}  />
            </label>
          </div>
          <div className="gender">
            Gender:
          <select id="genders" ref={this.genders}>{
            this.state.genders.map(item => (
            <option key={item.id} >
            {item.gender}
            </option>
            ))
            }
            </select>
          </div>
          <div className="age">
            <label>
            Age:
            <input type="text" ref={this.age}  />
            </label>
          </div>
          <div className="email">
            <label>
            Email:
            <input type="email" ref={this.email}  />
            </label>
          </div>
          <div className="thingsLike">
            Hobbies : 
            {this.state.hobbys.map(item => (
            <label key={item.key}>
            {item.hobby}
            

            <input type="checkbox" name={item.hobby} checked={this.state.checkedHobbyItems.get(item.hobby)} onChange={this.handleHobbyChange}  />
            </label>
            ))
          
            }
          </div>
          <div className="thingsDislike">
            Priority : 

            {this.state.prioritys.map(item => (
             
            <label key={item.key} >
            {item.priority}
            
            <input type="checkbox" name={item.priority} checked={this.state.checkedPriorityItems.get(item.priority)} onChange={this.handlePriorityChange}  />
            
            </label>
          
            ))
            
            }

          </div>
          <div className="chooseCountry">
            Choose the country
            <select id="countries" name="title" value={this.state.title} onChange={this.handleChange.bind(this)} onChange={e=>this.onHandlePlaces()}>{
            this.state.travels.map(item => (
            <option key={item.id}>
            {item.country}
            </option>
            ))
            }
            </select>
          </div>
          <div className="visitingCountry">
          <label>
            Choose most visited places in the country:
            {this.state.places.map(item => 
            (
                <label key={item.key}>
                {item.id}
                <input type="checkbox" name={item.places} checked={this.state.checkedVistingItems.get(item.places)} onChange={this.handleVisitingChange}  />
           
            </label>
            ))
            }
            </label>

          </div>
          <div className="joinCreate">
            Join or create a team
            <select ref={this.login}>
            <option value="join">Join</option>
            <option value="createTeam">Create team</option>
            </select>
          </div>
          <input type="submit" value="Submit" />
          <div className="matchingPerson">

                <div>
                    {
                        currentUser && <div>{currentUser.id}</div>
                    }
                </div>
                <div>
                    {
                        places && <div>{places.id}</div>
                    }
                </div>
            </div>
          </form >
          </div>
    )
}
}


export default App