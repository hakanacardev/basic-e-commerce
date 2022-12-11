import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Interface } from 'readline';
interface Iprops {
    children: JSX.Element
}
export default function BasicCard(props: Iprops) {
    return (
        <Card >
            <CardContent>
                {props.children}
            </CardContent>
        </Card>
    );
}