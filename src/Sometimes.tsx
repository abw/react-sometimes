import React from 'react'
import { timestamp } from '@abw/badger-timestamp'
import { isDefined } from '@abw/badger-utils'

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

  if (isDefined(from) && now.before(from)) {
    return outside || null;
  }
  if (isDefined(to) && now.after(to)) {
    return outside || null;
  }
  return inside || children;
}

export default Sometimes

