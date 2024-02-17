

const Button2 = () => {

    const handleClick = () => {
        console.log('OUCH!');
    }

    const handleClick2 = (name) => {
        console.log(`${name} stop clicking me!`);
    }

    let count = 0;
    const handleClick3 = (name) => {
        if(count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        } else {
            console.log(`${name} stop clicking me!`);
        }
    }
    
    const handleClick4 = (e) => e.target.textContent = 'OUCH! 😒';


  return (
    <>
        <button onClick={handleClick}> Click Me 🙃</button>
        <button onClick={() => handleClick2('Rem')}> Click Me 🙃</button>
        <button onClick={() => handleClick3('Mary')}> Click Me 🙃</button>
        <button onDoubleClick={(e) => handleClick4(e)}> Click Me 🙃</button>
    </>
  )
}

export default Button2