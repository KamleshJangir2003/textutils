import React, {useState} from 'react'


export default function Textform(props) {
    const handleupclick=()=>{
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText("new text ")
    }
    const handleloclick=()=>{
       
        let newText = text.tolowerCase();
        setText("new text ")
    }

    const handleonchange=(Event)=>{
        console.log("on change");
        setText(Event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container">

      <div className="mb-3">
  <label for="mybox" className="form-label">Enter the text to analyze</label>
  <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="5"></textarea>
</div>
<button className='btn btn-primary mx-1'onClick={handleupclick}> covert to uppercase</button>
<button className='btn btn-primary mx-1'onClick={handleloclick}> covert to lowercase</button>
    </div>
    <div className="container my-3">
        <h2>your text summary</h2>
        <p>{text.split("").length}word and{text.length} characters</p>
        <p>{0.008 * text.split("").length}mintus read</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
</>
  )
}
