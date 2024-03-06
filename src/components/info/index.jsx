import react from "react";
import { Container, Box, Value, Label, LabelContainer } from "./styles";
import modules from "../../assets/modules";

const Info = ({data, goBack}) => {

    if (!data) return <></>
    return (
        <Container>
            <Box>
                <LabelContainer>
                   <Label>Nome:</Label>
                </LabelContainer>
                <Value>
                    <p>{data.name}</p>
                </Value>

                <LabelContainer>
                   <Label>Categoria:</Label>
                </LabelContainer>
                <Value>
                    <p>{data.category}</p>
                </Value>

                <LabelContainer>
                   <Label>Descrição:</Label>
                </LabelContainer>
                <Value>
                    <p>{data.description}</p>
                </Value>

                <LabelContainer>
                   <Label>Valor por acesso:</Label>
                </LabelContainer>
                <Value>
                    <p>{data.value}</p>
                </Value>
            </Box>
        </Container>
    )
}

export default Info;