const GameOver = ({winner, onRestart}) => {
  return (
    <div id="game-over">
        <h2>¡Fin del Juego!</h2>
        {winner && <p>¡{winner} ganó!</p>}
        {!winner && <p>¡Empate!</p>}
        <p>
            <button onClick={() => onRestart()}>Volver a jugar</button>
        </p>
    </div>
  )
}

export default GameOver;