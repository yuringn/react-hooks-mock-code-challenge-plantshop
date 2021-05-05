import {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [allPlants, setAllPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(resp=>resp.json())
    .then(setAllPlants)
  },[])
  
  
  const addNewPlant=(newPlant)=>{setAllPlants([...allPlants,newPlant])}
  const updatePrice=(plantId)=>{
    const newPriceTag = allPlants.map(plant=>{
      if(plant.id===plantId){
        return newPriceTag
      }else{
        return plant
      }
    })
    setAllPlants(newPriceTag)
  }

  const removePlant=(plantId)=>{
    const updatedPlantList = allPlants.filter(plant=>plant.id !== plantId)
    setAllPlants(updatedPlantList)
  }
  const filterPlant = allPlants.filter(plant=>plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={filterPlant} updatePrice={updatePrice} removePlant={removePlant} />
    </main>
  );
}

export default PlantPage;
