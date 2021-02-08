import { useDispatch, useSelector } from "react-redux";
import Tracks from "./track";
import {cardList} from '../../store/selectors'
import { useState } from "react";


const List = ()=>{
  const Storage = useSelector(cardList)
  const [search, setSearch] = useState('')
  const [finded,setFinded] = useState(Storage)
  
  const  SearchTodo = (e)=>{
    const {value} = e.target
    setSearch(value)
    const startWith = Storage.filter(elem=>elem.title.startsWith(value))
    return setFinded(startWith)
  }

  const dispatch = useDispatch()
  
  const handleClick = (id)=>{
    dispatch({type:'HANDLE_CLICK', id})
  }
  return (
    <>
      <input 
        type='text' 
        className='card search' 
        value={search} 
        placeholder='Search your track' 
        onChange={SearchTodo}
      />
      {SearchTodo? 
    finded.map((elem)=>
    <div className='card'>
        <button 
          type="button" 
          className="btn btn-default btn-lg" 
          onClick={()=>handleClick(elem.id)}
        >
          <span 
            className="glyphicon glyphicon-star" 
            aria-hidden="true">
          </span>
        </button>
        <div>
          <h4>{elem.name}</h4>
          <h5>{elem.title}</h5>
        </div>
        <audio controls >
          <source 
            src={elem.audio} 
            type='audio/mpeg'>
          </source>
        </audio>
      </div>
      ):
    Storage.map((elem)=>
      <Tracks
        key={elem.id}
        id={elem.id} 
        liked={elem.liked}
        name={elem.name}
        title={elem.title}
        audio={elem.audio}
      />)}
    </>
  )  
}

export default List;