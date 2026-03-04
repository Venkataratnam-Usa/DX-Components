/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Flex,
  Button,
  Text
} from '@pega/cosmos-react-core';

import type { PConnFieldProps } from '../shared/PConnProps';
import StyledPegaPegaNpmLudoGameeWrapper from './styles';
import { withConfiguration } from '@pega/cosmos-react-core';

interface PegaPegaNpmLudoGameeProps extends PConnFieldProps {
  title: string;
}

type PlayerColor = 'red' | 'green' | 'yellow' | 'blue';

interface Token {
  id: string;
  player: PlayerColor;
  position: number;
}

interface GameState {
  tokens: Token[];
  currentPlayer: PlayerColor;
  winner: PlayerColor | null;
}

/* ---------------- SAFE PCONN HOOK ---------------- */

const useSafePConn = (getPConnect?: any) => {
  if (typeof getPConnect !== 'function') return null;

  try {
    return getPConnect() ?? null;
  } catch {
    return null;
  }
};

/* ---------------- SAFE CASE API WRAPPER ---------------- */

const useCaseApi = (pConn: any) => {
  const isRuntime =
    pConn &&
    typeof pConn.getValue === 'function' &&
    typeof pConn.getActionsApi === 'function';

  const getValue = (field: string) => {
    if (!isRuntime) return null;
    return pConn.getValue(field);
  };

  const setValue = (field: string, value: any) => {
    if (!isRuntime) return;
    pConn.getActionsApi().updateFieldValue(field, value);
  };

  return { isRuntime, getValue, setValue };
};

/* ---------------- COMPONENT ---------------- */

function PegaPegaNpmLudoGamee(props: PegaPegaNpmLudoGameeProps) {
  const { title = '🎲 4 Player Ludo Game', getPConnect } = props;

  const pConn = useSafePConn(getPConnect);
  const caseApi = useCaseApi(pConn);

  const defaultState: GameState = {
    tokens: [
      { id: 'R1', player: 'red', position: -1 },
      { id: 'G1', player: 'green', position: -1 },
      { id: 'Y1', player: 'yellow', position: -1 },
      { id: 'B1', player: 'blue', position: -1 }
    ],
    currentPlayer: 'red',
    winner: null
  };

  const loadInitialState = (): GameState => {
    if (!caseApi.isRuntime) return defaultState;

    const saved = caseApi.getValue('GameState');
    return saved ? JSON.parse(saved) : defaultState;
  };

  const [gameState, setGameState] =
    useState<GameState>(loadInitialState);

  const [dice, setDice] = useState<number | null>(null);

  const players: PlayerColor[] = ['red', 'green', 'yellow', 'blue'];

  const saveState = (state: GameState) => {
    setGameState(state);

    if (caseApi.isRuntime) {
      caseApi.setValue('GameState', JSON.stringify(state));
    }
  };

  /* -------- POLLING ONLY IN RUNTIME -------- */
  useEffect(() => {
    if (!caseApi.isRuntime) return;

    const interval = setInterval(() => {
      const latest = caseApi.getValue('GameState');
      if (latest) {
        setGameState(JSON.parse(latest));
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [caseApi.isRuntime]);

  const rollDice = () => {
    if (gameState.winner) return;

    const value = Math.floor(Math.random() * 6) + 1;
    setDice(value);
    moveToken(value);
  };

  const moveToken = (value: number) => {
    const { tokens, currentPlayer } = gameState;

    const updatedTokens = tokens.map((token) => {
      if (token.player !== currentPlayer) return token;

      if (token.position === -1 && value !== 6) return token;

      const newPos =
        token.position === -1 ? 0 : token.position + value;

      if (newPos >= 50) {
        return { ...token, position: 50 };
      }

      return { ...token, position: newPos };
    });

    /* ---- Kill Logic ---- */
    const afterKill = updatedTokens.map((t1) => {
      const conflict = updatedTokens.find(
        (t2) =>
          t1.id !== t2.id &&
          t1.position === t2.position &&
          t1.player !== t2.player &&
          t1.position !== -1
      );

      return conflict ? { ...t1, position: -1 } : t1;
    });

    const winnerToken = afterKill.find((t) => t.position === 50);
    const winner = winnerToken ? winnerToken.player : null;

    const nextPlayer =
      value === 6
        ? currentPlayer
        : players[(players.indexOf(currentPlayer) + 1) % 4];

    const updatedState: GameState = {
      tokens: afterKill,
      currentPlayer: winner ? currentPlayer : nextPlayer,
      winner
    };

    saveState(updatedState);
  };

  return (
    <StyledPegaPegaNpmLudoGameeWrapper>
      <Card>
        <CardHeader>{title}</CardHeader>
        <CardContent>
          <Flex container={{ direction: 'column', gap: 2 }}>

            <Text variant="h2">
              Current Player: {gameState.currentPlayer.toUpperCase()}
            </Text>

            <Text>
              Dice: {dice !== null ? dice : '-'}
            </Text>

            {gameState.winner ? (
              <Text variant="h1">
                🏆 {gameState.winner.toUpperCase()} Wins!
              </Text>
            ) : (
              <Button onClick={rollDice}>
                Roll Dice
              </Button>
            )}

            <Flex container={{ direction: 'row', gap: 2 }}>
              {gameState.tokens.map((token) => (
                <Flex
                  key={token.id}
                  container={{ direction: 'column' }}
                  style={{
                    padding: '10px',
                    background: token.player,
                    color: '#fff',
                    borderRadius: '8px'
                  }}
                >
                  <Text>{token.id}</Text>
                  <Text>Pos: {token.position}</Text>
                </Flex>
              ))}
            </Flex>

          </Flex>
        </CardContent>
      </Card>
    </StyledPegaPegaNpmLudoGameeWrapper>
  );
}

export default withConfiguration(PegaPegaNpmLudoGamee);