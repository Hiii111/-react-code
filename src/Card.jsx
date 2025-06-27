import { useState } from "react";

function Card() {
    const [cardStyle, setCardStyle] = useState({
        width: '200px',
        padding: '20px',
        boxShadow: 'rgb(0 0 0 / 39%) 4px 4px 4px',
        margin: '10px',
        backgroundColor: 'white' // default
    });

    const [textColor, setTextColor] = useState('black');

    const updateTheme = (bgColor, txtColor) => {
        setCardStyle(prevStyle => ({
            ...prevStyle,
            backgroundColor: bgColor
        }));
        setTextColor(txtColor);
    };

    const[grid, setGrid]=useState(true);

    return (
        <div>
            <button onClick={() => updateTheme('#ccc', 'red')}>Gray Theme</button>
            <button onClick={() => updateTheme('white', 'black')}>Default Theme</button>
            <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>
            <div style={{ display: grid?'flex':'block', flexWrap: 'wrap' }}>
                <div style={cardStyle}>
                    <img
                        src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                        alt=""
                        style={{ width: '200px' }}
                    />
                    <h3 style={{ textAlign: 'center', color: textColor }}>Ravi Kumar</h3>
                </div>

                <div style={cardStyle}>
                    <img
                        src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                        alt=""
                        style={{ width: '200px' }}
                    />
                    <h3 style={{ textAlign: 'center', color: textColor }}>Ravi Kumar</h3>
                </div>  

                <div style={cardStyle}>
                    <img
                        src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                        alt=""
                        style={{ width: '200px' }}
                    />
                    <h3 style={{ textAlign: 'center', color: textColor }}>Ravi Kumar</h3>
                </div>

                <div style={cardStyle}>
                    <img
                        src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                        alt=""
                        style={{ width: '200px' }}
                    />
                    <h3 style={{ textAlign: 'center', color: textColor }}>Ravi Kumar</h3>
                </div>

                <div style={cardStyle}>
                    <img
                        src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                        alt=""
                        style={{ width: '200px' }}
                    />
                    <h3 style={{ textAlign: 'center', color: textColor }}>Ravi Kumar</h3>
                </div>
                <div style={cardStyle}>
                    <img
                        src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                        alt=""
                        style={{ width: '200px' }}
                    />
                    <h3 style={{ textAlign: 'center', color: textColor }}>Ravi Kumar</h3>
                </div>
                <div style={cardStyle}>
                    <img
                        src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                        alt=""
                        style={{ width: '200px' }}
                    />
                    <h3 style={{ textAlign: 'center', color: textColor }}>Ravi Kumar</h3>
                </div>
                <div style={cardStyle}>
                    <img
                        src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                        alt=""
                        style={{ width: '200px' }}
                    />
                    <h3 style={{ textAlign: 'center', color: textColor }}>Ravi Kumar</h3>
                </div>
                <div style={cardStyle}>
                    <img
                        src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                        alt=""
                        style={{ width: '200px' }}
                    />
                    <h3 style={{ textAlign: 'center', color: textColor }}>Ravi Kumar</h3>
                </div>
                <div style={cardStyle}>
                    <img
                        src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                        alt=""
                        style={{ width: '200px' }}
                    />
                    <h3 style={{ textAlign: 'center', color: textColor }}>Ravi Kumar</h3>
                </div>
            </div>
        </div>
    );
}

export default Card;