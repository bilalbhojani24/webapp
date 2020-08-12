import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

function Service() {
    return (
        <>
           <div className="container-fluid mb-5">
               <h1 className="text-center text-primary py-5">OUR SERVICES</h1>
               <div className="row">
                   <div className="col-12 col-md-10 mx-auto">
                   <div className="row gy-4">
                               {
                                 Sdata.map( (val, index) =>{
                                    return <Card key={index} imgsrc={val.imgsrc} title={val.title} />
                                 }) 
                                }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;
