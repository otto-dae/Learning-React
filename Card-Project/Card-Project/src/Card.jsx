import Pfp from './assets/PFPelfyummy.png'
function Card(){

    return(
        <div className="card">
            <img className="card-image" src={Pfp} alt="Profile Picture" ></img>
            <h2 className="card-title">Koto</h2>
            <p className="card-text">Im learning how to use React.js</p>
        </div>
    );
}
export default Card;