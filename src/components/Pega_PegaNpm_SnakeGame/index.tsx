import { useEffect, useState, useRef, useCallback } from 'react';
import { Card, CardHeader, CardContent, withConfiguration } from '@pega/cosmos-react-core';
import type { PConnFieldProps } from '../shared/PConnProps';
import StyledPegaPegaNpmSnakeGameWrapper from './styles';

interface PegaPegaNpmSnakeGameProps extends PConnFieldProps {
  title: string;
}

const BOARD_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const BASE_SPEED = 200;

function PegaPegaNpmSnakeGame(props: PegaPegaNpmSnakeGameProps) {
  const { title = 'Snake Game - Venkat USA' } = props;

  /* ✅ STATE & REFS FIRST */

  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(() => ({
    x: Math.floor(Math.random() * BOARD_SIZE),
    y: Math.floor(Math.random() * BOARD_SIZE)
  }));
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(BASE_SPEED);

  const intervalRef = useRef<number | null>(null);

  const eatSound = useRef(
    new Audio('https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg')
  );

  const gameOverSound = useRef(
    new Audio('https://actions.google.com/sounds/v1/cartoon/concussive_drum_hit.ogg')
  );

  /* ✅ FUNCTIONS AFTER STATE */

  function generateFood() {
    return {
      x: Math.floor(Math.random() * BOARD_SIZE),
      y: Math.floor(Math.random() * BOARD_SIZE)
    };
  }

  function triggerGameOver() {
    setGameOver(true);
    gameOverSound.current.play();
  }

  function resetGame() {
    setSnake(INITIAL_SNAKE);
    setFood(generateFood());
    setDirection('RIGHT');
    setGameOver(false);
    setScore(0);
    setSpeed(BASE_SPEED);
  }

  const moveSnake = useCallback(() => {
    setSnake(prevSnake => {
      const head = { ...prevSnake[0] };

      if (direction === 'UP') head.y -= 1;
      if (direction === 'DOWN') head.y += 1;
      if (direction === 'LEFT') head.x -= 1;
      if (direction === 'RIGHT') head.x += 1;

      if (
        head.x < 0 ||
        head.y < 0 ||
        head.x >= BOARD_SIZE ||
        head.y >= BOARD_SIZE
      ) {
        triggerGameOver();
        return prevSnake;
      }

      if (prevSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        triggerGameOver();
        return prevSnake;
      }

      const newSnake = [head, ...prevSnake];

      if (head.x === food.x && head.y === food.y) {
        eatSound.current.play();

        const newScore = score + 10;
        setScore(newScore);

        if (newScore % 50 === 0 && speed > 60) {
          setSpeed(prev => prev - 20);
        }

        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, score, speed]);

  /* 🎮 Keyboard */
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'ArrowUp' && direction !== 'DOWN') setDirection('UP');
      if (e.key === 'ArrowDown' && direction !== 'UP') setDirection('DOWN');
      if (e.key === 'ArrowLeft' && direction !== 'RIGHT') setDirection('LEFT');
      if (e.key === 'ArrowRight' && direction !== 'LEFT') setDirection('RIGHT');
    }

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [direction]);

  /* ⏱ Game Loop */
  useEffect(() => {
    if (gameOver) return undefined;

    intervalRef.current = window.setInterval(moveSnake, speed);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [moveSnake, speed, gameOver]);

  /* 🧱 Render */
  function renderBoard() {
    const cells = [];

    for (let row = 0; row < BOARD_SIZE; row += 1) {
      for (let col = 0; col < BOARD_SIZE; col += 1) {
        const isHead = snake[0]?.x === col && snake[0]?.y === row;
        const isSnake = snake.some(s => s.x === col && s.y === row);
        const isFood = food.x === col && food.y === row;

        cells.push(
          <div
            key={`${row}-${col}`}
            className={`cell ${
              isSnake ? 'snake' : ''
            } ${isHead ? 'snake-head' : ''} ${isFood ? 'food' : ''}`}
          />
        );
      }
    }

    return cells;
  }

  return (
    <StyledPegaPegaNpmSnakeGameWrapper>
      <Card>
        <CardHeader>{title}</CardHeader>
        <CardContent>
          <div className="score-board">
            <span>Score: {score}</span>
            <span>Level: {Math.floor(score / 50) + 1}</span>
          </div>

          <div className="board">{renderBoard()}</div>

          {gameOver && (
            <div className="game-over">
              <p> Game Over</p>
              <p>Final Score: {score}</p>
              <button type="button" onClick={resetGame}>
                Restart
              </button>
            </div>
          )}
        </CardContent>
      </Card>
    </StyledPegaPegaNpmSnakeGameWrapper>
  );
}

export default withConfiguration(PegaPegaNpmSnakeGame);