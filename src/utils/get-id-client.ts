import {useSelector} from "react-redux";
import {selectAuth} from "../Redux/domain/auth/auth-slice";

export const getIdClient = () => {
  const {id} = useSelector(selectAuth)
  return id;
};