import {useState} from 'react'

const UpdateStateOfAnArray = () => {

    const[foods, setFoods] = useState(['Apple', 'Orange', 'banana']);

    const handleAddFood = () => {
      const newFood = document.getElementById('foodInput').value;
      document.getElementById('foodInput').value = '';

      setFoods(f => [...f, newFood]);
    }

    const handleRemoveFood = (index) => {
      setFoods(foods.filter((_, i) => i !== index));
    }

  return (
    <div>
        <h2>List of Food</h2>

        <ul>
            {
            foods.map((food, index) => 
            <li key={food} onClick={() => handleRemoveFood(index)}>
              {food}
            </li>
            )}
        </ul>
        <input type="text" id='foodInput' placeholder='Enter Food Name'/>
        <button onClick={handleAddFood}>Add Food</button>
    </div>
  )
}

export default UpdateStateOfAnArray