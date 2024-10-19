import { useSelector,useDispatch } from 'react-redux';
import { IncCounter,DecCounter } from '../../action';
import './index.css';

const Filter = ()=>{

    const counter = useSelector((state)=> state.changeCounter )

    const dispatch = useDispatch();


    const CounterInc = ()=>{

        dispatch(IncCounter(10))
    }


    const CounterDec = ()=>{

        dispatch(DecCounter(5))
    }

    return (


        <div className="filter-cont">

                        <h1> Counter App </h1>

                        <br/> <br/> 


                        <h1 style={{color:"red",fontSize:"50px"}}> {counter} </h1>

                        <br/> <br/>
                        <div>
                                    <button onClick={CounterDec} style={{marginRight:"20px"}}>Dec</button>
                                    <button onClick={CounterInc}>Inc</button>

                        </div>

        </div>

    )
}



export default Filter;