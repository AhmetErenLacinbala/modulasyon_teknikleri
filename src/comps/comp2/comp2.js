import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";
import BgText from "./../bgText/bgText";



export default function Comp2(props) {
    return (
        <div className="comp">
            <div className="openSansFont fontW700 compContent">
                <p className='fontS48'>Modülasyona neden ihtiyaç duyuyoruz?</p>
                <p className='fontW400 fontS40'>Düşük frekanslı sinyaller yeterince enerji taşımadıkları için uzak mesafelere iletilemezler. Düşük
                    frekanstaki sinyalleri iletebilmek için yüksek frekanslı sinyaller aracı olarak kullanılırlar. Aracı olarak
                    kullanılan bu sinyallere taşıyıcı sinyal ismi verilir. Elimizdeki bilgiyi-sinyali uzak mesafelere iletmek
                    amacıyla taşıyıcı sinyalin frekansı, fazı ve ya genliği üzerinde modülasyon vasıtasıyla değişiklikler
                    yaparız.</p>
            </div>
        </div>
    );
}




