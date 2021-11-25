import React, {useState} from 'react';
import '../App.css';
import axios from 'axios';
import { api_base } from '../config';

function useInput(props: { type: string, labelName: string }) {
    const [value, setValue] = useState(0);
    const input = (
        <div style={{margin: 10}}>
            <label>
                {props.labelName}:
                <input value={value} onChange={e => setValue(parseInt(e.target.value))} type={props.type}
                       className="Input"/>
            </label>
        </div>
    );
    return [value, input];
}


export default function FormComponent() {
    const [num1, num1Input] = useInput({type: "text", labelName: "Number 01"});
    const [num2, num2Input] = useInput({type: "text", labelName: "Number 02"});
    const [result, setResult] = useState("Empty");

    async function submitAction() {
        let response = await axios.post(api_base + "calc", {num1, num2}, {
            headers: {
                contentType: "application/json"
            }
        });
        setResult(JSON.stringify(response.data));
    }

    return (
        <>
            {num1Input}
            {num2Input}
            <div style={{margin: 50}}>
                <button type="submit" className="Button" onClick={submitAction}>Submit</button>
            </div>
            <p className="Result">
                <b>Result:</b> {result}
            </p>
        </>
    );
}