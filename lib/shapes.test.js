const {Circle, Triangle, Square} = require('./shapes.js');

//This is the test for the triangle
describe('Shapes', () => {
    describe('triangle',()=>{
        it('Should make a logo with a blue colored triangle shape', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
});

//This is the test for the circle
describe('Shapes', () => {
    describe('circle',()=>{
        it('Should make a logo with a red colored circle shape', () => {
            const shape = new Circle();
            shape.setColor("red");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
        })
    })
});

//This is the test for the square
describe('Shapes', () => {
    describe('square',()=>{
        it('Should make a logo with a yellow colored square shape', () => {
            const shape = new Square();
            shape.setColor("yellow");
            expect(shape.render()).toEqual('<rect x="50" width="200" height="200" fill="yellow" />');
        })
    })
});
