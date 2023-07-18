import { LineWave } from 'react-loader-spinner';
import css from './loader.module.css';

export default function Loader() {
  return (
    <div className={css.loader}>
      <LineWave
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
}
