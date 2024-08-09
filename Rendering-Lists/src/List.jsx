import PropTypes from 'prop-types';
function List(props){

    const category = props.category;
    const itemLIST = props.items;
    /*const fruits =[{id:1, name: "apple", calories: 95},
                   {id:2, name: "orange", calories: 45},
                   {id:3, name: "banana", calories: 105},
                   {id:4, name: "coconut", calories: 159},
                   {id:5, name: "pineapple", calories: 37}];*/

    const listItems = itemLIST.map(item => <li key={item.id}>
        {item.name} contains: {item.calories} calories.</li>);

        return(
            <>
                <h3 className="list-category">{category}</h3>
                <ul className="list-items">{listItems}</ul>   
            </>
    
        );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    })),
}
List.defaultProps = { 
    category: "Category",
    items: []
}
    /*fruits.sort((a,b) => a.name.localeCompare(b.name));
    //For reverse order just change a and b in .localecompare
    fruits.sort((a,b) => a.id - b.id); //for sorting in ID (Integers)
    //For reverse just change a and in the operation
    


    const lowCalFruit = fruits.filter(fruit => fruit.calories < 100);

    const lowCalFruitsList = lowCalFruit.map(localfruit => 
    <li key={lowCalFruit.id}>{localfruit.name} 
    contains: {localfruit.calories} calories.</li>);*/

export default List