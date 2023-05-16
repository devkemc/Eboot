import {useSelector} from "react-redux";
import {selectAuth} from "../../Redux/domain/auth/auth-slice";


export const clientAutheticated = () => {
  const {token} = useSelector(selectAuth)
  return !!token
};
