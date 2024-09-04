const person: {
    name: string;
    age: number,
    hobbies: string[],
    role: [number, string], // This is tuple
} = {
    name: 'John Doe',
    age: 20,
    hobbies: ['Cooking', 'Sports'],
    role: [2, 'author']
};

console.log([person])