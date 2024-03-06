import { AiOutlineBorder, AiOutlineCheckSquare, AiOutlineEye } from "react-icons/ai";
import React, { useState } from 'react';

import { Container, Box, Section, Module } from './styles';
import Info from "../../components/info";
import modules from '../../assets/modules';

const Main = () => {
    const [selects, setSelects] = useState([]);
    const [view, setView] = useState(null);

    const updateSelects = (mod) => {
        var hasMod = selects.findIndex(x => x.name == mod.name);
        setSelects(hasMod != -1 ? selects.filter(x => x.name != mod.name) : [...selects, mod ]);
    };

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
                    2
                </Section>
            </Box>
        </Container>
    )
}

export default Main