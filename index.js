import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState("type markdown here");

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };
    const nestedData = [
        [
        { name: 'Alice', age: 30 },
        { name: 'Mark', age: 25 }
        ],
        [
        { name: 'Sara', age: 27 },
        { name: 'Paul', age: 29 }
        ]
    ];

    const nestedNames = nestedData.flatMap(group => group.map(person => person.name));
    console.log(nestedNames);
    const data = [
        { name: 'John', age: 28 },
        { name: 'Jane', age: 32 },
        { name: 'Bob', age: 24 }
    ];

    const names = data.map(person => person.name);
    console.log(names);
    const reverseSentence = (sentence) => {
        return sentence.split(' ').reverse().join(' ').replace(/^\w/, (c) => c.toUpperCase());
    };

    const reversedMarkdown = reverseSentence(e.target.value);
    setMarkdown(reversedMarkdown);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <textarea
                value={markdown}
                onChange={handleChange}
                style={{ width: '50%', height: '200px', marginBottom: '20px' }}
            />
            <div style={{ width: '50%', border: '1px solid #ddd', padding: '10px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}