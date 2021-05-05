import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, updatePrice, removePlant}) {

  const plantCard = plants.map(plant=><PlantCard key={plant.id} {...plant} updatePrice={updatePrice} removePlant={removePlant} />)
  return (  
    <ul className="cards">{plantCard}</ul>
  );
}

export default PlantList;
