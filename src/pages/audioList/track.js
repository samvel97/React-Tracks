import { useDispatch} from "react-redux";
import './style.moduls.scss'

const Tracks = ({id, name, title, audio})=>{
  const dispatch = useDispatch()
  
  const handleClick = (id)=>{
    dispatch({type:'HANDLE_CLICK', id})
  }
  
  return(
    <>    
      <div className='card'>
        <button type="button" className="btn btn-default btn-lg" onClick={()=>handleClick(id)}>
          <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
        </button>
        <div>
          <h4>{name}</h4>
          <h5>{title}</h5>
        </div>
        <audio controls >
          <source src={audio} type='audio/mpeg'></source>
        </audio>
      </div>
  </>
  )
}

export default Tracks;