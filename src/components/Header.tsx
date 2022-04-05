interface HeaderProps {
  points: number;
  maxPoints: number;
}

export const Header = ({ points, maxPoints }: HeaderProps) => {
  return (
    <header className='flex items-center justify-center w-full bg-white h-60'>
      <div className='flex flex-col items-center justify-center w-11/12 text-white rounded-lg shadow-lg md:w-3/4 h-3/5 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-gray-500'>
        <h1 className='mb-2 text-3xl font-bold'>Memory Card Game</h1>
        <div className='text-2xl'>
          Points: <span className='text-3xl'>{points}</span>
        </div>
        <div className='text-2xl'>
          Max points: <span className='text-3xl'>{maxPoints}</span>
        </div>
      </div>
    </header>
  );
};
