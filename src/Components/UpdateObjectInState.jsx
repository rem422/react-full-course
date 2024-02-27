import { useState } from "react"


const UpdateObjectInState = () => {

    const[car, setCar] = useState({
                                    year: '2023', 
                                    make: 'Mazda', 
                                    model: 'Axela'
                                    });

    const handleYearChange = (e) => {
        setCar(c => ({...c, year: e.target.value}));
    }

    const handleMakeChange = (e) => {
        setCar(c => ({...c, make: e.target.value}));
    }

    const handleModelChange = (e) => {
        setCar(c => ({...c, model: e.target.value}));
    }

  return (
    <div>
        <p>Your favourite car is: {car.year} {car.make} {car.model} </p>

        <input type="number" value={car.year} onChange={handleYearChange}/> <br />
        <input type="text" value={car.make} onChange={handleMakeChange}/> <br />
        <input type="text" value={car.model}onChange={handleModelChange}/> <br />
    </div>
  )
}

export default UpdateObjectInState