import { ActivityTable } from "../../components/ActivityTable";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";

import {Container} from './styles';

export function Dashboard(){
    return(
        <>
            <Header />
            <Container>
                <Summary />
                <ActivityTable />
            </Container>
        </>
    )
}