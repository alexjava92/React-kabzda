

import {useState} from "react";

import UncontrolledOnOff from "../my-app/src/components/UncontrolledOnOff/UncontrolledOnOff";
import {action} from "@storybook/addon-actions";



export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}

const callback = action("on or off clicked")

export const OnMode = () => <UncontrolledOnOff onChange={callback} isActive={true}/>
export const OffMode = () => <UncontrolledOnOff onChange={callback} isActive={false}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <UncontrolledOnOff onChange={setValue}  isActive={value}/>
}

