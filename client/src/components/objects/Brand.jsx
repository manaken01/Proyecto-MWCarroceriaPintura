import { useState } from 'react'




function Brand({brand, pic}) {
  return (
    <div class="card mb-3" style={{cursor: "pointer", width: "100%", alignItems: "center", backgroundColor: "#F9F9F9",boxShadow: "#E3E3E3 3px 3px 3px"  }}>
      <img style={{ padding: "5px",  height: '100px', width:'auto' }} src={pic} class=" card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title"><strong>{brand}</strong></h5>
      </div>
    </div>
  );
}

export default Brand
