import { useState } from 'react'
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'


const Calculadora = () => {

        const [ calc, setCalc ] = useState('')
        const Receba = (valor) => {
            if (valor == '='){
            setCalc(eval(calc))
            console.log(calc)
            }else
                setCalc( calc + valor )
    
        }

        const Button = ({ texto, RetornoPai }) => {
            return (
                <div>
                    <input type="button"
                        value = { texto }
                        onClick = { () => RetornoPai( texto ) }
                    />
                </div>
            )
            
        }
    return (
        <div>
            <h1>Calculadora</h1>
            <Stack direction="row" spacing={2}>
      
            <TextField id="outlined-basic" label="Valor" variant="outlined"
                value = { calc }
            />
            </Stack>

            <Stack direction="row" spacing={2} margin={1}>
            <Button variant="contained" texto="1" RetornoPai={ Receba }>1</Button>
            <Button variant="contained" texto="2" RetornoPai={ Receba }>2</Button>
            <Button variant="contained" texto="3" RetornoPai={ Receba }>3</Button>
            </Stack>

            <Stack direction="row" spacing={2} margin={1}>
            <Button variant="contained" texto="4" RetornoPai={ Receba }>4</Button>
            <Button variant="contained" texto="5" RetornoPai={ Receba }>5</Button>
            <Button variant="contained" texto="6" RetornoPai={ Receba }>6</Button>
            </Stack>

            <Stack direction="row" spacing={2} margin={1}>
            <Button variant="contained" texto="7" RetornoPai={ Receba }>7</Button>
            <Button variant="contained" texto="8" RetornoPai={ Receba }>8</Button>
            <Button variant="contained" texto="9" RetornoPai={ Receba }>9</Button>
            </Stack>

            <Stack direction="row" spacing={2} margin={1}>
            <Button variant="contained" texto="0" RetornoPai={ Receba }>0</Button>
            <Button variant="contained" texto="+" RetornoPai={ Receba }>+</Button>
            <Button variant="contained" texto="-" RetornoPai={ Receba }>-</Button>
            
            </Stack>
            <Stack direction="row" spacing={2} margin={1}>
            <Button variant="contained" texto="/" RetornoPai={ Receba }>/</Button>
            <Button variant="contained" texto="*" RetornoPai={ Receba }>*</Button>
            <Button variant="contained" texto="=" RetornoPai={ Receba }>=</Button>
            
            </Stack>

           
            
        </div>
    )
}
export default Calculadora