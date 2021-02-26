import './App.css';
import {Button, ButtonGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from "react";

function App() {

  const [view, setView] = useState("Click A Category");
  const data = [
    {
      id: "Beaches",
      img: ["/Images/beaches/a.jpg","/Images/beaches/b.jpg","/Images/beaches/c.jpg","/Images/beaches/d.jpg","/Images/beaches/e.jpg","/Images/beaches/f.jpg","/Images/beaches/g.jpg","/Images/beaches/h.jpg"]
    },
    {
      id: "Birds",
      img: ["/Images/birds/a.jpg","/Images/birds/b.jpg","/Images/birds/c.jpg","/Images/birds/d.jpg","/Images/birds/e.jpg","/Images/birds/f.jpg","/Images/birds/g.jpg","/Images/birds/h.jpg"]
    },
    {
      id: "Food",
      img: ["/Images/food/a.jpg","/Images/food/b.jpg","/Images/food/c.jpg","/Images/food/d.jpg","/Images/food/e.jpg","/Images/food/f.jpg","/Images/food/g.jpg","/Images/food/h.jpg"]
    },
    {
      id: "Mountains",
      img: ["/Images/mountains/a.jpg","/Images/mountains/b.jpg","/Images/mountains/c.jpg","/Images/mountains/d.jpg","/Images/mountains/e.jpg","/Images/mountains/f.jpg","/Images/mountains/g.jpg","/Images/mountains/h.jpg"]
    }
  ];

   return (
    <div className="App">
      <h1>NodeFlair</h1>
      <ButtonGroup className="buttonGroup">
                    <Button variant="secondary" onClick={() => setView("Beaches")}>Beaches</Button>
                    <Button variant="secondary" onClick={() => setView("Birds")}>Birds</Button>
                    <Button variant="secondary" onClick={() => setView("Food")}>Food</Button>
                    <Button variant="secondary" onClick={() => setView("Mountains")}>Mountains</Button>
      </ButtonGroup>    
      <h1>{view}</h1>
      {data.map(({id,img}) =>{
        return (
          <>
            {view === id ? (
              <>
                {img.map((pic) => {
                  console.log(pic);
                  return(
                    <>  
                      <img src={pic} alt = "" className="image"/>
                    </>
                  );
                })}
              </>
            ) : null}
          </>
        );
      })}

    </div>
  );
}

export default App;

