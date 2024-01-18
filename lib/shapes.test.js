//installs required modules
const shapes = require('../lib/shapes');

//tests and descriptions of what they look for
describe('makeTriangle', () => {
    test('should render a triangle', () => {
        const data = {
            shape: "triangle",
        }
        const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300"><polygon points="50,250 150,50 250,250" stroke="black" stroke-width="3" fill="${data.shapeColor}" /><text x="150" y="225" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text></svg>`;
        const item = shapes.determineShape(data);
        expect(item).toEqual(expectedSvg);
    })
});

describe('makeSquare', () => {
    test('should render a square', () => {
        const data = {
            shape: "square",
        }
        const expectedSvg = `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="200" height="200" stroke="black" stroke-width="3" fill="${data.shapeColor}" /><text x="150" y="175" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text></svg>`;
        const item = shapes.determineShape(data);
        expect(item).toEqual(expectedSvg);
    })
});

describe('makeCircle', () => {
    test('should render a circle', () => {
        const data = {
            shape: "circle",
            shapeColor: "blue",
        }
        const expectedSvg =  `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300"><circle cx="150" cy="110" r="100" stroke="black" stroke-width="3" fill="${data.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text></svg>`;
        const item = shapes.determineShape(data);
        expect(item).toEqual(expectedSvg);
    })
});

describe('makeBlueTriangle', () => {
    test('should render a blue triangle', () => {
        const data = {
            shape: "triangle",
            shapeColor: "blue",
        }
        const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300"><polygon points="50,250 150,50 250,250" stroke="black" stroke-width="3" fill="${data.shapeColor}" /><text x="150" y="225" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text></svg>`;
        const item = shapes.determineShape(data);
        expect(item).toEqual(expectedSvg);
    })
});

describe('makeBlueSquare', () => {
    test('should render a blue square', () => {
        const data = {
            shape: "square",
            shapeColor: "blue",
        }
        const expectedSvg = `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="200" height="200" stroke="black" stroke-width="3" fill="${data.shapeColor}" /><text x="150" y="175" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text></svg>`;
        const item = shapes.determineShape(data);
        expect(item).toEqual(expectedSvg);
    })
});

describe('makeBlueCircle', () => {
    test('should render a blue circle', () => {
        const data = {
            shape: "circle",
            shapeColor: "blue"
        }
        const expectedSvg =  `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300"><circle cx="150" cy="110" r="100" stroke="black" stroke-width="3" fill="${data.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text></svg>`;
        const item = shapes.determineShape(data);
        expect(item).toEqual(expectedSvg);
    })
});

describe('makeBlueTriangleWhiteText', () => {
    test('should render a blue triangle with white text', () => {
        const data = {
            shape: "triangle",
            shapeColor: "blue",
            textColor: "white",
        }
        const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300"><polygon points="50,250 150,50 250,250" stroke="black" stroke-width="3" fill="${data.shapeColor}" /><text x="150" y="225" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text></svg>`;
        const item = shapes.determineShape(data);
        expect(item).toEqual(expectedSvg);
    })
});

describe('makeBlueSquareWhiteText', () => {
    test('should render a blue square with white text', () => {
        const data = {
            shape: "square",
            shapeColor: "blue",
            textColor: "white",
        }
        const expectedSvg = `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="200" height="200" stroke="black" stroke-width="3" fill="${data.shapeColor}" /><text x="150" y="175" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text></svg>`;
        const item = shapes.determineShape(data);
        expect(item).toEqual(expectedSvg);
    })
});

describe('makeBlueCircleWhiteText', () => {
    test('should render a blue circle with white text', () => {
        const data = {
            shape: "circle",
            shapeColor: "blue",
            textColor: "white",
        }
        const expectedSvg =  `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300"><circle cx="150" cy="110" r="100" stroke="black" stroke-width="3" fill="${data.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text></svg>`;
        const item = shapes.determineShape(data);
        expect(item).toEqual(expectedSvg);
    })
});

describe('makeBlueTriangleWhiteTextSvg', () => {
    test('should render a blue triangle with white text reading SVG', () => {
        const data = {
            shape: "triangle",
            shapeColor: "blue",
            textColor: "white",
            text: "SVG"
        }
        const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300"><polygon points="50,250 150,50 250,250" stroke="black" stroke-width="3" fill="${data.shapeColor}" /><text x="150" y="225" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text></svg>`;
        const item = shapes.determineShape(data);
        expect(item).toEqual(expectedSvg);
    })
});

describe('makeBlueSquareWhiteTextSVG', () => {
    test('should render a blue square with white text reading SVG', () => {
        const data = {
            shape: "square",
            shapeColor: "blue",
            textColor: "white",
            text: "SVG"
        }
        const expectedSvg = `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="200" height="200" stroke="black" stroke-width="3" fill="${data.shapeColor}" /><text x="150" y="175" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text></svg>`;
        const item = shapes.determineShape(data);
        expect(item).toEqual(expectedSvg);
    })
});

describe('makeBlueCircleWhiteTextSVG', () => {
    test('should render a blue circle with white text reading SVG', () => {
        const data = {
            shape: "circle",
            shapeColor: "blue",
            textColor: "white",
            text: "SVG"
        }
        const expectedSvg =  `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300"><circle cx="150" cy="110" r="100" stroke="black" stroke-width="3" fill="${data.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text></svg>`;
        const item = shapes.determineShape(data);
        expect(item).toEqual(expectedSvg);
    })
});






