import {useReducer} from 'react';
import Movie from './movie/Movie';
import CounterContext from './reducer/CounterContext';
import counterReducer from './reducer/counterReducer';

function App() {
    const [counterState, counterDispatch] = useReducer(counterReducer, 0);

    return (
        <CounterContext.Provider value={{counterState, counterDispatch}}>
            <div className="App">
                <p>App.jsx</p>
                <Movie />
            </div>
        </CounterContext.Provider>
    );
}

export default App;
