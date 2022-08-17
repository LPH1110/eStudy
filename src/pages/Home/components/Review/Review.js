import classNames from 'classnames/bind';
import { QuoteClose, QuoteOpen } from '~/components/Icons';
import styles from './Review.module.scss';

const cx = classNames.bind(styles);

function Review({ data }) {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('content')}>
                <QuoteOpen className={cx('quote-open')} />
                {data.content}
                <QuoteClose className={cx('quote-close')} />
            </h3>
            <div className={cx('author')}>
                <h4 className={cx('author-inner')}>
                    - {data.name}, age {data.age}
                </h4>
            </div>
        </div>
    );
}

export default Review;
