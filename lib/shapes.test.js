const {Circle, Triangle, Square} = require('./shapes.js');

describe('Shapes', () => {
    describe('triangle',()=>{
        it('should make a triangle logo', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
});
describe('Shapes', () => {
    describe('circle',()=>{
        it('should make a circle logo', () => {
            const shape = new Circle();
            shape.setColor("red");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
        })
    })
});
describe('Shapes', () => {
    describe('square',()=>{
        it('should make a square logo', () => {
            const shape = new Square();
            shape.setColor("yellow");
            expect(shape.render()).toEqual('<rect x="50" width="200" height="200" fill="yellow" />');
        })
    })
});
