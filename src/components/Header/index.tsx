import { FiLogOut } from 'react-icons/fi';
import { Container, Content } from './styles';
import { useAuth } from '../../hooks/Auth';

interface HeaderProps {
    onOpenActivityModal: () => void;
    onOpenCourseUnitModal: () => void;
}

export function Header({onOpenActivityModal, onOpenCourseUnitModal}:HeaderProps) {

    const {signOut} = useAuth();

    function handleSignOut() {
        signOut();
    }

    return (
        <Container>
            <Content>
                <h1>My Activities Space</h1>
                <div>
                    <button
                        type="button"
                        onClick={onOpenCourseUnitModal}
                    >
                        Nova Unidade Curricular
                    </button>
                    <button
                        type="button"
                        onClick={onOpenActivityModal}
                    >
                        Nova Atividade
                    </button>
                    <button
                        type="button"
                        onClick={handleSignOut}
                    >
                        <FiLogOut size={20}/>
                    </button>
                </div>
            </Content>
        </Container>
    )
}