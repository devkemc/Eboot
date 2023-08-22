import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/domain/auth/auth-slice";

export const clientAutheticated = () => {
  const { token } = useSelector(selectAuth);
  return !!token;
};
