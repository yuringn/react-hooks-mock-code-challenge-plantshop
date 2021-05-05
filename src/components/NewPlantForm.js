import {useState} from "react";

function NewPlantForm({addNewPlant}) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

 const handleSubmit =(e)=>{
  e.preventDefault()
  console.log({name, image, price})
  const newPlant = {
    name, image, price: parseInt(price)
  }

  fetch("http://localhost:6001/plants", {
    method:"POST",
    headers: {"Content-type":"application/json"},
    body: JSON.stringify(newPlant)
  })
  .then(resp=>resp.json())
  .then(plant=>addNewPlant(plant))
}
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Plant name" />
        <input type="text" name="image" value={image} onChange={(e)=>setImage(e.target.value)} placeholder="Image URL" />
        <input type="number" name="price" value={price} onChange={(e)=>setPrice(e.target.value)}step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}


export default NewPlantForm;
