import React, { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
      // email: "",
      // password: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
    // console.log(this.state);
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
    // console.log(this.state);
  };

  onSubmitSignIn = () => {
    // console.log(this.state);

    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === "success") {
          this.props.onRouteChange("home");
        }
      });
    // .then((user) => {
    //   if (user.id) {
    //     this.props.loadUser(user);
    //     this.props.onRouteChange("home");
    //   }
    // });
  };

  render() {
    const { onRouteChange } = this.props;

    return (
      <div class="flex justify-center text-center p-4 w-full max-w-sm bg-transparent backdrop-blur-sm rounded-lg shadow-md sm:p-8">
        <form>
          <p class="text-3xl mb-5 mr-4 text-white uppercase font-[Ubuntu] font-semibold">
            Sign In
          </p>

          {/*  */}
          <div class="mb-6">
            <input
              type="text"
              class="form-input form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 font-[Ubuntu] focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-0"
              id="exampleFormControlInput2"
              placeholder="Email address"
              onChange={this.onEmailChange}
            />
          </div>

          <div class="mb-6">
            <input
              type="password"
              class="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 font-[Ubuntu] focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Password"
              onChange={this.onPasswordChange}
            />
          </div>

          <div class="text-center lg:text-left">
            <button
              // onClick={() => onRouteChange("home")}
              onClick={this.onSubmitSignIn}
              type="button"
              class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Login
            </button>
          </div>
          <div className="inline-flex">
            <p class="text-white text-sm font-normal font-[Ubuntu] mt-2 pt-1 mb-0 mx-[1px] float-left">
              Don't have an account?
              <p
                onClick={() => onRouteChange("register")}
                class="text-blue-600 hover:underline transition duration-200 ease-in-out cursor-pointer"
              >
                Register
              </p>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
