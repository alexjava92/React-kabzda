// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
import onOff from "../my-app/src/components/OnOff/OnOff";
import {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Input',

}

export const UncontrolledInput = () => <input/>

export const ControlledInputFixedValue = () => <input value={"it-incubator"}/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")

    const onChange = (e) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }
    return <><input onChange={onChange}/> - {value} </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>
        - actual value: {value} </>
}

export const ControlledInput = () =>{
    const [parentValue, setParentValue] = useState("");

    const onChange =(e: ChangeEvent<HTMLInputElement>) =>{
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () =>{
    const [parentValue, setParentValue] = useState(true);

    const onChange =(e: ChangeEvent<HTMLInputElement>) =>{
        setParentValue(!parentValue)
    }

    return <input type="checkbox" checked={parentValue} onChange={onChange}/>


}

export const ControlledSelect = () =>{
    const [parentValue, setParentValue] = useState<string | undefined>("0");

    const onChange =(e: ChangeEvent<HTMLSelectElement>) =>{
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={"1"} >Moscow</option>
        <option value={"2"} >Minsk</option>
        <option value={"3"} >USA</option>
    </select>
}
