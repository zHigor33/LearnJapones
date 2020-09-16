import React, { useEffect, useState } from 'react';
import '../index.css';
import Hiragana from './Hiragana';
import Katakana from './Katakana';

export default function Menu(props) {
    const [option, setOption] = useState();

    return (
        <div
            style={{
                marginTop: "0px",
                width: "100%",
                height: "auto",
                color: "white",
                position: "absolute"
            }}
        >
            {/* Título */}
            <div
                style={{
                    textAlign: "center",
                    width: "100%",
                    height: "auto",
                    marginTop: 32,
                    fontSize: 44,
                }}
            >
                <p>LEARN JAPANESE</p>
            </div>

            {/* Botões do menu */}
            <div
                style={{
                    width: "100%",
                    marginTop: 64,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <button className="Buttons" onClick={() => setOption("1")}>Alfabeto Hiragana</button>
                <button className="Buttons" onClick={() => setOption("2")}>Alfabeto Katakana</button>
                <button className="Buttons" onClick={() => setOption("3")}>Palavras</button>
            </div>
            <Exercise option={option} />
        </div>
    );
}

function Exercise(option) {
    return (
        <>
            {option.option == "1" ?
                <>
                    <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }}>
                        <Hiragana />
                    </div>
                </>
                : undefined
            }
            {option.option == "2" ?
                <>
                    <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }}>
                        <Katakana />
                    </div>
                </>
                : undefined
            }
            {option.option == "3" ?
                <>
                    <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }}>
                        <Words />
                    </div>
                </>
                : undefined
            }
        </>
    );
}

function Words() {
    return (
        <h1>
            Palavras
        </h1>
    );
}
