import { useEffect, useState } from "react";
import dog from '../assets/images/dog.jpeg';
import cat from '../assets/images/cat.jpg';
import cow from '../assets/images/cow.jpeg';
import bird from '../assets/images/bird.jpg';


const images = [dog, cat, bird, cow];

function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => { 
      setCurrentIndex((prev) => 
        prev === images.length - 1 ? 0 : prev + 1
      );
    },2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 text-center items-center justify-center">
      <img src={images[currentIndex]} alt="Animel" className="mx-auto w-screen h-120 object-cover rounded-xl shadow-lg mb-6"/>
      <h1 className="text-3xl font-bold text-green-700">
        Welcome to Wildlife Wonders 🐶🐦
      </h1>
      <p className="mt-4 text-gray-700">
        Report injured animals and help save lives ❤️
      </p>
    </div>
  );
}

export default Home;
