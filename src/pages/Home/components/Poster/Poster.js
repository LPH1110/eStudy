import { Image } from '~/components';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Poster.module.scss';
import { Button } from '~/components';
import { memo } from 'react';

const cx = classNames.bind(styles);

function Poster() {
    return (
        <section className="container">
            <section className={cx('wrapper')}>
                <div className="row">
                    <div className={cx('col-lg-5', 'content')}>
                        <h1 className={cx('brand')}>
                            e<span>Study</span>
                        </h1>
                        <span className={cx('slogan')}>Study Hard - Work Hard - Play Hard</span>
                        <p className={cx('desc')}>
                            With our ever-effective flashcards, an AI Learning Assistant and new expert explanations,
                            get a suite of science-backed study tools at your fingertips.
                        </p>
                        <Button type="solid-primary" size="medium" className={cx('start-btn')}>
                            Get Started
                        </Button>
                    </div>

                    <div className="col-lg-7">
                        <Image src={images.poster} className={cx('image')} />
                    </div>
                </div>
            </section>
        </section>
    );
}

export default memo(Poster);
