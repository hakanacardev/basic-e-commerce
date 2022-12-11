import Search from '@mui/icons-material/Search';
import * as React from 'react';
import "../App.css"
interface Iprops {
    icon?: JSX.Element
}
export default function Input(props: Iprops) {
    return <label className='inputLabel'>
        {props.icon}
        <input className='inputStyle' type="search"></input>
    </label>
}