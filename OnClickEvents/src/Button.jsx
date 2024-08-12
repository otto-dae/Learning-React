function Button(){

    const clickHandler = (e) => e.target.textContent ="ouch";
    //const clickHandler2 = (name) => console.log(`${name} stop clicking me`)

    return(
    <>
      <button onClick={(e) => clickHandler(e)} >click me</button>
      <button onDoubleClick={(e) => clickHandler(e)} >click me</button>
    </>
  )
}

export default Button; 