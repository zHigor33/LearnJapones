import React, { useEffect, useState } from 'react';
import '../index.css';
import Alphabet from './Alphabet.js';

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
    const [katakana, setKatakana] = useState([
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
    const [hiragana, setHiragana] = useState([
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

    return (
        <>
            {option.option == "1" ?
                <>
                    <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }}>
                        <Alphabet hiragana={hiragana} />
                    </div>
                </>
                : undefined
            }
            {option.option == "2" ?
                <>
                    <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }}>
                        <Alphabet katakana={katakana} />
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
