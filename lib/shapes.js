//This is the class for the Shapes in general
class Shape {
    constructor(){
        this.color = "";
    }

    setColor(colorVar){
        this.color = colorVar;
    }
}

//Circle Class that provides the svg line of code for a circle shape
class Circle extends Shape {
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    } 
};

//Triangle Class that provides the svg line of code for a triangle shape
class Triangle extends Shape {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    } 
};

//Square Class that provides the svg line of code for a square shape
class Square extends Shape {
    render(){
        return `<rect x="50" width="200" height="200" fill="${this.color}" />`;
    } 
};

//Exporting all the classes
module.exports = { Triangle, Square, Circle };
