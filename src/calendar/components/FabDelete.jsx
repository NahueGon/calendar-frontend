
import { useCalendarStore, useUiAStore } from "../../hooks"

export const FabDelete = () => {

    const { startDeletingEvent, hasEventSeleceted } = useCalendarStore()

    const handleDelete = () => {
        startDeletingEvent();
    }

    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={ handleDelete }
            style={{
                display: hasEventSeleceted ? '' : 'none'
            }}
        >
            <i className="fas fa-trash-alt" ></i>
        </button>
    )
}
