import Quote from '../Quote/Quote.js';
import classNames from 'classnames/bind';
import styles from './Quotes.module.scss';

const cx = classNames.bind(styles);

function Quotes({ quotes }) {
    return (
        <section className="container">
            <section className={cx('wrapper')}>
                {quotes.map((quote) => {
                    return quote.isRevert ? (
                        <Quote
                            key={quote.id}
                            title={quote.title}
                            desc={quote.desc}
                            thumbnail={quote.thumbnail}
                            revert
                        />
                    ) : (
                        <Quote key={quote.id} title={quote.title} desc={quote.desc} thumbnail={quote.thumbnail} />
                    );
                })}
            </section>
        </section>
    );
}

export default Quotes;
