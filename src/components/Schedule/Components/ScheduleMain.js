import React from 'react';
import scheduleList from './scheduleList';
import ScheduleCard from './ScheduleCard';
import Calendar from './Calendar';
import CalendarApp from './Calendar';

class ScheduleMain extends React.Component{
    constructor(){
        super()
        this.state = {
            data: scheduleList
        }
    }
    render()
    {
        const scheduleData = this.state.data.map(item => <ScheduleCard key={item.name} item={item}/>)
        return (
            <main>
                <div className='Schedule-Heading'>
                    <hr />
                    <h2>Agendamento</h2>
                    <hr />
                </div>
                           
                <div className='Schedule-Context' >
                    <div className='Schedule-Calendar'>
                        <CalendarApp/>     
                    </div>
                </div>
            </main>
        )
    }
}

export default ScheduleMain;