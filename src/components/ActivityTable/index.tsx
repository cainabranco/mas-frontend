import { useEffect, useState } from 'react';
import {format, parseISO} from 'date-fns'
import { Container } from './styles';
import api from '../../services/api';

interface CourseUnit {
    name: string;
}

interface Activity {
    id: string;
    name: string;
    grade: number;
    activity_date: string;
    course_unit: CourseUnit
}

export function ActivityTable() {

    const [activities, setActivities] = useState<Activity[]>([])

    useEffect(() => {

        api.get('/activity')
            .then(response => setActivities(response.data))
    },[])

    return (
        <Container>
            <table>
                <thead>
                <tr>
                    <th>Unidade Curricular</th>
                    <th>Atividade</th>
                    <th>Avaliação</th>
                    <th>Data</th>
                </tr>
                </thead>
                <tbody>
                {
                    activities.map(activity => {
                        return (
                            <tr key={activity.id}>
                                <td>{activity.course_unit.name}</td>
                                <td>{activity.name}</td>
                                <td>{activity.grade}</td>
                                <td>{format(parseISO(activity.activity_date), 'dd/MM/yyyy')}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </Container>
    )
}