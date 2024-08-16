import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ClipPathGroupIcon } from './ClipPathGroupIcon.js';
import classes from './LogoIcon.module.css';

interface Props {
  className?: string;
  swap?: {
    clipPathGroup?: ReactNode;
  };
}
/* @figmaId 3:531 */
export const LogoIcon: FC<Props> = memo(function LogoIcon(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.clipPathGroup}>
        {props.swap?.clipPathGroup || <ClipPathGroupIcon className={classes.icon} />}
      </div>
    </div>
  );
});
