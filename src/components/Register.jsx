import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          this.props.loadUser(user)
          this.props.onRouteChange("home");
        }
      });
  };
  render() {
    // const { onRouteChange } = this.props;

    return (
      <div>
        <div class="flex justify-center text-center p-4 w-full max-w-sm bg-transparent backdrop-blur-sm rounded-lg shadow-md sm:p-8">
          <form>
            {/* <div class="flex flex-row items-center justify-center lg:justify-start"> */}
            <p class="text-3xl mb-5 mr-4 text-white uppercase font-[Ubuntu] font-semibold">
              Register
            </p>

            {/*  */}
            <div class="mb-6">
              <input
                type="text"
                class="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 font-[Ubuntu] focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput2"
                placeholder="Name"
                onChange={this.onNameChange}
              />
            </div>
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
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
