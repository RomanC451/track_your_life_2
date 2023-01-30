import wretch from "wretch";

const logInUrl = "userauth/login/";

/**
 * Description - Posts the log in request to the server with the provided credentials passed as arguments.
 * @param {{[key: string]: (string|number)}} userData
 * @returns {void}
 */
function postLogin(userData) {
  wretch(logInUrl)
    .post(userData)
    .res((data) => {
      console.log(data);
    });
}

export default postLogin;
