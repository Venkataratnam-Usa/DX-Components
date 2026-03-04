/* eslint-disable react/jsx-no-useless-fragment */
import type { Meta, StoryObj } from '@storybook/react';

import PegaPegaNpmSnakeGame from './index';

import { configProps, operatorDetails } from './mock';

const meta: Meta<typeof PegaPegaNpmSnakeGame> = {
  title: 'PegaPegaNpmSnakeGame',
  component: PegaPegaNpmSnakeGame,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof PegaPegaNpmSnakeGame>;

if (!window.PCore) {
  window.PCore = {} as any;
}

window.PCore.getLocaleUtils = () => {
  return {
    getLocaleValue: (value: any) => {
      return value;
    }
  } as any;
};

window.PCore.getUserApi = () => {
  return {
    getOperatorDetails: () => {
      return new Promise(resolve => {
        // @ts-ignore
        resolve(operatorDetails);
      });
    }
  } as any;
};

export const BasePegaPegaNpmSnakeGame: Story = (args: any) => {

  const props = {
    label: configProps.label,
    createOperator: configProps.createOperator,
    updateOperator: configProps.updateOperator,
    createDateTime: configProps.createDateTime,
    updateDateTime: configProps.updateDateTime,

    getPConnect: () => {
      return {
        getActionsApi: () => {
          return {
            updateFieldValue: () => {/* nothing */},
            triggerFieldChange: () => {/* nothing */}
          };
        },
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      };
    }
};

return (
    <>
      <PegaPegaNpmSnakeGame {...props} {...args} />
    </>
  );
};

BasePegaPegaNpmSnakeGame.args = {
  createLabel: configProps.createLabel,
  updateLabel: configProps.updateLabel,
  hideLabel: configProps.hideLabel
};
