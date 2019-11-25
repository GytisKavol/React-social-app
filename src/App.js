import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      title: "",
      users: [],
      travels: [],
      myHobbyChoices: new Map(),
      myPriorityChoices: new Map(),
      myPlacesChoices: new Map(),
      hobbys: [],
      prioritys: [],
      genders: [],
      places: []
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
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.textInput = React.createRef();
    this.onHandlePlaces = this.onHandlePlaces.bind(this);
  }

  onHandlePlaces(countryId) {
    const data = { countryId };
    fetch("http://localhost:3000/api/places", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          places: result
        });
      })
      .catch(e => console.log(e));
  }
  handleSubmit(event) {
    event.preventDefault();
    const myPlaceList = [];
    const myHobbyList = [];
    const myPriorityList = [];
    this.state.myPlacesChoices.forEach((item, name) => {
      myPlaceList.push(name);
    });
    this.state.myHobbyChoices.forEach((item, name) => {
      myHobbyList.push(name);
    });
    this.state.myPriorityChoices.forEach((item, name) => {
      myPriorityList.push(name);
    });

    this.setState({
      value1: this.firstName.current.value,
      value2: this.lastName.current.value,
      value3: this.age.current.value,
      value4: this.email.current.value,
      value5: this.login.current.value,
      value6: this.genders.current.value,

      myPlaceList: myPlaceList,
      myHobbyList: myHobbyList,
      myPriorityList: myPriorityList
    });

    const data = { myPlaceList, myHobbyList, myPriorityList };

    fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          users: result
        });
      })
      .catch(e => console.log(e));
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/travels")
      .then(res => res.json())
      .then(result => {
        this.setState({
          travels: result
        });
      })
      .catch(e => console.log(e)),
      fetch("http://localhost:3000/api/hobbys")
        .then(res => res.json())
        .then(result => {
          this.setState({
            hobbys: result
          });
        })
        .catch(e => console.log(e)),
      fetch("http://localhost:3000/api/prioritys")
        .then(res => res.json())
        .then(result => {
          this.setState({
            prioritys: result
          });
        })
        .catch(e => console.log(e)),
      fetch("http://localhost:3000/api/genders")
        .then(res => res.json())
        .then(result => {
          this.setState({
            genders: result
          });
        })
        .catch(e => console.log(e));
  }
  handleHobbyChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({
      myHobbyChoices: prevState.myHobbyChoices.set(item, isChecked)
    }));
  }
  handleVisitingChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({
      myPlacesChoices: prevState.myPlacesChoices.set(item, isChecked)
    }));
  }
  handlePriorityChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({
      myPriorityChoices: prevState.myPriorityChoices.set(item, isChecked)
    }));
  }
  handleChange(event) {
    this.setState({
      title: event.target.value
    });
  }
  render() {
    console.log(this.state.users);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="firstName">
            <label>
              First name:
              <input type="text" ref={this.firstName} />
            </label>
          </div>
          <div className="lastName">
            <label>
              Last name:
              <input type="text" ref={this.lastName} />
            </label>
          </div>
          <div className="gender">
            Gender:
            <select id="genders" ref={this.genders}>
              {this.state.genders.map(item => (
                <option key={item.id}>{item.gender}</option>
              ))}
            </select>
          </div>
          <div className="age">
            <label>
              Age:
              <input type="text" ref={this.age} />
            </label>
          </div>
          <div className="email">
            <label>
              Email:
              <input type="email" ref={this.email} />
            </label>
          </div>
          <div className="thingsLike">
            Hobbies :
            {this.state.hobbys.map(item => (
              <label key={item.key}>
                {item.hobby}

                <input
                  type="checkbox"
                  name={item.hobby}
                  checked={this.state.myHobbyChoices.get(item.hobby)}
                  onChange={this.handleHobbyChange}
                />
              </label>
            ))}
          </div>
          <div className="thingsDislike">
            Priority :
            {this.state.prioritys.map(item => (
              <label key={item.key}>
                {item.priority}
                <input
                  type="checkbox"
                  name={item.priority}
                  checked={this.state.myPriorityChoices.get(item.priority)}
                  onChange={this.handlePriorityChange}
                />
              </label>
            ))}
          </div>
          <div className="chooseCountry">
            Choose the country
            <select
              id="countries"
              name="title"
              value={this.state.title}
              // onChange={this.handleChange.bind(this)}
              onChange={e => this.onHandlePlaces(e.target.value)}
            >
              {this.state.travels.map(item => (
                <option key={item.id} value={item.id}>
                  {item.country}
                </option>
              ))}
            </select>
          </div>
          <div className="visitingCountry">
            <label>
              Choose most visited places in the country:
              {this.state.places.map(item => (
                <label key={item.key}>
                  {item.title}
                  <input
                    type="checkbox"
                    name={item.title}
                    checked={this.state.myPlacesChoices.get(item.title)}
                    onChange={this.handleVisitingChange}
                  />
                </label>
              ))}
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
            <select id="matchingPerson">
              {this.state.users.map(item => (
                <option key={item.id}>
                  {item.FirstName} {item.LastName}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
