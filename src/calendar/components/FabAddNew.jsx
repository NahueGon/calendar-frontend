import { addHours } from "date-fns";
import { useCalendarStore, useUiAStore } from "../../hooks"

export const FabAddNew = () => {

    const { openDateModal } = useUiAStore();
    const { setActiveEvent } = useCalendarStore()

    const handleClickNew = () => {
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours( new Date(), 2 ),
            bgColor: '#fafafa',
            user: {
                _id: '123',
                name: 'Nahuel'
            }
        });

        openDateModal();
    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={ handleClickNew }
        >
            <i className="fas fa-plus" ></i>
        </button>
    )
}
