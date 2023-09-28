import {action} from '@storybook/addon-actions'
import {Accordion} from "../my-app/src/components/Accordion/Accordion";

export default {
    title: 'Accordion',
    component: Accordion

}

const callback = action("some item was clicked")


export const ModeChanging = () => <Accordion items={
    [
        {title: "Дима", value: 1},
        {title: "Sasha", value: 2},
        {title: "Egor", value: 3},
        {title: "Denis", value: 4},
    ]
} titleValue={"Нажми меня"} onClick={(value) => {alert(`user with ID ${value} should be happy`)}}/>

