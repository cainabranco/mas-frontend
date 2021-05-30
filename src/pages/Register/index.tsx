import {FiArrowLeft, FiMail, FiLock, FiUser} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {useForm} from "react-hook-form";
import { Button } from '../../components/Button';
import {Container, Content, FormContainer, InputContainer, Background, Error} from './styles';

interface FormData {
    name: string;
    email: string;
    password: string;
}

export function Register(){

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)));

    return(
        <Container>
            <Content>
                <FormContainer>
                    <h2>Faça seu cadastro</h2>
                    <form onSubmit={onSubmit}>
                        <InputContainer>
                            <FiUser size={40}/>
                            <input
                                type="text"
                                placeholder="Nome"
                                {...register("name", {required:true})}
                            />
                        </InputContainer>
                        {errors.name && <Error>O preencimento do campo "Nome" é obrigatório</Error>}
                        <InputContainer>
                            <FiMail size={40}/>
                            <input
                                type="email"
                                placeholder="E-mail"
                                {... register("email", {required:true})}
                            />
                        </InputContainer>
                        {errors.email && <Error>O preencimento do campo "E-mail" é obrigatório</Error>}
                        <InputContainer>
                            <FiLock size={40}/>
                            <input
                                type="password"
                                placeholder="Senha"
                                {...register("password", {required:true})}
                            />
                        </InputContainer>
                        {errors.password && <Error>O preencimento do campo "Senha" é obrigatório</Error>}
                        <Button type="submit">Cadastrar</Button>
                    </form>
                    <Link to="/">
                        <FiArrowLeft size={40}/>
                        Voltar para login
                    </Link>
                </FormContainer>
            </Content>
            <Background />
        </Container>
    )
}