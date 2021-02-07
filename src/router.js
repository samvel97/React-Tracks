import { Redirect, Route, Switch } from "react-router-dom"
import Login from "./pages/login"
import List from "./pages/audioList/trackList"
import ProfileList from "./pages/profile/profilelist"

const useRouters = (istrue)=>{
  if(istrue){
  return(
  <Switch>
    <Route path='/' exact>
      <List />
    </Route>
    <Route path='/profile' exact>
      <ProfileList/>
    </Route>
  </Switch>
  )
  }
  return(
    <Switch>
      <Route path='/login' exact>
        <Login/>
      </Route>
      <Redirect to='/login'/>
    </Switch>
  )
}

export default useRouters;