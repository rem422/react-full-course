import propTypes from 'prop-types'

const UserGreeting = (props) => {
  const welcomeMessage = <h1 className="welcome-message">Welcome {props.userName}</h1>;
  const prompMessage = <h1 className="login-prompt">Please log in to continue</h1>;

  return(props.isLoggedIn ? welcomeMessage : prompMessage);

}

UserGreeting.propTypes = {
  userName: propTypes.string,
  isLoggedIn: propTypes.bool
};

UserGreeting.defaultProp = {
  userName: 'Guest',
  isLoggedIn: false
}

export default UserGreeting