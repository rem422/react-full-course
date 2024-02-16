const List = () => {

    // const fruits = ['apple', 'orange', 'banana', 'coconut', 'pineapple'];

    // const listItems = fruits.map(fruit => <li key={fruit}>{fruit}</li>);


    const fruits2 = [
                        {
                            id: 1, 
                            name: 'apple', 
                            calories: 95
                        }, 
                        {
                            id: 2, 
                            name: 'orange', 
                            calories: 45
                        }, 
                        {
                            id: 3, 
                            name: 'banana', 
                            calories: 105
                        }, 
                        {
                            id: 4, 
                            name: 'coconut', 
                            calories: 159
                        }, 
                        {
                            id: 5, 
                            name: 'pineapple',
                            calories: 37
                        }
                    ];
    // fruits2.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical order
    //fruits2.sort((a, b) => b.name.localeCompare(a.name)); //Reverse Alphabetical order

    //fruits2.sort((a, b) => a.calories - b.calories); // Numeric order
    //fruits2.sort((a, b) => b.calories - a.calories); // Reverse Numeric order

    const listItems = fruits2.map(fruit => 
                                        <li key={fruit.id}>
                                            {fruit.name} : &nbsp;<b>{fruit.calories}</b>
                                        </li>
                                );

    return(<ol>{listItems}</ol>);

}

export default List