import music1 from '../../audio/happy.mp3'
import music2 from '../../audio/human.mp3'
const isAuth = localStorage.getItem('token')
const checkIsAuth = isAuth?JSON.parse(isAuth):false



const fullStorage = localStorage.getItem('store')
const checkFullFavorites = fullStorage?JSON.parse(fullStorage):[]


const initialState = {
  auth:checkIsAuth,
  favorites:checkFullFavorites,
  storage:[
    {id:1, liked:false, name:'Pharrell Williams', title:'Happy', audio:music1},
    {id:2, liked:false, name:`Rag'n'Bone Man`, title:'Human', audio:music2},
    {id:3, liked:false, name:'Pharrell Williams', title:'Happy', audio:music1},
    {id:4, liked:false, name:'Pharrell Williams', title:'Happy', audio:music1},
  ]
}


export default (state=initialState, action={})=>{
  switch (action.type) {
    case 'ISAUTH':{
      return {...state,auth:true}  
    }
    case 'HANDLE_CLICK':{
      const newFavorites = state.storage.filter((elem)=>elem.id===action.id)
      const allFavorite = [...newFavorites, ...state.favorites]
      localStorage.setItem('store', JSON.stringify(allFavorite))
      console.log(allFavorite);
      return {...state, favorites:allFavorite}
  }
  default:return state;
}
}