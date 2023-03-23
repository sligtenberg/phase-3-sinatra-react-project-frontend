import React from "react";

function Test() {
    function callSayHi(){
        fetch("http://localhost:9292/say_hi")
            .then(r => r.json())
            .then(r => console.log(r))
    }

    return (
        <div className="category">
            <h3>Test</h3>
            <button onClick={callSayHi}>say_hi</button>
        </div>
    )
}

export default Test;
