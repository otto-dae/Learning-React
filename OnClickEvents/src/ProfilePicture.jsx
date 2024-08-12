function ProfilePicture(){
    const imgURL = 'src/assets/PFPelfyummy.png'

    return(
        <img src={imgURL} onClick={(e)=> e.target.style.display = "none"}></img>
    )
}

export default ProfilePicture;