import classNames from 'classnames/bind';
import Slider from 'react-slick';

import Review from '../Review/Review';
import styles from './Reviews.module.scss';

const cx = classNames.bind(styles);

const reviews = [
    {
        id: 0,
        name: 'Hamza_Anwar',
        age: 20,
        content:
            'eStudy has been supporting my success since GCSEs. Flashcards available on the go are single handedly getting me through university.',
    },
    {
        id: 1,
        name: 'gabriellalockwood1',
        age: 20,
        content: 'eStudy gives me an easy way to revise, which I can do on the go with the eStudy app!',
    },
    {
        id: 2,
        name: 'kkubina0110',
        age: 20,
        content:
            'eStudy encouraged me to use active recall instead of just reading lecture slides, which means I’ve been able to study less but so much more effectively.',
    },
];

function Reviews() {
    const config = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 2000,
        slideToShow: 1,
        slidesToScroll: 1,
        cssEase: 'ease-out',
    };
    return (
        <section className={cx('', 'py-125')}>
            <Slider {...config} style={{ transition: 'var(--default-transition)' }}>
                {reviews.map((review) => (
                    <Review key={review.id} data={review} />
                ))}
            </Slider>
        </section>
    );
}

export default Reviews;
