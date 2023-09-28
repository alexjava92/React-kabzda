

import {useState} from "react";
import OnOff from "../my-app/src/components/OnOff/OnOff";



export default {
    title: 'OnOff',
    component: OnOff,
}

export const OnMode = () => <OnOff on={true} onChange={x=>x} isActive={true}/>
export const OffMode = () => <OnOff on={false} onChange={x=>x} isActive={false}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onChange={setValue} isActive={value}/>
}

