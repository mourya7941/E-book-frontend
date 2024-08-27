import React from 'react';
import Cards from './Cards';
import list from "../../public/list.json";

function Cource() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
<h1 className="text-2xl  md:text-4xl">We are delighted to have you <span className="text-pink-500">Here! :)</span></h1>
          <p className="mt-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste repellat, sapiente aperiam dignissimos nobis itaque ut veniam sunt beatae porro nesciunt nemo debitis eius placeat provident sit voluptatem tempore molestiae. as you all know that we are living in the world of information and technology </p>
                  <button className="mt-6 bg-pink-500 text-white px-4  py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }


       </div>
      
    </div>
    
    </>
  )
}

export default Cource;
