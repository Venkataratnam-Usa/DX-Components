// @ts-nocheck
import { useState, useEffect, useRef, Fragment } from 'react';
import {
  Link,
  Button,
  Popover,
  useOuterEvent,
  useElement,
  Progress,
  FormField,
  useTheme,
  withConfiguration
} from '@pega/cosmos-react-core';
import { Glimpse } from '@pega/cosmos-react-work';
import { EmailDisplay } from '@pega/cosmos-react-core';

import type { PConnFieldProps } from '../shared/PConnProps';
import Avatar from './Avatar';

interface PegaPegaNpmLudoGameeOperatorProps extends PConnFieldProps {
  name: string;
  id: string;
  label: string;
  metaObj: any;
  externalUser: any;
}

function Operator(props: PegaPegaNpmLudoGameeOperatorProps) {
  const { id, name, label, testId, helperText, externalUser, metaObj } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [popoverEl, setPopoverEl] = useElement(null);
  const [popoverContent, setPopoverContent] = useState(null);
  const [targetEl, setTargetEl] = useState(null);

  const theme: any = useTheme();
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const loadOperatorDetails = async () => {
    const localizedVal = PCore.getLocaleUtils().getLocaleValue;
    const localeCategory = 'Operator';

    setIsLoading(true);

    setPopoverContent(
      <Progress
        variant='ring'
        message={localizedVal('Loading operator...', localeCategory)}
        placement='local'
      />
    );

    // External user
    if (externalUser && externalUser.classID !== 'Data-Party-Operator') {
      const fields = [
        {
          id: 'Name',
          name: localizedVal('Name', localeCategory),
          value: externalUser.name
        },
        {
          id: 'Email',
          name: localizedVal('Email', localeCategory),
          value:
            externalUser.email !== '' ? (
              <Link href={`mailto:${externalUser.email}`}>
                {externalUser.email}
              </Link>
            ) : ''
        }
      ];

      if (!isMounted.current) return;

      setPopoverContent(
        <Glimpse
          visual={<Avatar metaObj={{ name: externalUser.name }} />}
          primary={externalUser.name}
          secondary={[externalUser.position]}
          fields={fields}
          target={targetEl}
        />
      );

      setIsLoading(false);
      return;
    }

    // Internal operator
    try {
      const res = await PCore.getUserApi().getOperatorDetails(id, true);

      if (!isMounted.current) return;

      const data = res?.data?.pyOperatorInfo;

      if (!data) return;

      const fields = [];

      if (data.pyUserName) {
        fields.push({
          id: 'Name',
          name: localizedVal('Name', localeCategory),
          value: data.pyUserName
        });
      }

      if (data.pyEmailAddress) {
        fields.push({
          id: 'Email',
          name: localizedVal('Email address', localeCategory),
          value: <EmailDisplay value={data.pyEmailAddress} />
        });
      }

      const opAvatar = (
        <Avatar
          metaObj={{
            image: '',
            name: data.pyUserName
          }}
        />
      );

      setPopoverContent(
        <Glimpse
          heading={{
            primary: data.pyUserName,
            secondary: data.pyEmailAddress,
            visual: opAvatar
          }}
          fields={fields}
          target={targetEl}
          onDismiss={() => setIsOpen(false)}
        />
      );

      setIsLoading(false);
    } catch (err) {
      console.error('Operator fetch failed', err);
      setIsLoading(false);
    }
  };

  const clickAction = (e: any) => {
    if (!isOpen) {
      setTargetEl(e.currentTarget);
      setIsOpen(true);
      loadOperatorDetails();
    } else {
      setIsOpen(false);
    }
  };

  const hidePopover = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useOuterEvent('mousedown', [popoverEl], hidePopover);

  const hideOnEscape = (e: any) => {
    if (e.key === 'Escape') hidePopover();
  };

  const comp = (
    <Fragment>
      {metaObj ? (
        <Button
          variant='text'
          aria-haspopup
          aria-expanded={isOpen}
          onClick={clickAction}
          onKeyDown={hideOnEscape}
          data-test-id={testId}
          style={
            label !== null
              ? { width: 'max-content', height: theme.components.input.height }
              : undefined
          }
        >
          <Avatar {...props} />
        </Button>
      ) : (
        <Button
          variant='link'
          aria-haspopup
          aria-expanded={isOpen}
          onClick={clickAction}
          onKeyDown={hideOnEscape}
          data-test-id={testId}
        >
          {name}
        </Button>
      )}

      {isOpen && (
        <Popover
          ref={setPopoverEl}
          groupId='operator'
          target={targetEl}
          placement='bottom-start'
          strategy='fixed'
          style={
            isLoading
              ? { position: 'relative', width: '10rem', minHeight: '4rem' }
              : undefined
          }
        >
          {popoverContent}
        </Popover>
      )}
    </Fragment>
  );

  if (label !== null) {
    return (
      <FormField label={label} info={helperText}>
        {comp}
      </FormField>
    );
  }

  return comp;
}

export default withConfiguration(Operator);