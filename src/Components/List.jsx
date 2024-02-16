import propTypes from 'prop-types'

const List = (props) => {

    // const fruits = ['apple', 'orange', 'banana', 'coconut', 'pineapple'];

    // const listItems = fruits.map(fruit => <li key={fruit}>{fruit}</li>);


    // const fruits2 = [
    //                     {
    //                         id: 1, 
    //                         name: 'apple', 
    //                         calories: 95
    //                     }, 
    //                     {
    //                         id: 2, 
    //                         name: 'orange', 
    //                         calories: 45
    //                     }, 
    //                     {
    //                         id: 3, 
    //                         name: 'banana', 
    //                         calories: 105
    //                     }, 
    //                     {
    //                         id: 4, 
    //                         name: 'coconut', 
    //                         calories: 159
    //                     }, 
    //                     {
    //                         id: 5, 
    //                         name: 'pineapple',
    //                         calories: 37
    //                     }
    //                 ];
    // fruits2.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical order
    //fruits2.sort((a, b) => b.name.localeCompare(a.name)); //Reverse Alphabetical order

    //fruits2.sort((a, b) => a.calories - b.calories); // Numeric order
    //fruits2.sort((a, b) => b.calories - a.calories); // Reverse Numeric order

    // const lowCalFriuts = fruits2.filter(fruit => fruit.calories < 100);
    // const highCalFriuts = fruits2.filter(fruit => fruit.calories >= 100);

const category = props.category;
const itemList = props.items;

    const listItems = itemList.map(item => 
                                        <li key={item.id}>
                                            {item.name} : &nbsp;<b>{item.calories}</b>
                                        </li>
                                );

    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );
}

List.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({id: propTypes.number, name: propTypes.string, calories: propTypes.number}))
}

List.defaultProps = {
    category: 'Category',
    items: []
}

export default List