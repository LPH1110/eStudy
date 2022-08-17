import images from '~/assets/images';
import { Image, Button } from '~/components';
import classNames from 'classnames/bind';
import styles from './Teacher.module.scss';

const cx = classNames.bind(styles);

function Teacher() {
    return (
        <section className={cx('wrapper')}>
            <section className="container">
                <section className={cx('row')}>
                    <div className={cx('col-lg-6', 'content')}>
                        <h4 className={cx('title')}>TEACHERS</h4>
                        <span className={cx('slogan')}>Empower your students</span>
                        <p className={cx('desc')}>
                            Help every student learn anything with confidence, no matter what they’re striving to
                            achieve. Using eStudy’s free study sets, study modes and in-class game, you can motivate
                            your students quickly.
                        </p>
                        <Button type="text" size="medium" className={cx('teacher-btn')}>
                            Bring eStudy to your class
                        </Button>
                    </div>
                    <div className="col-lg-6">
                        <Image className={cx('image')} src={images.cover3} alt="cover3" />
                    </div>
                </section>
            </section>
        </section>
    );
}

export default Teacher;
