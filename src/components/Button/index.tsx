import {ButtonHTMLAttributes} from "react";
import {Container} from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{}

export function Button({children, ...rest}:ButtonProps) {
    return(
        <Container type="button" {... rest}>
            {children}
        </Container>
    )
}