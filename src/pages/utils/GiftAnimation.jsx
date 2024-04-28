import React, { useState } from 'react';
import "../../../public/css/styles.css";

const GiftAnimation = ({ onBoxClick }) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        onBoxClick();
    };

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <h3 className="text-center text-light my-5 text-bold italic text-xl">Open your gift:</h3>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <div className={`box ${clicked ? 'clicked' : ''}`} onClick={handleClick}>
                        <div className="box-body">
                            {/* <img className="img" src="https://via.placeholder.com/150" /> */}
                            <div className="box-lid">
                                <div className="box-bowtie"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiftAnimation;