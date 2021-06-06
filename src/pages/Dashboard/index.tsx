import { useState } from 'react';
import { Header } from "../../components/Header";
import { ActivityTable } from '../../components/ActivityTable';
import { Summary } from '../../components/Summary';
import {NewActivityModal} from '../../components/NewActivityModal';
import {NewCourseUnitModal} from '../../components/NewCourseUnitModal';

import {Container} from './styles'

export function Dashboard() {

    const [isNewActivityModalOpen, setIsNewActivityModalOpen] = useState(false)
    const [isNewCourseUnitModalOpen, setIsNewCourseUnitModalOpen] = useState(false)


    function handleOpenActivityModal(){
        setIsNewActivityModalOpen(true);
    }

    function handleCloseActivityModal(){
        setIsNewActivityModalOpen(false);
    }

    function handleOpenCourseUnitModal(){
        setIsNewCourseUnitModalOpen(true);
    }

    function handleCloseCourseUnitModal(){
        setIsNewCourseUnitModalOpen(false);
    }


    return (
        <>
            <Header
                onOpenActivityModal={handleOpenActivityModal}
                onOpenCourseUnitModal={handleOpenCourseUnitModal}
            />
            <Container>
                <Summary />
                <ActivityTable />
            </Container>
            <NewActivityModal
                isOpen={isNewActivityModalOpen}
                onRequestClose={handleCloseActivityModal}
            />
            <NewCourseUnitModal
                isOpen={isNewCourseUnitModalOpen}
                onRequestClose={handleCloseCourseUnitModal}
            />
        </>
    )
}