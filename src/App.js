import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    return (
      <div className="wholeForm">
        <div className="form-component">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label htmlFor="firstName" className="col-sm-2 col-form-label">
                Vardas
              </label>
              <div className="col">
                <input
                  type="text"
                  id="firstName"
                  className="form-control"
                  placeholder="Vardas"
                />
              </div>
              <label htmlFor="lastName" className="col-sm-2 col-form-label">
                Pavardė
              </label>
              <div className="col">
                <input
                  type="text"
                  id="lastName"
                  className="form-control"
                  placeholder="Pavardė"
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Lytis
              </label>
              <div className="col-sm-10">
                <select className="custom-select">
                  {this.state.genders.map(item => (
                    <option value={item.gender}>{item.gender}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Amžius
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Amžius"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                El.paštas
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="El.paštas"
                />
              </div>
            </div>
            <div className="form-group row">
              <legend className="col-form-label col-sm-2 pt-0">Pomėgiai</legend>
              <div className="col-sm-10">
                <div className="form-check">
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
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-2">Pirmenybė</div>
              <div className="col-sm-10">
                <div className="form-check">
                  {this.state.prioritys.map(item => (
                    <label key={item.key}>
                      {item.priority}
                      <input
                        type="checkbox"
                        name={item.priority}
                        checked={this.state.myPriorityChoices.get(
                          item.priority
                        )}
                        onChange={this.handlePriorityChange}
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Pasirinkite šalį
              </label>
              <div className="col-sm-10">
                <select
                  className="custom-select"
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
            </div>
            <div className="form-group row">
              <div className="col-sm-2">
                Pasirinkite daugiausiai šalies lankomas vietas
              </div>
              <div className="col-sm-10">
                <div className="form-check">
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
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Prisijunkite arba kurkite komandą
              </label>
              <div className="col-sm-10">
                <select className="custom-select" ref={this.login}>
                  <option value="join">Join</option>
                  <option value="createTeam">Create team</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <input
                  type="submit"
                  value="Registruotis"
                  className="btn btn-primary"
                />
              </div>
            </div>

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
        <div id="navigacija">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="#">
                Kelionės
              </a>
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Pagrindinis <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Apie mus
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Nuotraukos
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Paieška"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Paieška
                </button>
              </form>
            </div>
          </nav>
        </div>

        <div id="po_navigacijos">
          <div className="jumbotron">
            <h1 className="display-4">Keliaukime kartu!</h1>
            <p className="lead">
              Šis puslapis skirtas mėgstantiems keliauti kartu su naujais
              draugais <br></br>Pasaulis nuotabus... <br></br> Keliaukime po jį
              kartu!
            </p>
            <hr className="my-4" />
            <p>Spausk registruotis ir rask bendrakeleivį</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Registruotis
            </a>
          </div>
        </div>

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <blockquote className="blockquote">
              <p className="mb-0">
                <em>Tūkstančio mylių kelionė prasideda pirmuoju žingsniu</em>
              </p>
              <footer className="blockquote-footer">
                Lao Tzu<cite title="Source Title"></cite>
              </footer>
            </blockquote>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                width="715"
                height="402"
                src="https://www.youtube.com/embed/OycYHUdAWfQ"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="media">
              <img
                src="https://i.forbesimg.com/media/lists/places/austria_200x200.jpg"
                className="mr-3"
                alt="..."
              />
              <div className="media-body">
                <h5 className="mt-0">Austrija</h5>
                Slidininkų Meka tituluojama Austrija vilioja ne tik aukščiausios
                klasės žiemos kurortais, bet ir pasakiško grožio gamta, žilą
                istoriją menančiais statiniais ir unikaliu kultūriniu paveldu.
                Austrija maloniai nustebins kiekvieną atvykstantį.
                <br />
                <a href="#" className="btn btn-primary stretched-link">
                  Skaityti daugiau
                </a>
                <div className="media mt-3">
                  <a className="mr-3" href="#">
                    <img
                      src="https://i.forbesimg.com/media/lists/places/france_200x200.jpg"
                      className="mr-3"
                      alt="..."
                    />
                  </a>
                  <div className="media-body">
                    <h5 className="mt-0">Prancūzija</h5>
                    Prancūzija – turistų lankomiausia šalis pasaulyje,
                    kiekvienais metais sulaukianti virš 75 milijonų svečių iš
                    atokiausių Žemės kampelių. Ir visai ne veltui, juk šalies
                    kultūrinis, architektūrinis ar meno palikimas yra
                    neišsemiamas, o lyriški kraštovaizdžiai užburia ir suvirpina
                    iki pat sielos gelmių.
                    <br />
                    <a href="#" className="btn btn-primary stretched-link">
                      Skaityti daugiau
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="media">
              <img
                src="https://travelishq.in/wp-content/uploads/2017/06/SP1-200x200.jpg"
                className="mr-3"
                alt="..."
              />
              <div className="media-body">
                <h5 className="mt-0">Ispanija</h5>
                Saulėtoji Ispanija – koridos ir flamenko gimtinė, viliojanti
                keliautojus istoriniu ir kultūriniu paveldu, nuostabia gamta bei
                puikiais kurortais, kuriuose mėgautis saule ir šilta jūra galima
                praktiškai ištisus metus. Kelionės į Ispaniją – tikra atgaiva
                kūnui ir sielai.
                <br />
                <a href="#" className="btn btn-primary stretched-link">
                  Skaityti daugiau
                </a>
                <div className="media mt-3">
                  <a className="mr-3" href="#">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwcfMvN6vUuFdyLU6wly4fjG03a4K1up1Yq3aoB4QmlIKT0hZS"
                      className="mr-3"
                      alt="..."
                    />
                  </a>
                  <div className="media-body">
                    <h5 className="mt-0">Japonija</h5>
                    Kitaip žinoma kaip “tekančios saulės šalis”, įspūdingoji
                    Japonija, kasmet pritraukia milijonus keliautojų iš viso
                    pasaulio. Čia galima patirti tobulą sintezę tarp senovės ir
                    dabarties laikmečių. Nuostabi architektūra, nepatirta
                    tolimųjų rytų kultūra bei nepažinti, tačiau malonūs ir šilti
                    Japonijos žmonės nepalieka abejingų.
                    <br />
                    <a href="#" className="btn btn-primary stretched-link">
                      Skaityti daugiau
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-group">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Rekvizitai</h5>
              <p className="card-text">
                UAB „Keliaukime kartu“ <br></br> Įmonės kodas: 134073886{" "}
                <br></br> PVM mokėtojo kodas: LT340738812
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Kontaktai</h5>
              <p className="card-text">
                (8-45) 460 322 <br></br> info@keliaukimekartu.lt <br></br>{" "}
                Laisvės a. 23, Panevėžys LT-35200
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Turite klausimų?</h5>
              <p className="card-text">Parašykite mums</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
