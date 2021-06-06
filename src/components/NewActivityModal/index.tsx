import Modal from "react-modal";
import {useForm} from "react-hook-form";
import {FiX} from "react-icons/fi";
import {Container, Error} from "./styles";
import api from "../../services/api"
import {useEffect, useState} from "react";

interface NewActivityModalProps {
    isOpen:boolean;
    onRequestClose: () => void;
}

interface NewActivityModalData {
    courseUnitId:string;
    name: string;
    grade: number;
    activity_date: Date;
}

interface CourseUnit {
    id: string;
    name: string;
    description: string;
}


export function NewActivityModal({isOpen, onRequestClose}:NewActivityModalProps) {

    const [courseUnits, setCourseUnits] = useState<CourseUnit[]>([]);

    useEffect(() => {
        api.get('/courseunit')
            .then(response => setCourseUnits(response.data))
    },[])

    const {register, handleSubmit, formState: {errors}} = useForm<NewActivityModalData>()

    const onSubmit = handleSubmit(data => api.post('/activity', data).then(onRequestClose));

    return(
        <Modal isOpen={isOpen}
               onRequestClose={onRequestClose}
               overlayClassName="react-modal-overlay"
               className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar Atividade</h2>
                <button
                    type="button"
                    onClick={onRequestClose}
                    className="react-modal-close"
                >
                    <FiX size={20}/>
                </button>
                <form onSubmit={onSubmit}>
                    <select {...register("courseUnitId")}>
                        <option selected value="">Selecione a Unidade Curricular</option>
                        {courseUnits.map(courseUnit => {
                            return (
                                <option value={courseUnit.id}>{courseUnit.name}</option>
                            )
                        })}
                    </select>
                    {errors.courseUnitId && <Error>O prenchimento do campo é obrigatório</Error>}
                    <input
                        type="text"
                        placeholder="Atividade"
                        {...register("name")}
                    />
                    {errors.name && <Error>O prenchimento do campo é obrigatório</Error>}
                    <input
                        type="number"
                        step=".01"
                        placeholder="Nota da avaliação"
                        {...register("grade")}
                    />
                    {errors.grade && <Error>O prenchimento do campo é obrigatório</Error>}
                    <input
                        type="date"
                        placeholder="Data da atividade"
                        {...register("activity_date")}
                    />
                    {errors.activity_date && <Error>O prenchimento do campo é obrigatório</Error>}
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </Container>
        </Modal>
    )
}