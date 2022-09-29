import React,{ useEffect, useState } from "react";
import Banner from "./banner";
import Slider from "./Slider";
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import doc1 from '../img/doc1.jpg';
import doc2 from '../img/doc2.jpg';
import doc3 from '../img/doc3.jpg';
import doc4 from '../img/doc4.jpg';
import doc5 from '../img/doc5.jpg';
import './Slider.css'
import './Home.css'

const  Home = () => {


const [docDATA, setDoc] = useState([])

const getDocsData = async () => {

  try {
    
    
    const res = await fetch('/all_doctors',{
      method:'GET',
      headers:{
        "Content-Type":"application/json"
      }
    })
    const datas  = await res.json()
    setDoc(datas)
    console.log(datas)


  } catch (error) {
    
  }



} 


useEffect(() => {

getDocsData() 

},[] )



  
 return(
  <React.Fragment>
  <div>
 <Slider />
 </div>
 <style>

</style>
<div className="backcolor3">
 <div className="container">
 <div className="row backcolor1" >
 
       <div className="col-sm-6" ><img  className="img1"  src={img1} alt="Italian Trulli"/></div>
       <div className="col-sm-6"><p className="mt-5" >Leveraging its vast medical expertise & technological advantage, Apollo Hospitals has consistently delivered best in class clinical outcomes.</p></div>
 
 </div>
 <div className="row backcolor1">
 

    <div className="col-sm-6 backcolor"><p className="mt-5" > Personal Health Record system stores all your data in a secure environment and gives you complete control over who accesses your information. Access your Health Records from the comfort of your home while seamlessly maintaining a record of your medica</p></div>
      <div className="col-sm-6 "><img  className="img3" src={img2} alt="Italian Trulli"/></div>
      
 
 </div>

 <div className="row backcolor1">
 <table >
  <th className="maintable">name </th> <th className="maintable">specialist</th>
  </table>
  
        
         <h6 className="mainp">

          {docDATA.map((names) => (<p>  <td className="docname" >  {names.name}</td> <td className="specialistt" > {names.specialist} </td> </p>   ) )   } 
         
         </h6>


        </div>
         



</div>
</div>
   
  </React.Fragment>

 );
}
export default Home;