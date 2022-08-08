import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import images from '~/assets/images';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import SearchBar from '../SearchBar';

const navItems = [
    {
        id: 1,
        to: '/',
        size: 'small',
        type: 'text',
        title: 'Home',
    },
    {
        id: 2,
        to: '/',
        size: 'small',
        type: 'text',
        title: 'Subjects',
        icon: <FontAwesomeIcon icon={solid('angle-down')} />,
    },
    {
        id: 3,
        to: '/',
        size: 'small',
        type: 'text',
        title: 'Answers',
    },
    {
        id: 4,
        to: '/',
        size: 'small',
        type: 'solid-primary',
        title: 'Create',
        icon: <FontAwesomeIcon icon={solid('angle-down')} />,
    },
];

const cx = classNames.bind(styles);

function Header() {
    const renderNavItems = () => {
        return navItems.map((item) => {
            return item.icon ? (
                <Button key={item.id} to={item.to} size={item.size} type={item.type} rightIcon={item.icon}>
                    {item.title}
                </Button>
            ) : (
                <Button key={item.id} to={item.to} size={item.size} type={item.type}>
                    {item.title}
                </Button>
            );
        });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('left')}>
                    <a href="/" className={cx('logo-link')}>
                        <img src={images.logo} alt="quizlet logo" className={cx('logo')} />
                    </a>
                    <nav className={cx('nav-menu')}>{renderNavItems()}</nav>
                </div>
                <div className={cx('right')}>
                    <SearchBar />
                    <Button to="/login" size="small" className={cx('login-btn')}>
                        Log in
                    </Button>
                    <Button to="/signup" size="small" type="solid-primary">
                        Sign up
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
