import React, {useCallback, useEffect, useState} from 'react';
import {Observable, fromEvent} from 'rxjs';
import {map, buffer, debounceTime, filter} from 'rxjs/operators';

import { Buttons } from './Components/Buttons';
import {Display} from "./Components/Display";

const App = () => {
    const [state, setState] = useState('stop');
    const [time, setTime] = useState(0);

    const click$ = fromEvent(document, 'click');

    const start = () => {
        setState('start');
    };

    const stop = useCallback(() => {
        setTime(0);
        setState('stop');
    }, []);

    const reset = useCallback(() => {
        setTime(0);
    }, []);


    const wait = (event) => {
        let doubleClick = click$
            .pipe(
                buffer(click$.pipe(debounceTime(250))),
                map(clicks => clicks.length),
                filter(clicksLength => clicksLength >= 2)
            );
            /*const sub = */doubleClick.subscribe(() => {
                if (event.target.id === 'wait') {
                    setState('wait')
                }
                // sub.unsubscribe();
                // event.target.id = null;
            });
    }


    useEffect(() => {
        const timer = new Observable((observer) => {
            let count = 0;
            const intervalId = setInterval(() => {
                observer.next(count += 1);
            }, 1000);

            return () => {
                clearInterval(intervalId);
            };
        });

        const subscription = timer
            .subscribe({
                next: () => {
                    if (state === 'start') {
                        setTime((prev) => prev + 1);
                    }
                },
            });

        return (() => {
            subscription.unsubscribe();
        });
    }, [state]);

    return (
        <section className="timer">
            <Display time={time}/>
            <Buttons
                time={time}
                start={start}
                stop={stop}
                reset={reset}
                wait={wait}
            />
        </section>
    );
};

export default App;