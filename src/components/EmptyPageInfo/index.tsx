import React from 'react';
import styles from './styles.module.scss';
import { ReactComponent as TaskListPlain } from 'assets/task-list-plain.svg';

type Props = {
  moreInfoText: string;
};
const EmptyPageInfo = ({ moreInfoText }: Props): JSX.Element => {
  return (
    <div className={styles.infoWrapper}>
      <TaskListPlain />
      <div>
        <p className={styles.mainInfo}>Ooops… It’s empty here</p>
        <p className={styles.moreInfo}>{moreInfoText}</p>
      </div>
    </div>
  );
};

export default EmptyPageInfo;
