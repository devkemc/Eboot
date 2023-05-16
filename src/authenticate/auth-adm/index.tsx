import {useSelector} from "react-redux";
import {selectAuth} from "../../Redux/domain/auth/auth-slice";


export const admAuthenticated = () => {
  const {token, admin} = useSelector(selectAuth)
  return !!token && !!admin;
};
