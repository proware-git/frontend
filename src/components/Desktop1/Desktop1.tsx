import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ClipPathGroupIcon } from './ClipPathGroupIcon.js';
import classes from './Desktop1.module.css';
import { LogoIcon } from './LogoIcon/LogoIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 18:609 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.content}>
        <div className={classes.frame14225}>
          <LogoIcon
            swap={{
              clipPathGroup: <ClipPathGroupIcon className={classes.icon} />,
            }}
          />
          <div className={classes.text}>
            <div className={classes.proWare}>ProWare</div>
            <div className={classes.comingSoon}>Coming Soon ..</div>
          </div>
        </div>
      </div>
    </div>
  );
});
