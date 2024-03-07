document.addEventListener('DOMContentLoaded', () =>{
    //card options
    const cardArrays = [
        {
            name: 'image1',
            img: 'images/img1.jpg'
        },
        {
            name: 'image1',
            img: 'images/img1.jpg'
        },
        {
            name: 'image2',
            img: 'images/img2.jpg'
        },
        {
            name: 'image2',
            img: 'images/img2.jpg'
        },
        {
            name: 'image3',
            img: 'images/img3.jpg'
        },
        {
            name: 'image3',
            img: 'images/img3.jpg'
        },
        {
            name: 'image4',
            img: 'images/img4.jpg'
        },
        {
            name: 'image4',
            img: 'images/img4.jpg'
        },
        {
            name: 'image5',
            img: 'images/img5.jpg'
        },
        {
            name: 'image5',
            img: 'images/img5.jpg'
        },
        {
            name: 'image6',
            img: 'images/img6.jpg'
        },
        {
            name: 'image6',
            img: 'images/img6.jpg'
        },

    ]

    cardArrays.sort(() => 0.5 - Math.random());


    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    //create board
    function createBoard(){
        for (let i = 0; i < cardArrays.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src','images/blank.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipcard);
            grid.appendChild(card);
        }
    }

    //check for marches
    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]){
            alert('You found a Match');
            cards[optionOneId].setAttribute('src', 'images/blue.jpg');
            cards[optionTwoId].setAttribute('src', 'images/blue.jpg');
            cardsWon.push(cardsChosen);
        }else{
            cards[optionOneId].setAttribute('src', 'images/blank.jpg');
            cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
            alert('Sorry, Try again');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArrays.length/2){
            resultDisplay.textContent = 'Congratulations! you found them all!';
        }
    }

    //flip card
    function flipcard(){
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArrays[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src',cardArrays[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard()
})

