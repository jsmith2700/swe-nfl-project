import { SliderData } from "./SliderData";
import { useState } from "react";
import {FaArrowAltCircleDown, FaArrowAltCircleUp} from 'react-icons/fa';
import '../App.css';
import D_Fumbles from './WebScraper/team_Stats/D_Fumbles.json';
import D_Int from './WebScraper/team_Stats/D_Int.json';
import D_Passing from './WebScraper/team_Stats/D_Passing.json';
import D_Rushing from './WebScraper/team_Stats/D_Rushing.json';
import D_Scoring from './WebScraper/team_Stats/D_Scoring.json';
import O_Downs from './WebScraper/team_Stats/O_Downs.json';
import O_Passing from './WebScraper/team_Stats/O_Passing.json';
import O_Rushing from './WebScraper/team_Stats/O_Rushing.json';
import O_Scoring from './WebScraper/team_Stats/O_Scoring.json';
import O_Receiving from './WebScraper/team_Stats/O_Receiving.json';


const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return (
        <section className='slider'>
            <FaArrowAltCircleUp className='up-arrow' onClick={prevSlide}/>
            {SliderData.map((slide, index) => {
                return(
                    <div classname={index === current ? 'slide active' : 'slide'} key= 
                    {index}>
                        {index - 1 === current && (
                            <img src={slide.image} alt="NFL Team" className="imageTop"/>

                        )}
                        {index === current && (
                            <img src={slide.image} alt="NFL Team" className="image"/>
                        )}
                        {index + 1 === current && (
                            <img src={slide.image} alt="NFL Team" className="imageBottom"/>    
                        )}

                        
                    </div>
                );

                    
                

                
            })}
            
            
            <FaArrowAltCircleDown className='down-arrow' onClick={nextSlide}/>
            
            <div class='text'>Stats:</div>
            <table class="statsTable">
            
            <th>Offense:</th>
            <tr>
                <td class="statsCategory"><span class="passyards">Pass Yards</span></td>
                <td class="statsCategory">{O_Passing[current].stats.PassYds}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="rushyards">Rush Yards</span></td>
                <td class="statsCategory">{O_Rushing[current].stats.RushYds}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="passtd">Pass TD</span></td>
                <td class="statsCategory">{O_Passing[current].stats.TD}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="rushtd">Rush TD</span></td>
                <td class="statsCategory">{O_Rushing[current].stats.TD}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="passcomppct">Pass Completion %</span></td>
                <td class="statsCategory">{O_Passing[current].stats["Cmp%"]}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="INT">INT Thrown</span></td>
                <td class="statsCategory">{O_Passing[current].stats.INT}</td>
            </tr> 

            <th>Defense:</th>
            <tr>
                <td class="statsCategory"><span class="passydall">Pass Yards Allowed</span></td>
                <td class="statsCategory">{D_Passing[current].stats.Yds}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="rushydall">Rush Yards Allowed</span></td>
                <td class="statsCategory">{D_Rushing[current].stats.RushYds}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="passtdall">Pass TD Allowed</span></td>
                <td class="statsCategory">{D_Passing[current].stats.TD}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="rushtdall">Rush TD Allowed</span></td>
                <td class="statsCategory">{D_Rushing[current].stats.TD}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="defenseINT">Defense INT</span></td>
                <td class="statsCategory">{D_Passing[current].stats.INT}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="fumblescaus">Fumbles Caused</span></td>
                <td class="statsCategory">{D_Fumbles[current].stats.FF}</td>
            </tr> 
            </table>
        </section>
        
        
    );
};

export default ImageSlider;