import musica from "../assets/Kanye West Stronger.mp3";
import styles from "./musica.module.css";

function PlayerDeAudio() {
  return (
    <div className={styles.audioContainer}>
      <audio controls className={styles.customAudio}>
        <source src={musica} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default PlayerDeAudio;
