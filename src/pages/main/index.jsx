import { AiOutlineBorder, AiOutlineCheckSquare, AiOutlineEye } from "react-icons/ai";
import React, { useState } from 'react';

import { Container, Box, Section, Module, Input, Value, Label, LabelContainer } from './styles';
import formatNumber from "../../services/formatNumber";
import descountData from "../../assets/descount";
import modules from '../../assets/modules';
import Info from "../../components/info";

const Main = () => {
    const [descount, setDescount] = useState(0);
    const [selects, setSelects] = useState([]);
    const [view, setView] = useState(null);
    const [size, setSize] = useState(0);

    const updateSelects = (mod) => {
        var hasMod = selects.findIndex(x => x.name == mod.name);
        setSelects(hasMod != -1 ? selects.filter(x => x.name != mod.name) : [...selects, mod ]);
    };

    const updateDescount = (currentSize) => {
        Object.entries(descountData).forEach(([key, value]) => {
            const sizeThreshold = parseInt(key, 10);
          
            if (currentSize >= sizeThreshold) {
              setDescount(value);
            }
          });
          
    }

    if (view) return <Info data={view} goBack={() => setView(null)}/>
    return (
        <Container>
            <Box>
                <Section>
                    {
                        modules.map((mod, i) => {
                            return (
                                <Module key={i}>
                                    <div>
                                    { 
                                        selects.findIndex(x => x.name == mod.name) != -1 ? <AiOutlineCheckSquare onClick={()=>updateSelects(mod)} color={'#eeeeee'} size={20}/> : <AiOutlineBorder  onClick={()=>updateSelects(mod)} color={'#eeeeee'} size={20}/>
                                    }
                                    <AiOutlineEye class='eye' onClick={() => setView(mod)} color={'#eeeeee'} size={20}/>
                                    </div>
                                    <p>{mod.name}</p>
                                </Module>
                            )
                        })
                    }
                </Section>
                <span class="divider"/>
                <Section>
                    <Input  min={0} type="number" value={size} onChange={(e) => setSize(e.target.value) & updateDescount(e.target.value)} />
                    {
                        (selects.length > 0 && size > 0) && (
                            <>                    
                                <LabelContainer>
                                    <Label>Valor por aluno:</Label>
                                </LabelContainer>
                                <Value>
                                <p>{formatNumber(selects.reduce((acc, x) => acc + x.value, 0))}</p>
                                </Value>

                                <LabelContainer>
                                    <Label>Valor por aluno com desconto:</Label>
                                </LabelContainer>
                                <Value>
                                <p>{formatNumber(selects.reduce((acc, x) => acc + (x.value - descount), 0))}</p>
                                </Value>

                                <LabelContainer>
                                    <Label>Desconto por aluno:</Label>
                                </LabelContainer>
                                <Value>
                                <p>{formatNumber(descount)}</p>
                                </Value>

                                <LabelContainer>
                                    <Label>Valor total:</Label>
                                </LabelContainer>
                                <Value>
                                <p>{formatNumber( selects.reduce((acc, x) => acc + x.value, 0) * size)}</p>
                                </Value>

                                <LabelContainer>
                                    <Label>Valor total com desconto:</Label>
                                </LabelContainer>
                                <Value>
                                <p>{formatNumber( selects.reduce((acc, x) => acc + (x.value - descount), 0) * size)}</p>
                                </Value>
                            </>
                        )
                    }
                </Section>
            </Box>
        </Container>
    )
}

export default Main