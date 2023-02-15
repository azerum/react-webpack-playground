const users = [
    { name: 'Bob' },
    { name: 'Jack' },
    { name: 'Jill' }
];

function Counter({ initialCount }) {
    const [count, setCount] = React.useState(initialCount);

    return React.createElement(
        'div', 
        null,

        React.createElement(
            'button', 
            { 
                onClick: () => setCount(prev => prev + 1),
            },
            '+'
        ),
        
        React.createElement(
            'p', 
            null, 
            count
        ),

        React.createElement(
            'ul',
            null,
            users.map((u, i) => (React.createElement('li', { key: i}, u.name)))
        ),

        React.createElement(
            'button', 
            { 
                onClick: () => setCount(prev => prev - 1) 
            }, 
            '-'
        ),
    );
}

const app = React.createElement(Counter, { initialCount: 42 });

const root = ReactDOM.createRoot(banana);
root.render(app);
