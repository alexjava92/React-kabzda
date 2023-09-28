import {action} from '@storybook/addon-actions'
import {Select} from "../my-app/src/components/Select/Select";
import {ChangeEvent, useState} from "react";


export default {
    title: 'Select',
    component: Select

}

const callback = action("some item was clicked")


export const WithValue = () => {
    const [value, setValue] = useState("2")
   return <>

    <Select value={value} onChange={setValue} items={[
        {title: "Дима", value: "1"},
        {title: "Sasha", value: "2"},
        {title: "Egor", value: "3"},
        {title: "Denis", value: "4"},
    ]}/>
   </>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <>

        <Select value={value} onChange={setValue} items={[
            {title: "Дима", value: "1"},
            {title: "Sasha", value: "2"},
            {title: "Egor", value: "3"},
            {title: "Denis", value: "4"},
        ]}/>
    </>
}


