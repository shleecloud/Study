import {useContext} from 'react';
import CounterContext from '../reducer/CounterContext';

const Movie = () => {
    const counterReducer = useContext(CounterContext);

    return (
        <div>
            <hr />
            <p>Movie.jsx</p>
            <p>counter state = {counterReducer.counterState}</p>
            <button onClick={() => counterReducer.counterDispatch({type: '@plus'})}>+</button>
            <button onClick={() => counterReducer.counterDispatch({type: '@minus'})}>-</button>
        </div>
    );
};

export default Movie;
