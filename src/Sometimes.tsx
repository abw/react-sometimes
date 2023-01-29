import React from 'react'
import { timestamp } from '@abw/badger-timestamp'
import { hasValue } from '@abw/badger-utils'

type Props = {
  from?: string,
  to?: string,
  inside?: React.ComponentType,
  outside?: React.ComponentType,
  children?: React.ComponentType
};

export const Sometimes = ({
  from,
  to,
  inside,
  outside,
  children
}: Props) => {
  const now = timestamp();
  const today = now.date();

  if (hasValue(from) && now.before(from?.replace(/^\*/, today))) {
    return outside || null;
  }
  if (hasValue(to) && now.after(to?.replace(/^\*/, today))) {
    return outside || null;
  }
  return inside || children;
}

export default Sometimes

