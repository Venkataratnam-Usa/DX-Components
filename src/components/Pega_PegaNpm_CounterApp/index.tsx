import {
  Button,
  FieldValueList,
  Text,
  withConfiguration
} from '@pega/cosmos-react-core';

import type { PConnFieldProps } from '../shared/PConnProps';
import '../shared/create-nonce';

import StyledPegaPegaNpmCounterAppWrapper from './styles';

// ✅ No unused props anymore
interface PegaPegaNpmCounterAppProps extends PConnFieldProps {}

interface StateProps {
  value: string;
}

function PegaPegaNpmCounterApp(props: PegaPegaNpmCounterAppProps) {
  const {
    getPConnect,
    value = 0,
    displayMode,
    label,
    hideLabel = false,
    testId
  } = props;

  const pConn = getPConnect();
  const actions = pConn.getActionsApi();
  const stateProps = pConn.getStateProps() as StateProps;

  const propName: string = stateProps.value;

  const currentValue = Number(value) || 0;

  const handleIncrease = () => {
    actions.updateFieldValue(propName, currentValue + 1);
  };

  const handleDecrease = () => {
    if (currentValue > 0) {
      actions.updateFieldValue(propName, currentValue - 1);
    }
  };

  // 🔹 DISPLAY ONLY MODE
  if (displayMode === 'DISPLAY_ONLY') {
    return (
      <StyledPegaPegaNpmCounterAppWrapper>
        <Text variant="h2">{currentValue}</Text>
      </StyledPegaPegaNpmCounterAppWrapper>
    );
  }

  // 🔹 EDIT MODE
  return (
    <StyledPegaPegaNpmCounterAppWrapper>
      <FieldValueList
        variant="inline"
        data-testid={testId}
        fields={[
          {
            id: 'counter',
            name: hideLabel ? '' : label,
            value: (
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Button
                  variant="secondary"
                  onClick={handleDecrease}
                  disabled={currentValue <= 0}
                >
                  -
                </Button>

                <Text variant="h2">{currentValue}</Text>

                <Button
                  variant="primary"
                  onClick={handleIncrease}
                >
                  +
                </Button>
              </div>
            )
          }
        ]}
      />
    </StyledPegaPegaNpmCounterAppWrapper>
  );
}

export default withConfiguration(PegaPegaNpmCounterApp);