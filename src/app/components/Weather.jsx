import {React, useState, useEffect} from 'react';
import { getDataLight, getDataTemp, convertUTCtoLocal } from '../utils/weather';
import { useTranslation } from 'react-i18next';

const Weather = () => {
    const [t, i18n] = useTranslation("global");
    const [dataTemp, setDataTemp] = useState(null);
    const [dataLight, setDataLight] = useState(null);
    
    

    useEffect(() => {
        const fetchAndSetData = () => {
            Promise.all([ getDataTemp(), getDataLight()])
                .then(([tempData, lightData]) => {
                    setDataTemp(tempData);
                    setDataLight(lightData);
                })
                .catch(error => {
                    
                });
        };
    
        // Immediately fetch and set data on component mount.
        fetchAndSetData();
    
        // Set up the interval to fetch data every X milliseconds.
        // For example, to refresh data every 5 seconds, set the interval to 5000 milliseconds.
        const intervalId = setInterval(fetchAndSetData, 10000);
    
        // Clean up the interval on component unmount.
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array means this effect runs once on mount and cleanup runs on unmount.
    
    

    // Render the data in the component
    
  return (
    <>
        {/* <div className=" w-3/4 flex justify-center items-center flex-col mb-7">
            <div className=" font-bold text-2xl">{dataTemp && dataTemp.updated_at}</div>
        </div> */}
        {
          // console.log(dataLight) 
        }
        <div className=" w-3/4 flex justify-center items-center flex-col">
            <img src ="https://cdn-icons-png.flaticon.com/512/3354/3354557.png" width="350px"></img>
            <div className=" relative justify-between items-center mb-7">
              <div className=" mr-10 flex items-top justify-center">
                <div className=" inline-block">
                  <div className="border-none text-2xl font-bold">{t("Current temperature")}</div>
                  <div className="border-none font-bold text-2xl items-center">{dataTemp && 'Last value: ' + dataTemp.lastValue}</div>
                  <div className="border-none font-bold text-2xl items-center">{dataTemp &&'Last updated at: ' + convertUTCtoLocal(dataTemp.updatedAt.toString())}</div>
                </div>

                <div className=" inline-block ml-40">
                  <div className="border-none text-2xl font-bold">{t("Current light level")}</div>
                  <div className="border-none font-bold text-2xl">{dataLight && 'Last value: ' + dataLight.lastValue}</div>
                  <div className="border-none font-bold text-2xl">{dataLight && 'Last updated at: ' + convertUTCtoLocal(dataLight.updatedAt.toString())
}</div>

                </div>
              </div>
            </div>
        </div>
  </>
  )
}

export default Weather