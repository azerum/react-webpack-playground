
import React from 'react';
import ReactDOM from 'react-dom';
import image from './js-ecosystem.jpg';

const users = [
    { name: 'Bob' },
    { name: 'Jack' },
    { name: 'Jill' }
];

function Counter({ initialCount }) {
    const [count, setCount] = React.useState(initialCount);

    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <p>{count}</p>
            <ul>
                {users.map((u, i) => <li key={i}>{u.name}</li>)}
            </ul>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
            <img src={image} />
        </div>
    );
}

const app = <Counter initialCount={42} />;

const root = ReactDOM.createRoot(banana);
root.render(app);
