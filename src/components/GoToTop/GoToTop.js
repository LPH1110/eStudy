import { ArrowUpIcon } from '~/components/Icons';
import classNames from 'classnames/bind';
import styles from './GoToTop.module.scss';

const cx = classNames.bind(styles);

function GoToTop({ onClick }) {
    return (
        <button className={cx('wrapper')} onClick={onClick}>
            <ArrowUpIcon fill="#fff" viewBox="-11.5 -11.5 48 48" className={cx('arrow-up')} />
        </button>
    );
}

export default GoToTop;
