import React from 'react';
import Owl1 from '../assets/img/owl1.jpg'
import Owl2 from '../assets/img/owl2.jpg'
import Owl3 from '../assets/img/owl3.jpg'
import Owl4 from '../assets/img/owl4.jpg'

export default function Screenshots (){
    return(

        <>
        
        
       
        <section id="Screenshots" className="">
   
   <div className="container">

   <div className="row">

     <div className="col-xs-12 col-sm-12 col-md-12 wow bounceIn animated headding" data-wow-delay=".1s">
         <h2>Screen <span>Shots</span></h2>
         <p>Display your mobile apps awesome features with icon lists and an image carousel of each page. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.</p>
     </div>

     <div className="col-xs-12 col-sm-12 col-md-12">
       <div className="row">     
         <div className="col-xs-12 col-sm-12 col-md-12 wow zoomIn animated textright" data-wow-delay=".1s">           
             <div className="span12">

                     <div id="owl-demo" className="owl-carousel">
                       <div className="item">
                           <div className="imghover" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
                             <img src={Owl1} alt="Owl Image" />         
                           <div className="hover-bg"><i className="fa fa-camera camera"></i></div>                 
                           </div> 
                       </div>
                       <div className="item">
                           <div className="imghover" data-toggle="modal" data-target="#exampleModa2" data-whatever="@mdo">
                           <img src={Owl2} alt="Owl Image" />
                           <div className="hover-bg"><i className="fa fa-camera camera"></i></div>                 
                           </div>
                       </div>
                     <div className="item">
                           <div className="imghover" data-toggle="modal" data-target="#exampleModa3" data-whatever="@mdo">
                           <img src={Owl3}alt="Owl Image" />
                           <div className="hover-bg"><i className="fa fa-camera camera"></i></div>                 
                           </div>
                       </div> 
                       <div className="item">
                           <div className="imghover" data-toggle="modal" data-target="#exampleModa4" data-whatever="@mdo">
                           <img src={Owl4} alt="Owl Image" />
                           <div className="hover-bg"><i className="fa fa-camera camera"></i></div>                 
                           </div>
                       </div>
                     </div>              
                   </div>     
                     
       </div>     
    
         <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
         <div className="modal-dialog" role="document">
           <img src={Owl1} alt="Owl Image" />
         </div>
       </div>

       <div className="modal fade" id="exampleModa2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabe2">
         <div className="modal-dialog" role="document">
           <img src={Owl2} alt="Owl Image" />
         </div>
       </div>
       
       <div className="modal fade" id="exampleModa3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabe3">
         <div className="modal-dialog" role="document">
           <img src={Owl3} alt="Owl Image" />
         </div>
       </div>
       
       <div className="modal fade" id="exampleModa4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabe4">
         <div className="modal-dialog" role="document">
           <img src={Owl1} alt="Owl Image" />
         </div>
       </div>

     </div>
     
   </div>
   </div>      
 </div>


   </section>
        </>
    );

}