import 'core-js';

import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';

const app = <Counter initialCount={42} />;

const container = document.querySelector('#root')!;
const root = ReactDOM.createRoot(container);

root.render(app);

//[1, 2, 3, 4], 42
//
//(r, a) => r + a
//
//(42, 1) => 42 + 1
//(43, 2) => 43 + 2
//(45, 3) => 45 + 3
//(48, 4) => 48 + 4
//52

const pipe = (...fns) => x => fns.reduce(
    (promise, f) => promise.then(f), 
    Promise.resolve(x)
);

pipe(a, b)(42).then(console.log);

function a(value: number) {
    return new Promise((resolve, _) => {
        setTimeout(() => resolve(value), 5000)
    });
}

function b(value: number) {
    return new Promise((resolve, _) => {
        setTimeout(() => resolve(value * 2), 1000)
    });
}
