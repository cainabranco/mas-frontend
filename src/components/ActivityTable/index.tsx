import {Container} from "./styles";

export function ActivityTable() {
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
                <tr>
                    <td>Programação Web</td>
                    <td>Desenvolvimento do Frontend</td>
                    <td>8.50</td>
                    <td>05/04/2021</td>
                </tr>
                <tr>
                    <td>Programação Web</td>
                    <td>Implmentação de autenticação</td>
                    <td>9.00</td>
                    <td>05/04/2021</td>
                </tr>
                <tr>
                    <td>Programação Web</td>
                    <td>Alterar estilos de páginas</td>
                    <td>10.00</td>
                    <td>05/04/2021</td>
                </tr>
                </tbody>
            </table>
        </Container>
    )
}