//function that takes in data from inquirer, determines shape and then applies characteristics specified by user
function determineShape(data) {
    const makeSvg = (data.shape)
    switch (makeSvg) {
        case 'circle':
            return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300"><circle cx="150" cy="110" r="100" stroke="black" stroke-width="3" fill="${data.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text></svg>`;
            break;
        case 'triangle':
            return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300"><polygon points="50,250 150,50 250,250" stroke="black" stroke-width="3" fill="${data.shapeColor}" /><text x="150" y="225" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text></svg>`;
            break;
        case 'square':
            return `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="200" height="200" stroke="black" stroke-width="3" fill="${data.shapeColor}" /><text x="150" y="175" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text></svg>`;
            break;
    }
};

//exports
module.exports = { determineShape };

