function generatePattern() {
    const input = document.getElementById("alphabet-input").value;
    if (input.length !== 1 || !input.match(/[a-zA-Z]/)) {
        alert("Please enter a single alphabet character.");
        return;
    }

    // Initialize Web3.js with the provider (Ethereum node) you want to connect to
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'); // Replace with your Infura project ID or your Ethereum node URL

// Replace these with your smart contract address and ABI
const contractAddress = '0x0D7b8c56152d4BCDC336a1Db20e1cd1Ff04dc666';
const contractABI = [
    // ... (Your smart contract ABI goes here)
    [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes1",
                    "name": "letter",
                    "type": "bytes1"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "pattern",
                    "type": "string"
                }
            ],
            "name": "PatternSubmitted",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes1",
                    "name": "letter",
                    "type": "bytes1"
                },
                {
                    "internalType": "string",
                    "name": "pattern",
                    "type": "string"
                }
            ],
            "name": "submitPattern",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes1",
                    "name": "letter",
                    "type": "bytes1"
                }
            ],
            "name": "getPattern",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes1",
                    "name": "",
                    "type": "bytes1"
                }
            ],
            "name": "patterns",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
];

// Create a contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

async function submitPattern() {
    const letter = document.getElementById("alphabet-input").value;
    const pattern = document.getElementById("pattern-input").value;

    // Get the current Ethereum wallet address (assuming the user is using MetaMask)
    const accounts = await web3.eth.getAccounts();
    const sender = accounts[0];

    // Call the smart contract function to submit the pattern
    await contract.methods.submitPattern(web3.utils.asciiToHex(letter), pattern).send({ from: sender });

    // Display a success message or update the UI as needed
    document.getElementById("pattern-result").textContent = `Pattern submitted for letter: ${letter}`;
}

    const canvas = document.getElementById("pattern-canvas");
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    const gridSize = 40;
    const padding = 20;

    // Draw different patterns based on the input letter
    const char = input.toUpperCase();
    const charCode = char.charCodeAt(0);
    const startX = padding;
    const startY = padding;

    // Set different styles for uppercase and lowercase letters
    context.fillStyle = char === input ? "blue" : "orange";

    // Draw patterns for specific characters
    switch (charCode) {
        case 65: // 'A'
            drawPatternA(context, startX, startY, gridSize);
            break;
        case 66: // 'B'
            drawPatternB(context, startX, startY, gridSize);
            break;
        case 67: // 'C'
            drawPatternC(context, startX, startY, gridSize);
            break;
        case 68: // 'D'
            drawPatternA(context, startX, startY, gridSize);
            break;
        case 69: // 'E'
            drawPatternB(context, startX, startY, gridSize);
            break;
        case 70: // 'F'
            drawPatternC(context, startX, startY, gridSize);
            break;
        // Add more cases for other letters and their corresponding patterns
        // For example:
        // case 68: // 'D'
        //     drawPatternD(context, startX, startY, gridSize);
        //     break;
        // ...
        default:
            alert("Pattern not defined for this letter.");
            break;
    }
}

function drawPatternA(context, x, y, gridSize) {
    // Define pattern for 'A'
    // For example, draw a triangle
    context.beginPath();
    context.moveTo(x, y + gridSize);
    context.lineTo(x + gridSize / 2, y);
    context.lineTo(x + gridSize, y + gridSize);
    context.closePath();
    context.fill();
}

function drawPatternB(context, x, y, gridSize) {
    // Define pattern for 'B'
    // For example, draw a rectangle
    context.fillRect(x, y, gridSize / 2, gridSize);
    context.beginPath();
    context.arc(x + gridSize / 2, y + gridSize / 2, gridSize / 2, 0, Math.PI * 2, false);
    context.fill();
}

function drawPatternC(context, x, y, gridSize) {
    // Define pattern for 'C'
    // For example, draw a circle
    context.beginPath();
    context.arc(x + gridSize / 2, y + gridSize / 2, gridSize / 2, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
}

function drawPatternD(context, x, y, gridSize) {
    // Define pattern for 'D'
    // For example, draw a triangle
    context.beginPath();
    context.moveTo(x, y + gridSize);
    context.lineTo(x + gridSize / 2, y);
    context.lineTo(x + gridSize, y + gridSize);
    context.closePath();
    context.fill();
}

function drawPatternE(context, x, y, gridSize) {
    // Define pattern for 'E'
    // For example, draw a rectangle
    context.fillRect(x, y, gridSize / 2, gridSize);
    context.beginPath();
    context.arc(x + gridSize / 2, y + gridSize / 2, gridSize / 2, 0, Math.PI * 2, false);
    context.fill();
}

function drawPatternF(context, x, y, gridSize) {
    // Define pattern for 'F'
    // For example, draw a circle
    context.beginPath();
    context.arc(x + gridSize / 2, y + gridSize / 2, gridSize / 2, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
}

// Add more functions for other letters and their patterns as needed
// For example:
// function drawPatternD(context, x, y, gridSize) {
//     // Define pattern for 'D'
//     // ...
// }
