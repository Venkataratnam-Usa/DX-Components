import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* 🌌 SPACE BACKGROUND */
  background: radial-gradient(circle at top, #0f2027, #203a43, #000);
  padding: 20px;
  min-height: 100vh;

  .score-board {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 18px;
    color: #00e5ff;
    margin-bottom: 12px;
    animation: scorePop 0.4s ease;
  }

  /* 🎯 Score Animation */
  @keyframes scorePop {
    0% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }

  .board {
    display: grid;
    grid-template-columns: repeat(20, 22px);
    grid-template-rows: repeat(20, 22px);

    background: rgba(0, 0, 0, 0.8);
    border: 3px solid #00e5ff;
    border-radius: 12px;
    box-shadow: 0 0 25px #00e5ff;
  }

  .cell {
    width: 22px;
    height: 22px;
    background: transparent;
  }

  /* 🐍 NEON SNAKE BODY */
  .snake {
    background: linear-gradient(135deg, #00ff88, #00c853);
    border-radius: 50%;
    box-shadow: 0 0 8px #00ff88, 0 0 16px #00ff88;
    transition: 0.1s;
  }

  /* 🟢 SNAKE HEAD */
  .snake-head {
    background: linear-gradient(135deg, #76ff03, #00c853);
    border-radius: 50%;
    box-shadow: 0 0 12px #76ff03, 0 0 25px #76ff03;
    transform: scale(1.1);
  }

  /* 🌈 Animated Food Pulse */
  .food {
    background: radial-gradient(circle, #ff1744, #b71c1c);
    border-radius: 50%;
    animation: pulse 1s infinite;
    box-shadow: 0 0 15px #ff1744;
  }

  @keyframes pulse {
    0% { transform: scale(1); box-shadow: 0 0 10px #ff1744; }
    50% { transform: scale(1.3); box-shadow: 0 0 25px #ff1744; }
    100% { transform: scale(1); box-shadow: 0 0 10px #ff1744; }
  }

  .game-over {
    text-align: center;
    margin-top: 20px;
    color: orangered;
    font-weight: bold;
     animation: gameOverFlash 1s infinite;
  }

  button {
    padding: 8px 14px;
    cursor: pointer;
    background: #00e5ff;
    color: black;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    transition: 0.2s;
  }

  button:hover {
    background: #00bcd4;
    transform: scale(1.05);
  }
`;