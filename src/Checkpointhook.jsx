import React, { useState } from "react";
import './Checkpointhooks.css';

function Checkpointhooks(){

    const [count, setCount] = useState(0);  
    const [visible, setVisible] = useState(true);  
    const handleToggle = () =>{
        setVisible((curent) => !curent);
    };

    return(
        <>
            <div className="container">
                <div className="recherche">
                    <img src="recherche_icon.png" alt=""></img>
                    <input type="text" placeholder="RECHERCHER VIDEO" name="recherche" />
                </div>
                        
                <div className="content">
                    
                    {visible && 

                        <div className="movieBox">                                       

                            <div className="MovieCard">
                                <iframe  src="https://www.youtube.com/embed/HrrBtXKWtlg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <div className="videoInfo">
                                    <div><span className="titleInfo">Title:</span> Titre de la Video</div>
                                    <div><span className="descipInfo">Description:</span> description</div>
                                </div>
                            </div>

                            <div className="MovieCard">
                                <iframe  src="https://www.youtube.com/embed/HrrBtXKWtlg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <div className="videoInfo">
                                <div><span className="titleInfo">Title:</span> Titre de la Video</div>
                                <div><span className="descipInfo">Description:</span> description</div>
                                </div>
                            </div>

                            <div className="MovieCard">
                                <iframe  src="https://www.youtube.com/embed/HrrBtXKWtlg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <div className="videoInfo">
                                    <div><span className="titleInfo">Title:</span> Titre de la Video</div>
                                    <div><span className="descipInfo">Description:</span> description</div>
                                </div>
                            </div>

                            <div className="MovieCard">
                                <iframe  src="https://www.youtube.com/embed/HrrBtXKWtlg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <div className="videoInfo">
                                    <div><span className="titleInfo">Title:</span> Titre de la Video</div>
                                    <div><span className="descipInfo">Description:</span> description</div>
                                </div>
                            </div>

                            <div className="MovieCard">
                                <iframe  src="https://www.youtube.com/embed/HrrBtXKWtlg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <div className="videoInfo">
                                     <div><span className="titleInfo">Title:</span> Titre de la Video</div>
                                    <div><span className="descipInfo">Description:</span> description</div>
                                </div>
                            </div>

                            <div className="MovieCard">
                                <iframe  src="https://www.youtube.com/embed/HrrBtXKWtlg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <div className="videoInfo">
                                    <div><span className="titleInfo">Title:</span> Titre de la Video</div>
                                    <div><span className="descipInfo">Description:</span> description</div>
                                </div>
                            </div>

                        </div>  
                    }
                        <div className="movieList">
                            <div>
                                <p className="stateRecap">
                                <h5>RECAP - STATE</h5>
                                <h5>COMPTEUR : {count} </h5>
                                <button onClick={() => setCount(count - 1)}>DECREMENTER -</button>
                                <button onClick={() => setCount(count + 1)}>INCREMENTER +</button>
                                <button onClick={handleToggle}>AFFICHER/CACHER</button>
                                
                                </p>

                            </div>
                            

                        </div>          
       
                </div>
            </div>
            
        </>
    )
}
export default Checkpointhooks;