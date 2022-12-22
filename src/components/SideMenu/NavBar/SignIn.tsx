import { Component } from "react";

export default class SignIn extends Component<{}, { isSignedIn: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      isSignedIn: false,
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick = () => {
    this.setState({ isSignedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isSignedIn: false });
  };

  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
          <div className="flex flex-row overflow-hidden items-center w-auto h-36  text-yellow-900 bg-orange-100 rounded-2xl">
            <div className="w-48 h-48 rounded-full bg-gray-300 ml-[-30px] z-10 bg-profile bg-cover"></div>
            <div></div>
            <div className="ml-2">Bruno Belvedere</div>
          </div>
        ) : (
          <button
            className="bg-orange-100 text-yellow-900 py-2 px-4 rounded hover:bg-yellow-900 hover:text-orange-100 shadow-md"
            onClick={this.handleLoginClick}
          >
            Sign In
          </button>
        )}
      </div>
    );
  }
}
