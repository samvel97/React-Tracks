import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import NavBar from "./nav-bar/nav-bar";
import useRouters from "./router";
import {isTrue} from './store/selectors'

function App() {
  const isauth = useSelector(isTrue)
  const route = useRouters(isauth)
  const history = useHistory()
  
  useEffect(()=>{
    if(isauth){
      history.push('/')
    }
  }, [isauth, history])
  return (
    <>
    {isauth && <NavBar/>}
    {route}
    </>
  );
}

export default App;

