import './Home.css';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import HomeData from './HomeData';

function Home() {

  return ( 
    <>
  <ImageSlider slides={SliderData} />;
  <HomeData />
  </>
  )
}

export default Home;
