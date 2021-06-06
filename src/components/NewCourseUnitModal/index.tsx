import React from "react";
import Modal from "react-modal";
import {useForm} from "react-hook-form";
import {FiX} from "react-icons/fi";
import {Container, Error} from "./styles";
import api from "../../services/api"

interface NewCourseUnitProps {
    isOpen:boolean;
    onRequestClose: () => void;
}

interface NewCourseUnitData {
    name: string;
    description: string;
}

export function NewCourseUnitModal({isOpen, onRequestClose}:NewCourseUnitProps) {

    const {register, handleSubmit, formState: {errors}} = useForm<NewCourseUnitData>();

    const onSubmit = handleSubmit(data => api.post('/courseunit', data).then(onRequestClose));
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar Unidade Curricular</h2>
                <button
                    type="button"
                    onClick={onRequestClose}
                    className="react-modal-close"
                >
                    <FiX size={20}/>
                </button>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="Nome"
                        {...register("name", {required:true})}
                    />
                    {errors.name && <Error>O preenchimento do campo "Nome" é obrigatório</Error>}
                    <input
                        type="text"
                        placeholder="Descrição"
                        {...register("description", {required:true})}
                    />
                    {errors.description && <Error>O preenchimento do campo "Descrição" é obrigatório</Error>}
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </Container>
        </Modal>
    )
}