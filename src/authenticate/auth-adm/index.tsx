import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/domain/auth/auth-slice";

export const admAuthenticated = () => {
  const { token, admin } = useSelector(selectAuth);
  return !!token && !!admin;
};
