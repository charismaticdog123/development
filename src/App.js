import "./App.css";
import { useState, useEffect } from "react";
import tropeData from "./assets/tropes-data.json";
import SortBy from "./components/sortby";
import FilterButtons from "./components/filterbutts";
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';

import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';


import TropeItem from "./components/trope-item.js";
import AggregateComp from "./components/aggregator";


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
tropeData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

const tropeList = tropeData;



function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  // aggregator state
  const [cart, setCart] = useState({prods: {}, total: 0});

  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState();

  const [filterType, setFilterType] = useState(["All"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  useEffect(() => {
    console.log('the filterParam has changed', filterParam)
 }, [filterParam])

 useEffect(() => {
  console.log('the filterType has changed', filterType)
}, [filterType])

  function matchFilterType(item) {
    console.log("FILTER TYPE IS " + filterType)
    // console.log("TYPE OF " + typeof JSON.stringify(filterType))
    // console.log("FILTER TYPE IS " + filterType)

    if(filterType === "All") { 
      return true
    } else if (filterType == "type") {
      // console.log("in background")
      if (filterParam == item.type) {
      // console.log("my background is " + item.type)

        return true
      } else {
        // console.log("in background in FALSE")
        // console.log("PRINTING filterPARAM " + filterParam)

        // console.log("PRINTING ITEM.TYPE " + item.type)
        return false
      }

    } else if (filterType =="trope") {
      console.log("in trope")

      if (filterParam == item.trope) {
      console.log("my trope is " + item.trope)

        return true
      } else {
        console.log("ADIHOSDUGHSODGUHSD")
        return false
      }

    } else {
      console.log("OIDODIHJDIHJPDOHJDPIHJ")
      return false
    }
  }

  function myFilterFunction(listItem) {
      if (matchFilterType(listItem) == true) {
        console.log("MYFILTERFUNC TRUE")
        return true
      } else {
        console.log("MYFILTERFUNC FALSE")

        return false
      }
  }


  function handleFilter(filtType, filtPar) {
    setFilterType(filtType)
    console.log("HANDLE FILTER " + filtType)
    setFilterParam(filtPar)
    console.log("HANDLE FILTER 2 " + filtPar)
    const filteredData = tropeList.filter(tropeList.forEach(myItem => myFilterFunction(myItem)))
    setData(filteredData);
  }



  useEffect(() => {
    const sortArray = type => {
      const types = {
        id: 'id',
        unsurvivability: 'survivability',
        survivability: 'survivability'
      };
      const sortProperty = types[type];
      const sorted = [...tropeList].sort((a, b) => b[sortProperty] - a[sortProperty]);


      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]); 


  
  const update = (index) => {
    const tropeItem = tropeData[index];
    const itemName = tropeItem.name;
    const updateProducts = cart.prods;

    if (updateProducts[itemName]) {
      updateProducts[itemName] += 1;
    }
    else {
      updateProducts[itemName] = 1;
    }

    const updatedTotal = cart.total + tropeItem.survivability
    setCart({prods: updateProducts, total: updatedTotal})
  }

  const removeC = (key) => {
    setCart(cart.filter((cart) => key != cart.key));
  }

  return (
      <div>
        <h1>Choose Your Own Adventure Character</h1> 



      {/* {data.map(tropeList => (
        <div key={tropeList.id} style={{ margin: '30px' }}>
          <div>{`Name: ${tropeList.name}`}</div>
          <div>{`Description: ${tropeList.description}`}</div>
        </div>
    
      ))} */}



        <div class="Main-grid">
        <div class="Item-grid">
          {data.map((tropeList, index) => ( // TODO: map tropeData to tropeItem components            
            <TropeItem item={tropeList} update={update} index={index}>
            </TropeItem>
          ))}
          {/* {data.map((tropeList => ( // TODO: map tropeData to tropeItem components            
            <TropeItem item={tropeList}>
            </TropeItem>
          )))} */}
          </div>

      <div class="Side-bar">
        <div class="cart-card">
        <FormControl>
        <FormLabel id="demo-radio-buttons-group-label"><b>Sort by</b></FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel value="survivability" onChange={(e) => setSortType("survivability")} control={<Radio />} label="Survivability" />
          
          <FormControlLabel value="id" onChange={(e) => setSortType("id")} control={<Radio />} label="None" />
        </RadioGroup>
      </FormControl>
        




      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label"><b>Type</b></FormLabel>
        <FormGroup>
            <FormControlLabel onChange={(e) => handleFilter("type", "Background")} value="background" control={<Checkbox />} label="Background" />
            <FormControlLabel onChange={(e) => handleFilter("type", "Archetype")} value="archetype" control={<Checkbox />} label="Archetype" />
            <FormControlLabel onChange={(e) => handleFilter("type", "Weapon")} value="weapon" control={<Checkbox />} label="Weapon" />
        </FormGroup>
        <br></br>

        <FormLabel id="demo-radio-buttons-group-label"><b>Trope</b></FormLabel>
        <FormGroup>
        <FormControlLabel onChange={(e) => setFilterParam("all")} value="all" control={<Checkbox />} label="None" />

            <FormControlLabel onChange={(e) => handleFilter("trope", "Antihero")} value="antihero" control={<Checkbox />} label="The Antihero" />
            <FormControlLabel onChange={(e) => handleFilter("trope", "Comedic")} value="comedic" control={<Checkbox />} label="Comedic Relief" />
            <FormControlLabel onChange={(e) => handleFilter("trope", "Rogue")} value="rogue" control={<Checkbox />} label="Lovable Rogue" />
            <FormControlLabel onChange={(e) => handleFilter("trope", "Magic")} value="magic" control={<Checkbox />} label="Magic" />
            <FormControlLabel onChange={(e) => handleFilter("trope", "Written by a Woman")} value="wbaw" control={<Checkbox />} label="Written by a Woman" />
        </FormGroup>
        </FormControl>
        </div>



         <AggregateComp cart={cart}></AggregateComp>
          </div>
          
      </div>
      </div>
  );
}




export default App;
