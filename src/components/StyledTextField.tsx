import Search from '@mui/icons-material/Search';
import React, { useState, useContext } from 'react';
import "../App.css"
import { useCustomContext } from '../context/GlobalContext';
interface Iprops {
    icon?: JSX.Element
}
export default function Input(props: Iprops) {
    const { search, setSearch } = useCustomContext() as any
    return <label className='inputLabel'>
        {props.icon}
        <input value={search} onChange={e => setSearch(e.target.value)} className='inputStyle' type="search"></input>
    </label>
}