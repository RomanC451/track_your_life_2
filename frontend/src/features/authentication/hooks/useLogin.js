import { useObjectOfRefs } from "~/hooks";
import { refsObjectToFetchBody } from "~/utils";

import postLogin from "../services/postLogIn";

/**
 * Description - Custom hook for the login form. Stores the user data and provides the handle of login request.
 * @return
 */
const useLogin = () => {
  const [userDataRefs, changeUserData] = useObjectOfRefs({
    email: "",
    password: "",
  });

  function handleLogInRequest() {
    const userData = refsObjectToFetchBody(userDataRefs);
    postLogin(userData);
  }

  return { changeUserData, handleLogInRequest };
};

export default useLogin;
