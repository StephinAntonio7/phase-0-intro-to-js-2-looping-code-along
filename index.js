function writeCards(cards) {
    let thankYouMessages = [];
    for (let i = 0; i < cards.length; i++) {
      thankYouMessages.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
    return thankYouMessages;
  }
  
  const cards = ["Guadalupe", "Ollie", "Aki"];
  console.log(writeCards(cards));
  
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  countDown(5);