import { useEffect, useState } from 'react';
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, NavBar } from '../'
import { localizer, getMessagesEs } from '../../helpers';
import { useUiAStore, useCalendarStore, useAuthStore } from '../../hooks';

export const CalendarPage = () => {

    const { user } = useAuthStore();
    const { openDateModal } = useUiAStore();
    const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();

    const [ lastView, setLastView ] = useState(localStorage.getItem('lastview') || 'week');

    const eventStyleGetter = ( event, start, end, isSelected ) => {

        const isMyEvent = ( user.uid === event.user._id ) || ( user.uid === event.user.uid );

        const style = {
            backgroundColor: isMyEvent ? '#347CF7' : '#465660',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white',
        }

        return {
            style
        }
    }

    const onDoubleClick = ( event ) => {
        openDateModal();
    }

    const onSelect = ( event ) => {
        setActiveEvent( event );
    }

    const onViewChange = ( event ) => {
        localStorage.setItem('lastview', event);
        setLastView( event )
    }

    useEffect(() => {
        startLoadingEvents();
    }, [])
    

    return (
        <>
            <NavBar />

            <Calendar
                culture='es'
                localizer={ localizer }
                events={ events }
                defaultView={ lastView }
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc( 100vh - 58px )' }}
                messages={ getMessagesEs() }
                eventPropGetter={ eventStyleGetter }
                components={{
                    event: CalendarEvent  
                }}

                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelect }
                onView={ onViewChange }
            />

            <CalendarModal />
            <FabAddNew />

            
            <FabDelete />
        </>
    )
}
