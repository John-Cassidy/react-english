import './App.css';

import Card from './components/Card';

function App() {
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>
        Vite with Tailwind
      </h1>
      <Card
        username='john'
        post='Staff Engineer'
        imageUrl='https://ridewithgps.com/photos/1961763/large.jpg'
      />
      <Card />
    </>
  );
}

export default App;
