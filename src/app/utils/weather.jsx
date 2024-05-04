// import { error } from 'console';
import {fetchCurrentValueFromAdafruit, fetchAllValueFromAdafruit} from './device';

export async function getDataTemp() {
    // const ADAFRUIT_IO_USERNAME = 'thuanlebk473';
    // const ADAFRUIT_IO_KEY = 'aio_Pgfx0857GlUHjxcwo26G2a2qa0qI';
    // const url = `https://io.adafruit.com/api/v2/${ADAFRUIT_IO_USERNAME}/feeds/${feedKey}/data/last`;
    // const response = await fetch("");
    // const data = await response.json();
    // // Assume convertUTCtoLocal is moved here too
    // data.updated_at = convertUTCtoLocal(data.updated_at);
    // return data;

    return fetchCurrentValueFromAdafruit('temp-feed')
}

export async function getDataLight() {
    const feedKey= 'light-feed';
    return fetchCurrentValueFromAdafruit(feedKey)
}

export function convertUTCtoLocal(utcDateString) {
    // Parse the UTC date string
    const date = new Date(utcDateString);
  
    // Add the timezone offset (+7 hours)
    // Note: getTimezoneOffset returns the difference in minutes, so you need to adjust it accordingly.
    // Since you want to specifically add 7 hours regardless of the local timezone, we directly add 7 hours.
    date.setHours(date.getHours() + 7);
  
    // Format the date to the desired format: "YYYY-MM-DD HH:MM:SS"
    const formattedDate = date.toISOString().replace('T', ' ').substring(0, 19);
  
    return formattedDate;
}