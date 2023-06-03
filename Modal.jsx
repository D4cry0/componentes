import { useNavigate } from '@shopify/app-bridge-react';


export const Modal = () => {

    const [ activeModal, setActiveModal ] = useState( false );

    const navigate = useNavigate();
    const returnMainMenu = useRef();

    const handleCancelOrder = useCallback(
        () => setActiveModal( !activeModal ), 
        [ activeModal ]
    );


    return (
        <>
        <Modal
            activator={ returnMainMenu }
            open={ activeModal }
            onClose={ handleCancelOrder }
            title="Exit"
            primaryAction={{
                content: 'Exit',
                onAction: () => navigate( "/" ),
            }}
            secondaryActions={[
            {
                content: 'Cancel',
                onAction: handleCancelOrder,
            },
            ]}
        >
            <Modal.Section>
            <TextContainer>
                <p>
                    Are you sure you want to exit?
                </p>
            </TextContainer>
            </Modal.Section>
        </Modal>
        <div ref={ returnMainMenu }>
            <Button onClick={ handleCancelOrder }>
                Cancel
            </Button>
        </div>
        </>
    )
}
