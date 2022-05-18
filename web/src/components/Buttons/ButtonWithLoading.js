import { Button, CircularProgress } from '@mui/material';
import { useState } from 'react';

export default function ButtonWithLoading({
  variant,
  onClickHandler,
  children,
}) {
  const [loading, setLoading] = useState(false);

  const wrapOnClickHandler = async () => {
    setLoading(true);
    await onClickHandler();
    setLoading(false);
  };

  return loading ? (
    <CircularProgress size={32} />
  ) : (
    <Button variant={variant} onClick={() => wrapOnClickHandler()}>
      {children}
    </Button>
  );
}
