import React,{ } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Banner1 from '../img/banner1.jpg';
import Banner2 from '../img/banner2.jpg';
import Banner3 from '../img/banner3.jpg';

function Banner()
{
  
 return(
  <React.Fragment>
  
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={ Banner1 } alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={ Banner2 } alt="Second slide"/>
    </div>
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

   
  </React.Fragment>

 );
}
export default Banner;