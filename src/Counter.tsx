import React from 'react';
import './Counter.css';

const users = [
    { name: 'Bob' },
    { name: 'Jack' },
    { name: 'Jill' }
];

export default function Counter({ initialCount }: { initialCount: number }) {
    const [count, setCount] = React.useState(initialCount);

    return (
        <div>  
            <div className="cat"></div>

            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <p>{count}</p>
            <ul>
                {users.map((u, i) => <li key={i}>{u.name}</li>)}
            </ul>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
        </div>
    )
}
