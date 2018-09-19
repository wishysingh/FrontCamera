import React from 'react';
import Button from '@material-ui/core/Button';

const Buttons = ({click,value}) => {
    return(
        <div className='but'>
            <Button variant="contained" color={`${value ? 'primary' : 'secondary'}`} className="but1" onClick={() => click(value)}>Click Me</Button>
        </div>
    )
}
export default Buttons;