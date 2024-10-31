import React, { useEffect } from 'react';

export const City = () => {
    function openCity(cityName, color) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabContent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.backgroundColor = "";
        }
        if (document.getElementById(cityName)) {
            document.getElementById(cityName).style.display = "block";
            document.getElementById(cityName + 'Button').style.backgroundColor = color;
        }
    }

    useEffect(() => {
        // Set the default tab to be open on mount
        openCity('Hanoi', 'teal');
    }, []);

    return (
        <>
            <div className='city reveal'>
                <button className="tablink" onClick={() => openCity('Hanoi', 'teal')} id="HanoiButton">Hanoi</button>
                <button className="tablink" onClick={() => openCity('Sydney', 'green')} id="SydneyButton">Sydney</button>
                <button className="tablink" onClick={() => openCity('Tokyo', 'navy')} id="TokyoButton">Tokyo</button>
                <button className="tablink" onClick={() => openCity('London', 'salmon')} id="LondonButton">London</button>

                <div id="Hanoi" className="tabContent">
                    <h1>Hanoi</h1>
                    <p>Hanoi is the capital city of Vietnam.</p>
                </div>

                <div id="Sydney" className="tabContent">
                    <h1>Sydney</h1>
                    <p>Sydney is the metropolitan city of Australia.</p>
                </div>

                <div id="Tokyo" className="tabContent">
                    <h1>Tokyo</h1>
                    <p>Tokyo is the capital of Japan.</p>
                </div>

                <div id="London" className="tabContent">
                    <h1>London</h1>
                    <p>London is the capital of England.</p>
                </div>
            </div>
        </>
    );
}
