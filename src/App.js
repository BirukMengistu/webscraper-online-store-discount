
import React ,{useState ,useEffect} from "react";
import Header from "./component/header";
import Card from "./component/card";
import Nav from './component/nav'



const App =()=>{
  const [deals , setDeals] =useState(null)
  const URL ="http://localhost:8000/deal"
  const fetchData = async ()=>{
    try{
     const response = await fetch(URL,{
      method:"GET"
     })
     const tempData =  await response.json()
      setDeals(tempData)
    }
    catch(err){
     console.error(err)
    }
  }
  
  useEffect(()=>{
    fetchData()
  },[])

   console.log(deals)
  return (
    <div className="app">
        <Header/>
        <Nav/>
       
         {deals && deals.map((item) => <Card key ={item.asin} item ={item}/>)}
    </div>
  );
}

export default App;
