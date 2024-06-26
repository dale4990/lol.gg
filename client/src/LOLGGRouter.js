import {Routes, Route} from 'react-router-dom';
import Games from './Pages/games/Games';
import Home from './Pages/Home';
import About from './Pages/About';
import Champions from './Pages/Champions'
import Navbar from './Navbar';
import Modes from './Pages/Modes';
import ChampionPage from './Pages/ChampionPage';
import ModePage from './Pages/ModePage';

const championDict = require('./assets/data/en_US/championFull.json');
const champions = championDict.data; // dictionary of champions
const summonerDict = require('./assets/data/en_US/summoner.json');
const summoners = summonerDict.data; // dictionary of summoner spells
const runesDict = require('./assets/data/en_US/runesReforged.json'); // array of runes

const parseChampionImageData = () => {
    const championImageMap = {};
  
    for (const championKey in champions) {
      if (Object.hasOwnProperty.call(champions, championKey)) {
        const champion = champions[championKey];
        const championId = champion.key;
        const championImage = champion.image.full;
        championImageMap[championId] = championImage;
      }
    }
  
    return championImageMap;
};

const parseChampionData = () => {
    const championIdMap = {};
  
    for (const championKey in champions) {
      if (Object.hasOwnProperty.call(champions, championKey)) {
        const champion = champions[championKey];
        const championId = champion.key;
        const championIdName = champion.id;
        championIdMap[championId] = championIdName;
      }
    }
  
    return championIdMap;
};

const championImageMap = parseChampionImageData();
const championIdMap = parseChampionData();

// Pack them together
export const data = {
    champions: champions,
    summoners: summoners,
    runes: runesDict,
    championImageMap: championImageMap,
    championIdMap: championIdMap,
};

function LOLGGRouter() {
    return (
        <>
            <div style={{zIndex: 0, position: 'relative'}}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/champions/all" element={<Champions champions={champions} />} />
                    <Route path="/champions/:championName" element={<ChampionPage champions={champions}/>} />
                    <Route path="/modes/all" element={<Modes />} />
                    <Route path="/modes/:modeName" element={<ModePage/>} />
                    <Route path="/display/:riotId/:tagline" element={<Games data={data} />} />
                </Routes>
            </div>
        </>
    )
}

export default LOLGGRouter;