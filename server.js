
 const express = require ("express")
 const cors = require ("cors")
 const PORT=8000
 const config = require('dotenv').config();


const app = express()
app.use(cors())

app.get('/deal',async (req,res)=>{
  try{
    const body = {
      'source': 'amazon_search',
      'domain': 'com',
      'query': 'deal for today',
      'parse': true
      
    };
    const response = await fetch('https://realtime.oxylabs.io/v1/queries', {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(`${process.env.userName}:${process.env.password}`).toString('base64'),
      }
    });
    const data= await response.json()
    const result = data.results[0].content.results.organic
    const filterResult = result.filter(deal =>
       deal.price_strikethrough)
    const sortByBestPrice = filterResult.sort((a , b) => ((a.price_strikethrough - a.price) / a.price_strikethrough *100) -
      ((b.price_strikethrough -b.price) / b.price_strikethrough *100))
    res.send(sortByBestPrice)
   
  }
  catch(err){
   console.log(err)
  }
    
})
app.listen(PORT,()=>console.log('Listen on Port'+PORT) )


