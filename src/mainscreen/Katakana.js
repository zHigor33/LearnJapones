import React, { useEffect, useState } from 'react';
import '../index.css';

export default function Hiragana() {
    const [alphabet, setAlphabet] = useState([
        { letter: "ア", sound: "a" },
        { letter: "イ", sound: "i" },
        { letter: "ウ", sound: "u" },
        { letter: "エ", sound: "e" },
        { letter: "オ", sound: "o" },
        { letter: "カ", sound: "ka" },
        { letter: "キ", sound: "ki" },
        { letter: "ク", sound: "ku" },
        { letter: "ケ", sound: "ke" },
        { letter: "コ", sound: "ko" },
        { letter: "ガ", sound: "ga" },
        { letter: "ギ", sound: "gi" },
        { letter: "グ", sound: "gu" },
        { letter: "ゲ", sound: "ge" },
        { letter: "ゴ", sound: "go" },
        { letter: "サ", sound: "sa" },
        { letter: "シ", sound: "shi" },
        { letter: "ス", sound: "su" },
        { letter: "セ", sound: "se" },
        { letter: "ソ", sound: "so" },
        { letter: "ザ", sound: "za" },
        { letter: "ジ", sound: "ji" },
        { letter: "ズ", sound: "zu" },
        { letter: "ゼ", sound: "ze" },
        { letter: "ゾ", sound: "zo" },
        { letter: "タ", sound: "ta" },
        { letter: "チ", sound: "ti" },
        { letter: "ツ", sound: "tsu" },
        { letter: "テ", sound: "te" },
        { letter: "ト", sound: "to" },
        { letter: "ダ", sound: "da" },
        { letter: "ヂ", sound: "di" },
        { letter: "ヅ", sound: "du" },
        { letter: "デ", sound: "de" },
        { letter: "ド", sound: "do" },
        { letter: "ナ", sound: "na" },
        { letter: "ニ", sound: "ni" },
        { letter: "ヌ", sound: "nu" },
        { letter: "ネ", sound: "ne" },
        { letter: "ノ", sound: "no" },
        { letter: "ハ", sound: "ha" },
        { letter: "ヒ", sound: "hi" },
        { letter: "フ", sound: "fu" },
        { letter: "ヘ", sound: "he" },
        { letter: "ホ", sound: "ho" },
        { letter: "バ", sound: "ba" },
        { letter: "ビ", sound: "bi" },
        { letter: "ブ", sound: "bu" },
        { letter: "ベ", sound: "be" },
        { letter: "ボ", sound: "bo" },
        { letter: "パ", sound: "pa" },
        { letter: "ピ", sound: "pi" },
        { letter: "プ", sound: "pu" },
        { letter: "ペ", sound: "pe" },
        { letter: "ポ", sound: "po" },
        { letter: "マ", sound: "ma" },
        { letter: "ミ", sound: "mi" },
        { letter: "ム", sound: "mu" },
        { letter: "メ", sound: "me" },
        { letter: "モ", sound: "mo" },
        { letter: "ヤ", sound: "ya" },
        { letter: "ユ", sound: "yu" },
        { letter: "ヨ", sound: "yo" },
        { letter: "ラ", sound: "ra" },
        { letter: "リ", sound: "ri" },
        { letter: "ル", sound: "ru" },
        { letter: "レ", sound: "re" },
        { letter: "ロ", sound: "ro" },
        { letter: "ワ", sound: "wa" },
        { letter: "ヲ", sound: "wo" },
        { letter: "ン", sound: "n" },
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
