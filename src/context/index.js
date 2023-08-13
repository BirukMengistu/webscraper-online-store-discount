export const fetchData = async (url)=>{
  try{
   const response = await fetch(url)
   return await response.json()
  }
  catch(err){
   console.log(err)
  }
}