

import { useNavigate } from "react-router-dom";


function Brand({brand, pic}) {
  const navigate = useNavigate();
  function navigateToParts() {
    navigate(`/parts/${brand}`);
  }
  return (
    <div className="card mb-3" onClick={navigateToParts} style={{cursor: "pointer", width: "100%", alignItems: "center", backgroundColor: "#F9F9F9",boxShadow: "#E3E3E3 3px 3px 3px"  }}>
      <img style={{ padding: "5px",  height: '100px', width:'auto' }} src={pic} className=" card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"><strong>{brand}</strong></h5>
      </div>
    </div>
  );
}

export default Brand
