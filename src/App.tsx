import { cardsData } from './data/cardData';
import { useEffect, useState } from 'react';
import { Header } from './components/Header';

export const App = () => {
  // Generar un arreglo con posiciones aleatorias
  const shuffleCards = (array: any) => {
    let resultArray = [...array];
    let currentIndex = resultArray.length,
      temporaryValue,
      randomIndex;

    // Mientras queden elementos a mezclar
    while (0 !== currentIndex) {
      // Seleccionar un elemento al azar
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Intercambiarlo con el elemento actual
      temporaryValue = resultArray[currentIndex];
      resultArray[currentIndex] = resultArray[randomIndex];
      resultArray[randomIndex] = temporaryValue;
    }

    return resultArray;
  };

  const [cards, setCards] = useState(shuffleCards(cardsData));
  const [selectedCards, setSelectedCards]: any = useState([]);
  const [points, setPoints] = useState(0);
  const [maxPoints, setMaxPoints] = useState(points);

  const handleSelectedCards = (id: number) => {
    if (!selectedCards.includes(id)) {
      setPoints(points + 1);
      setSelectedCards([...selectedCards, id]);
    } else {
      setSelectedCards([]);
      setMaxPoints((prevPoints) => (prevPoints < points ? points : prevPoints));
      setPoints(0);
    }
  };

  useEffect(() => {
    setCards(shuffleCards(cardsData));
  }, [selectedCards]);

  return (
    <>
      <Header points={points} maxPoints={maxPoints} />
      <div className='grid grid-cols-1 gap-4 md:p-5 md:grid-cols-2 lg:grid-cols-4 place-items-center'>
        {cards.map((card) => (
          <div className='w-11/12 overflow-hidden duration-200 border rounded-lg md:w-80 md:h-80 h-96'>
            <img
              key={card.id}
              src={card.img}
              className='object-cover w-full h-full overflow-hidden duration-200 rounded-lg hover:scale-110'
              onClick={() => handleSelectedCards(card.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
};
