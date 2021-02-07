const Profile = ({id, name, title, audio})=>{

  return (
    <div>
        <h5>{name} - {title}`</h5>
      <audio controls >
        <source src={audio} type='audio/mpeg'></source>
      </audio>
    </div>
  )
}
export default Profile;