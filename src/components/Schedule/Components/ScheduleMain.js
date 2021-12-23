import React from 'react';
import CalendarApp from './Calendar';
import ScheduleForm from '../../forms/ScheduleForm';

class ScheduleMain extends React.Component{
    constructor(){
        super()
        this.state = {
        }
    }
    render()
    {
        return (
            <main>
                <div className='Schedule-Heading'>
                    <hr />
                    <h2>Agendamento</h2>
                    <hr />
                </div>
                         
                <div className='Schedule-Context' >
                    <div className= 'Schedule-Content'>
                        <div className='Schedule-Calendar'>
                            <CalendarApp/>     
                        </div>
                        <div className='Schedule-Form-Content'>
                            <ScheduleForm submit={this.submit}/><br/>                      
                        </div> 
                    </div>
                </div>
            </main>
        )
    }
}

export default ScheduleMain;