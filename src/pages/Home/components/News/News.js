import images from '~/assets/images';
import { Image } from '~/components';
import classNames from 'classnames/bind';
import styles from './News.module.scss';

const cx = classNames.bind(styles);

const news = [
    {
        id: 0,
        thumbnail: images.cover1,
        title: 'Represent your course at uni as a eStudy Education advisor',
        href: '',
    },
    {
        id: 1,
        thumbnail: images.cover2,
        title: "GCSE resources for everything you'll cover this year",
        href: '',
    },
    {
        id: 2,
        thumbnail: images.cover1,
        title: 'Help every student learn anything with confidence',
        href: '',
    },
];

function News() {
    return (
        <section className="container">
            <section className={cx('wrapper')}>
                <h1 className={cx('title')}>What's new on eStudy</h1>
                <div className={cx('row gx-5')}>
                    {news.map((item) => (
                        <div key={item.id} className={cx('col-lg-4', 'cover')}>
                            <Image className={cx('cover-img')} src={item.thumbnail} alt="cover img" />
                            <h4 className={cx('cover-title')}>{item.title}</h4>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
}

export default News;
