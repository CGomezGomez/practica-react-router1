import { Route, Routes } from "react-router-dom";
import PlanetCard from "../components/PlanetCard/PlanetCard";

const Router = () => {
	return (

        <Routes>
        
			<Route path='/' 	   element={<PlanetCard planetName	={'mercury'} />} />
			<Route path='/venus'   element={<PlanetCard planetName	={'venus'} 	 />} />
			<Route path='/earth'   element={<PlanetCard planetName	={'earth'} 	 />} />
			<Route path='/mars'    element={<PlanetCard planetName	={'mars'} 	 />} />
			<Route path='/jupiter' element={<PlanetCard planetName	={'jupiter'} />} />
			<Route path='/saturn'  element={<PlanetCard planetName	={'saturn'}  />} />
			<Route path='/uranus'  element={<PlanetCard planetName	={'uranus'}  />} />
			<Route path='/neptune' element={<PlanetCard planetName	={'neptune'} />} />

        </Routes>

	);
};

export default Router;