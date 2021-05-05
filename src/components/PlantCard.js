import {useState} from "react";

function PlantCard({id, name, image, price, updatePrice, removePlant}) {

  const [stock, setStock] = useState(true)
  const [newPrice, setNewPrice] = useState(price)
  // console.log(newPrice)

  const handleClick=()=>setStock(stock=>!stock)

  const newPriceSubmit=(e)=>{
    e.preventDefault();
    const newPriceValue={price: parseFloat(newPrice)}
    // console.log(newPriceValue)

    fetch(`http://localhost:6001/plants/${id}`,{
      method:"PATCH",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(newPriceValue)
    })
    .then(resp=>resp.json())
    .then(plant=>updatePrice(plant))
  }

  const handleRemove=()=>{
    fetch(`http://localhost:6001/plants/${id}`,{
      method:"DELETE"
    })
    removePlant(id)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button onClick ={handleClick}className="primary">In Stock</button>
      ) : (
        <button onClick ={handleClick}>Out of Stock</button>
      )}
      <button onClick={handleRemove}> 🪴🗑 </button>
      <form onSubmit={newPriceSubmit}>
        <input type="number" name="price" 
        step="0.01" placeholder="New Price"
        value={newPrice}
        onChange={(e)=>setNewPrice(e.target.value)}/>
        <button type="submit">Update Price</button>
      </form>
    </li>
  );
}

export default PlantCard;
