import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../styles/Temporizador.module.css";

interface TemporizadorProps{
    key: any
    duracao: number;
    tempoEsgotado: () => void
}
// const renderTime = ({ remainingTime }) => {
//     if (remainingTime === 0) {
//       return <div className="timer">Too lale...</div>;
//     }
  
//     return (
//       <div className="timer">
//         <div className="value">{remainingTime}</div>
//       </div>
//     );
//   };

export default function Temporizador(props: TemporizadorProps){
    
    return(
        <div className={styles.temporizador}>
            <CountdownCircleTimer duration={props.duracao}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={['#BCE596', '#F7B801',  '#ED827A','#A30000']}
                colorsTime={[7, 5, 3,0]}>{({remainingTime}) => remainingTime}</CountdownCircleTimer>
        </div>
    )
}