import { useState } from "react";

function MyComponent(){
    const [name, setName] = useState("Name Here");
    function handleNameChange(event){
        setName(event.target.value);     
    }

    const [quantity, setQuantity] = useState();
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    const [comment, setComment] = useState("");
    function handleCommentChange(event){
        setComment(event.target.value);
    }

    const[payment, setPayment] = useState();
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    const[shipping, setShipping]= useState("");
    function handleShippingChange(event){
        setShipping(event.target.value)
    }

    return(
        <div>
            <input value = {name} onChange={handleNameChange}/>
            <p>Name: {name}</p>
            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>
            <textarea value={comment} onChange={handleCommentChange} placeholder="Comment here"/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>Pick up<input type="radio" value="Pick up"
                checked={shipping === "Pick up"}
                onChange={handleShippingChange}
                />
            </label>
            <label>Delivery <input type="radio" value="Delivery"
                checked={shipping === "Delivery"}
                onChange={handleShippingChange}/></label>
            <p>Shipping: {shipping}</p>
        </div>
    );
}

export default MyComponent;