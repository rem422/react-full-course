const List = () => {

    // const fruits = ['apple', 'orange', 'banana', 'coconut', 'pineapple'];

    // const listItems = fruits.map(fruit => <li key={fruit}>{fruit}</li>);


    const fruits2 = [
                        {name: 'apple', calories: 95}, 
                        {name: 'orange', calories: 45}, 
                        {name: 'banana', calories: 105}, 
                        {name: 'coconut', calories: 159}, 
                        {name: 'pineapple', calories: 37}
                    ];
    const listItems = fruits2.map(fruit => <li key={fruit.name}>{fruit.name}</li>)

    return(<ol>{listItems}</ol>);

}

export default List