import Poster from "./assets/images/maxresdefault.jpg"
import Cards from "./cards"
import "./App.css"


const App =()=>{
  const sure ="Jackie Chan Adventures..."
  const year ="2000"
  return(
    <>
    
    <div className="parent"> 
      <h1 style={{backgroundColor:"rgb(19, 87, 160)",color:"white",display:"flex",justifyContent:"center",padding:"10px"}}>{sure} {year}</h1></div>
     <div className="post"> 
      <img style={{height:"700px",width:"1530px",}} src={Poster}/>
      </div>
      <div className="para">
        <h2><i>You can watch Jackie Chan Adventures on streaming services like Netflix and Crunchyroll,
         and you can also purchase episodes or seasons from platforms like Prime Video, Apple TV, and Google Play.
          Some seasons are also available on platforms like YouTube.</i> </h2></div>
      <section> <Cards/></section>

    </>
   
  )
  
}
export default App