

const ProfilePic = () => {

    const imgUrl ='./src/assets/rem.jpg'


    const handleClick = (e) => {
        e.target.style.display = 'none';
    }

    return(
        <img onClick={(e) => handleClick(e)} src={imgUrl} width={400}></img>
    )


}

export default ProfilePic