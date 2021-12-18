import React from 'react';
import scheduleList from './scheduleList';
import ScheduleCard from './ScheduleCard';
import CalendarApp from './Calendar';
import ScheduleForm from '../../forms/ScheduleForm';
import {Link} from 'react-router-dom';

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
                    <div className= 'Schedule-Content'>
                        <div className='Schedule-Calendar'>
                            <CalendarApp/>     
                        </div>
                        <div className='Schedule-Form-Content'>
                            <ScheduleForm submit={this.submit}/><br/>
                            <div className = "To-Signup-Schedule">Ainda não é cadastrado? <Link to="/signup">Cadastre-se aqui</Link>
                            </div>                        
                        </div> 
                    </div>
                </div>
            </main>
        )
    }
}

export default ScheduleMain;