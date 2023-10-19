import React, { Component } from "react";
import {
  Navbar,
  Logo,
  ImageLinkForm,
  Rank,
  Particle,
  FaceRecognition,
  SignIn,
  Register,
} from "./components/index";
// import Clarifai from "clarifai";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageURL: "",
      box: {},
      route: "SignIn",
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: "",
      },
    };
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  componentDidMount() {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then(console.log);
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box: box });
  };

  onInputChange = (e) => {
    // console.log(e.target.value);
    this.setState({ input: e.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageURL: this.state.input });
    //     "https://samples.clarifai.com/face-det.jpg"
    // -------------------------------
    // Clarifai API call
    const raw = JSON.stringify({
      user_app_id: {
        user_id: "c0jmvlpcw98a",
        app_id: "FaceDetection",
      },
      inputs: [
        {
          data: {
            image: {
              url: this.state.input,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key 2bc9a789dd604ff4b4f9947c1fa422db",
      },
      body: raw,
    };

    fetch(
      `https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`,
      requestOptions
    )
      .then((response) => response.text())
      // .then((response) => JSON.parse(response))
      // .then((result) => console.log("API call: " + result))
      .then(
        (result) =>
          // console.log("API call: " + result),
          JSON.parse(result)
        // console.log(JSON.parse(result))
        // (result) => console.log(JSON.parse(result))
      )
      .then((res) => {
        if (res) {
          fetch("http://localhost:3000/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            // ----
            .then((response) => response.json())
            .then((count) => {
              // this.setState(Object.assign(this.state.user, { entries: count }));
              this.setState({user: { entries: count }})
            });
          // --
        }
        // console.log(res.outputs[0].data.regions[0].region_info.bounding_box)
        this.displayFaceBox(this.calculateFaceLocation(res));
        //
      })
      // .then((result) => console.log("API call: " + JSON.parse(result)))
      .catch((error) => console.log("error", error));
    // console.log(typeof raw);
  };

  onRouteChange = (route) => {
    // this.setState({ route: route });
    if (route === "signOut") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, imageURL, route } = this.state;
    return (
      <div>
        <Particle />
        <Navbar onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
        {route === "home" ? (
          <div>
            <div className="flex justify-center mt-[2%]">
              <Logo />
            </div>
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition imageURL={imageURL} box={this.state.box} />
          </div>
        ) : this.state.route === "SignIn" ? (
          <div className="flex justify-center mt-[10%]">
            <SignIn
              loadUser={this.loadUser}
              onRouteChange={this.onRouteChange}
            />
          </div>
        ) : (
          <div className="flex justify-center mt-[10%]">
            <Register
              loadUser={this.loadUser}
              onRouteChange={this.onRouteChange}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
