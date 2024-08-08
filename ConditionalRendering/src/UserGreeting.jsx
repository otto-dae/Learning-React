import propTypes from 'prop-types';

function UserGreeting(props){

    if(props.isLoggedIn == true){
        return <h2 className="Welcome-message">Welcome {props.username}</h2>
    }
     return <h2 className="Login-prompt">Please log in to continue</h2>

}

UserGreeting.propTypes ={
    isLoggedIn: propTypes.boolean,
    username: propTypes.string,

}
export default UserGreeting