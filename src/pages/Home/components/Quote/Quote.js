import { Image } from '~/components';
import classNames from 'classnames/bind';
import styles from './Quote.module.scss';

const cx = classNames.bind(styles);

function Quote({ title, desc, thumbnail, revert }) {
    const rowClasses = cx('row', {
        revert,
    });

    return (
        <div className={cx('wrapper')}>
            <div className={rowClasses}>
                <div className={cx('col-lg-6', 'content')}>
                    <h1 className={cx('title')}>{title}</h1>
                    <p className={cx('desc')}>{desc}</p>
                </div>
                <div className={cx('col-lg-6')}>
                    <Image src={thumbnail} alt="poster" className={cx('image')} />
                </div>
            </div>
        </div>
    );
}

export default Quote;
