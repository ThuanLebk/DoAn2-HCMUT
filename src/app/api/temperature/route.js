// import {getDataTemp} from '../../utils/weather';
// export function GET(req, res) {
//     res.setHeader('Content-Type', 'text/event-stream');
//     res.setHeader('Cache-Control', 'no-cache');
//     res.setHeader('Connection', 'keep-alive');
  
//     const sendEvent = (data) => {
//       res.write(`data: ${JSON.stringify(data)}\n\n`);
//     };
  
//     // Example data send every 2 seconds
//     const intervalId = setInterval(() => {
//       const data = {
//         time: new Date().toLocaleTimeString(),
//         temp: getDataTemp()
//     };
//       sendEvent(data);
//     }, 2000);
  
//     req.on('close', () => {
//       clearInterval(intervalId);
//       res.end();
//     });
//   }
import {NextApiRequest, NextApiResponse} from 'next';
export async function GET(req, res) {
    console.log('req', req);
    console.log('res', res);
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const sendTemperature = () => {
        const temperature = Math.floor(Math.random() * 60);  // Simulate temperature
        res.write(`data: ${JSON.stringify({ temperature })}\n\n`);
    };

    sendTemperature();
    const intervalId = setInterval(sendTemperature, 5000);

    req.on('close', () => {
        clearInterval(intervalId);
        res.end();
    });
}
