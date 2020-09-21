import React, { useEffect, useState } from 'react';
import '../index.css';

export default function Alphabet(props) {
    const [alphabet, setAlphabet] = useState();
    const [letters, setLetters] = useState();
    const [field, setField] = useState();
    const [size, setSize] = useState([]);
    const [score, setScore] = useState(0);
    const [status, setStatus] = useState("Fields");
    const [feedBack, setFeedBack] = useState([]);
    const [showScore, setShowScore] = useState(false);

    useEffect(() => {
        if(props.hiragana) {
            console.log("PROPS -> ",props.hiragana);
            var Letters = props.hiragana
            setAlphabet(Letters);
        }
        if(props.katakana) {
            console.log(props.hiragana);
            setAlphabet(props.katakana);
        }
    },[]);

    useEffect(() => {
        console.log("STATE -> ",alphabet);
        if(alphabet) {
            var index = parseInt(Math.random() * (alphabet.length - 0) + 0);
            setLetters(alphabet[index].letter);
            setSize([...size, index]);
        }
    },[alphabet]);

    function Confirm() {
        setField("");
        var index;
        var verify = true;
        var count = 0;

        for (let i = 0; i < alphabet.length; i++) {
            if (letters == alphabet[i].letter) {
                index = i
            }
        }

        setSize([...size, index]);

        if (field == alphabet[index].sound) {
            setStatus("FieldsHit");
            setScore(score + 1);
        } else {
            setFeedBack([...feedBack, {letter: alphabet[index].letter, sound: alphabet[index].sound}]);
            setStatus("FieldsMistake");
        }

        while (verify) {
            var random = parseInt(Math.random() * (alphabet.length - 0) + 0);
            count++;

            if (count == 71) {
                verify = false;
                setShowScore(true);
            }
            if (size.indexOf(random) > -1) {
                continue;
            } else {
                setLetters(alphabet[random].letter)
                verify = false;
            }
        }
    }

    return (
        <div style={{ flexWrap: "wrap", display: "flex" }}>
        {console.log(props)}
            {showScore == false ?
                <>
                    <div
                        style={{
                            width: "100%",
                            marginTop: 28,
                            fontSize: 116,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",

                        }}
                    >
                        {letters}
                    </div>
                    <div style={{ flexBasis: "100%", height: 0 }} />
                    <div
                        style={{
                            width: "100%",
                            fontSize: 32,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        <input className={status} value={field} onChange={(e) => setField(e.target.value)} />
                        <>
                            <button className="Buttons" onClick={() => Confirm()}>Confirmar</button>
                        </>
                        
                        <div style={{ flexBasis: "100%", height: 0 }} />
                        {feedBack.map((item) => {
                            return <div>{item.letter}</div> 
                        })}
                    </div>
                </> :
                <div style={{ flexWrap: "wrap", display: "flex", alignItems: "center", justifyContent: "center", marginTop:12}}>
                    <h1 style={{marginTop:24}}>Você acertou {score} letra(s)!</h1>
                    <div style={{ flexBasis: "100%", height: 0 }} />
                    <h1 style={{marginTop:24, marginBottom:24}}>Letras que você errou:</h1>
                    <div style={{ flexBasis: "100%", height: 0 }} />
                        {feedBack.map((item) => {
                            return <div>{item.letter}</div> 
                        })}
                </div>     
            }
        </div>
    );
}
