

// Функція для тасування масиву
function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

const cardsArray = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
    { id: 4, name: 'D' },
    { id: 5, name: 'E' },
    { id: 6, name: 'F' },
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
    { id: 4, name: 'D' },
    { id: 5, name: 'E' },
    { id: 6, name: 'F' }
];

let flippedCards = [];
let matchedPairs = 0;

const gameBoard = document.getElementById('memory-game');

function createGameBoard() {
    shuffleArray(cardsArray).forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.setAttribute('data-id', card.id);
        cardElement.setAttribute('data-name', card.name);
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}

function flipCard(e) {
    const card = e.target;
    card.classList.add('flipped');
    card.textContent = card.getAttribute('data-name');

    flippedCards.push(card);

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.getAttribute('data-name') === card2.getAttribute('data-name')) {
        matchedPairs++;
        if (matchedPairs === cardsArray.length / 2) {
            alert('Ви виграли!');
        }
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1.textContent = '';
        card2.textContent = '';
    }

    flippedCards = [];
}

function shuffleCards() {
    gameBoard.innerHTML = '';
    createGameBoard();
}

shuffleCards();