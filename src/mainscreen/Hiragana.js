import React, { useEffect, useState } from 'react';
import '../index.css';

export default function Hiragana() {
    const [alphabet, setAlphabet] = useState([
        { letter: "あ", sound: "a" },
        { letter: "い", sound: "i" },
        { letter: "う", sound: "u" },
        { letter: "え", sound: "e" },
        { letter: "お", sound: "o" },
        { letter: "か", sound: "ka" },
        { letter: "き", sound: "ki" },
        { letter: "く", sound: "ku" },
        { letter: "け", sound: "ke" },
        { letter: "こ", sound: "ko" },
        { letter: "が", sound: "ga" },
        { letter: "ぎ", sound: "gi" },
        { letter: "ぐ", sound: "gu" },
        { letter: "げ", sound: "ge" },
        { letter: "ご", sound: "go" },
        { letter: "さ", sound: "sa" },
        { letter: "し", sound: "shi" },
        { letter: "す", sound: "su" },
        { letter: "せ", sound: "se" },
        { letter: "そ", sound: "so" },
        { letter: "ざ", sound: "za" },
        { letter: "じ", sound: "ji" },
        { letter: "ず", sound: "zu" },
        { letter: "ぜ", sound: "ze" },
        { letter: "ぞ", sound: "zo" },
        { letter: "た", sound: "ta" },
        { letter: "ち", sound: "ti" },
        { letter: "つ", sound: "tsu" },
        { letter: "て", sound: "te" },
        { letter: "と", sound: "to" },
        { letter: "だ", sound: "da" },
        { letter: "ぢ", sound: "di" },
        { letter: "づ", sound: "du" },
        { letter: "で", sound: "de" },
        { letter: "ど", sound: "do" },
        { letter: "な", sound: "na" },
        { letter: "に", sound: "ni" },
        { letter: "ぬ", sound: "nu" },
        { letter: "ね", sound: "ne" },
        { letter: "の", sound: "no" },
        { letter: "は", sound: "ha" },
        { letter: "ひ", sound: "hi" },
        { letter: "ふ", sound: "fu" },
        { letter: "へ", sound: "he" },
        { letter: "ほ", sound: "ho" },
        { letter: "ば", sound: "ba" },
        { letter: "び", sound: "bi" },
        { letter: "ぶ", sound: "bu" },
        { letter: "べ", sound: "be" },
        { letter: "ぼ", sound: "bo" },
        { letter: "ぱ", sound: "pa" },
        { letter: "ぴ", sound: "pi" },
        { letter: "ぷ", sound: "pu" },
        { letter: "ぺ", sound: "pe" },
        { letter: "ぽ", sound: "po" },
        { letter: "ま", sound: "ma" },
        { letter: "み", sound: "mi" },
        { letter: "む", sound: "mu" },
        { letter: "め", sound: "me" },
        { letter: "も", sound: "mo" },
        { letter: "や", sound: "ya" },
        { letter: "ゆ", sound: "yu" },
        { letter: "よ", sound: "yo" },
        { letter: "ら", sound: "ra" },
        { letter: "り", sound: "ri" },
        { letter: "る", sound: "ru" },
        { letter: "れ", sound: "re" },
        { letter: "ろ", sound: "ro" },
        { letter: "わ", sound: "wa" },
        { letter: "を", sound: "wo" },
        { letter: "ん", sound: "n" },
    ]);
    const [letters, setLetters] = useState();
    const [field, setField] = useState();
    const [size, setSize] = useState([]);
    const [score, setScore] = useState(0);
    const [status, setStatus] = useState("Fields");
    const [feedBack, setFeedBack] = useState([]);
    const [showScore, setShowScore] = useState(false);

    useEffect(() => {
        var index = parseInt(Math.random() * (alphabet.length - 0) + 0);
        setLetters(alphabet[index].letter);
        setSize([...size, index]);
    }, []);

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
