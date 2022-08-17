import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Button } from '~/components';
import images from '~/assets/images';
import { Image } from '~/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const menu = [
    {
        id: 0,
        title: 'About us',
        navigations: [
            {
                id: 0,
                title: 'About eStudy',
                href: '/',
            },
            {
                id: 1,
                title: 'Careers',
                href: '/',
            },
            {
                id: 2,
                title: 'Advertise with us',
                href: '/',
            },
            {
                id: 3,
                title: 'News',
                href: '/',
            },
            {
                id: 4,
                title: 'Get the app',
                href: '/',
            },
        ],
    },
    {
        id: 1,
        title: 'For Students',
        navigations: [
            {
                id: 0,
                title: 'Flashcards',
                href: '/',
            },
            {
                id: 1,
                title: 'Learn',
                href: '/',
            },
            {
                id: 2,
                title: 'Solutions',
                href: '/',
            },
            {
                id: 3,
                title: 'eStudy Plus',
                href: '/',
            },
        ],
    },
    {
        id: 2,
        title: 'For Teachers',
        navigations: [
            {
                id: 0,
                title: 'Live',
                href: '/',
            },
            {
                id: 1,
                title: 'Checkpoint',
                href: '/',
            },
            {
                id: 2,
                title: 'Blog',
                href: '/',
            },
            {
                id: 3,
                title: 'eStudy Plus for teachers',
                href: '/',
            },
        ],
    },
    {
        id: 3,
        title: 'Resources',
        navigations: [
            {
                id: 0,
                title: 'Help centre',
                href: '/',
            },
            {
                id: 1,
                title: 'Sign up',
                href: '/',
            },
            {
                id: 2,
                title: 'Honour Code',
                href: '/',
            },
            {
                id: 3,
                title: 'Community Guidelines',
                href: '/',
            },
            {
                id: 4,
                title: 'Privacy',
                href: '/',
                icon: <FontAwesomeIcon icon={solid('shield-halved')} />,
            },
            {
                id: 5,
                title: 'Terms',
                href: '/',
            },
            {
                id: 6,
                title: 'Ad and Cookie Policy',
                href: '/',
            },
        ],
    },
    {
        id: 4,
        title: 'Language',
        navigations: [
            {
                id: 0,
                title: 'English (UK)',
                href: '/',
                icon: <FontAwesomeIcon icon={solid('angle-down')} />,
            },
        ],
    },
];

function Footer() {
    return (
        <section className={cx('wrapper')}>
            <div className="container">
                <div className="row gx-5">
                    {menu.map((item) => (
                        <div key={item.id} className="col">
                            <h2 className={cx('title')}>{item.title}</h2>
                            <ul className={cx('nav-list')}>
                                {item.navigations.map((nav) => (
                                    <li key={nav.id} className={cx('nav-item')}>
                                        <Button
                                            className={cx('nav-item-btn')}
                                            type="text"
                                            href="/"
                                            rightIcon={nav.icon}
                                        >
                                            {nav.title}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="row py-40">
                    <div className={cx('col')}>
                        <div className={cx('socials')}>
                            <a href="/twitter" className={cx('social-link')}>
                                <TwitterIcon width="20" height="20" />
                            </a>
                            <a href="/facebook" className={cx('social-link')}>
                                <FacebookIcon width="20" height="20" />
                            </a>

                            <a href="/instagram" className={cx('social-link')}>
                                <InstagramIcon width="20" height="20" />
                            </a>
                            <a href="/youtube" className={cx('social-link')}>
                                <YoutubeIcon width="20" height="20" />
                            </a>
                        </div>
                        <div className={cx('copyright')}>
                            <p>© 2022 eStudy Inc.</p>
                        </div>
                    </div>
                    <div className={cx('col d-flex justify-content-end')}>
                        <Image src={images.seal} alt="seal" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
