
import './App.css';
import Sidebar from './Components/Sidebar';
import image from '../src/NFL Project Background.png'
import { SliderData } from './Components/SliderData';
import ImageSlider from './Components/ImageSlider';
import info from './Components/info';




function App() {
  return (  
      <div class="bg">
        <div class="infobutton">
          <info info={info}>
          </info>
        </div>
        <div class="centerBox">
          <div class="teamText">
            Select Two Teams to Compare Statistics
          </div>
          <div class='teamSelectBox'>
            <div class="teamSelect">
              <ImageSlider slides={SliderData}/>
            </div>
            <div class="middleBox">vs</div>
            <div class="teamSelectRight">
              <ImageSlider slides={SliderData}/>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;