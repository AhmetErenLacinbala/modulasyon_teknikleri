import "./bgText.css";

export default function BgText({ text, bottom, left }) {
    return (
        <div style={{bottom:bottom, left:left}} className="openSansFont fontW700 bgText">
            <p className="bgTextContent">{text}</p>
        </div>
    )
}