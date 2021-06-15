import React, { useState } from 'react'


const HomePage = () => {
    const [OurColor, setOurColor] = useState("blue");
    const [OurPadding, setOurPadding] = useState("0")

    const handleButtonClick = (ev) => {
        setOurColor(OurColor === "blue" ? "red":"blue")
        setOurPadding(OurPadding === "0" ? "50PX":"0")

    }
    return (
        <div>
            <h1 style={{ color: OurColor, padding: OurPadding }}>Home Page</h1>
            <button onClick={handleButtonClick}>Change Color</button>
        </div>
    )
};
export default HomePage