import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import images from '~/assets/images';
import { Image } from '~/components';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import SearchBar from '../SearchBar';
import { useEffect, useRef } from 'react';
import Menu from '~/components/Menu';

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
        menuSize: 'menu-width-md',
        multiLevelMenu: true,
        menu: [
            {
                id: 0,
                leftIcon: <Image src={images.qualification} />,
                rightIcon: <FontAwesomeIcon icon={solid('angle-right')} />,
                title: 'GCSE',
                isActive: true,
                subMenu: [
                    {
                        id: 0,
                        title: 'Maths',
                    },
                    {
                        id: 1,
                        title: 'Biology',
                    },
                    {
                        id: 2,
                        title: 'Chemistry',
                    },
                    {
                        id: 3,
                        title: 'Physics',
                    },
                    {
                        id: 4,
                        title: 'French',
                    },
                ],
            },
            {
                id: 1,
                leftIcon: <Image src={images.swatches} />,
                rightIcon: <FontAwesomeIcon icon={solid('angle-right')} />,
                title: 'Arts and Humanities',
                subMenu: [
                    {
                        id: 0,
                        title: 'Philosophy',
                    },
                    {
                        id: 1,
                        title: 'History',
                    },
                    {
                        id: 2,
                        title: 'English',
                    },
                    {
                        id: 3,
                        title: 'Film and TV',
                    },
                    {
                        id: 4,
                        title: 'Visual arts',
                    },
                    {
                        id: 5,
                        title: 'Musics',
                    },
                ],
            },
            {
                id: 2,
                leftIcon: <Image src={images.translation} />,
                rightIcon: <FontAwesomeIcon icon={solid('angle-right')} />,
                title: 'Languages',
                subMenu: [
                    {
                        id: 0,
                        title: 'French',
                    },
                    {
                        id: 1,
                        title: 'Spanish',
                    },
                    {
                        id: 2,
                        title: 'German',
                    },
                    {
                        id: 3,
                        title: 'Latin',
                    },
                    {
                        id: 4,
                        title: 'English',
                    },
                ],
            },
            {
                id: 3,
                leftIcon: <Image src={images.math} />,
                rightIcon: <FontAwesomeIcon icon={solid('angle-right')} />,
                title: 'Maths',
                subMenu: [
                    {
                        id: 0,
                        title: 'Arithmetic',
                    },
                    {
                        id: 1,
                        title: 'Geometry',
                    },
                    {
                        id: 2,
                        title: 'Algebra',
                    },
                    {
                        id: 3,
                        title: 'Applied Maths',
                    },
                    {
                        id: 4,
                        title: 'Statistics',
                    },
                    {
                        id: 5,
                        title: 'Calculus',
                    },
                ],
            },
            {
                id: 4,
                leftIcon: <Image src={images.science} />,
                rightIcon: <FontAwesomeIcon icon={solid('angle-right')} />,
                title: 'Science',
                subMenu: [
                    {
                        id: 0,
                        title: 'Biology',
                    },
                    {
                        id: 1,
                        title: 'Chemistry',
                    },
                    {
                        id: 2,
                        title: 'Physics',
                    },
                    {
                        id: 3,
                        title: 'Medicine',
                    },
                    {
                        id: 4,
                        title: 'Computer Science',
                    },
                    {
                        id: 5,
                        title: 'Engineering',
                    },
                ],
            },
            {
                id: 5,
                leftIcon: <Image src={images.socialScience} />,
                rightIcon: <FontAwesomeIcon icon={solid('angle-right')} />,
                title: 'Social Sciences',
                subMenu: [
                    {
                        id: 0,
                        title: 'Psychology',
                    },
                    {
                        id: 1,
                        title: 'Business',
                    },
                    {
                        id: 2,
                        title: 'Sociology',
                    },
                    {
                        id: 3,
                        title: 'Economics',
                    },
                    {
                        id: 4,
                        title: 'Law',
                    },
                    {
                        id: 5,
                        title: 'Human Geography',
                    },
                ],
            },
            {
                id: 6,
                leftIcon: <Image src={images.computer} />,
                rightIcon: <FontAwesomeIcon icon={solid('angle-right')} />,
                title: 'Other',
                subMenu: [
                    {
                        id: 0,
                        title: 'Hobbies',
                    },
                    {
                        id: 1,
                        title: 'Sports',
                    },
                    {
                        id: 2,
                        title: 'Computer Skills',
                    },
                ],
            },
        ],
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
        menuSize: 'menu-width-sm',
        menu: [
            {
                id: 0,
                leftIcon: <Image src={images.document} />,
                title: 'Study set',
            },
            {
                id: 1,
                leftIcon: <Image src={images.folder} />,
                title: 'Folder',
            },
            {
                id: 2,
                leftIcon: <Image src={images.users} />,
                title: 'Class',
            },
        ],
    },
];

const cx = classNames.bind(styles);

function Header() {
    const headerRef = useRef();

    const handleScroll = () => {
        if (window.scrollY > 0) {
            headerRef.current.classList.add('headerActive');
        } else {
            headerRef.current.classList.remove('headerActive');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const renderNavItems = () => {
        return navItems.map((item) => {
            return item.icon ? (
                <Menu multiLevelMenu={item.multiLevelMenu} items={item.menu} key={item.id} className={item.menuSize}>
                    <Button to={item.to} size={item.size} type={item.type} rightIcon={item.icon}>
                        {item.title}
                    </Button>
                </Menu>
            ) : (
                <Button key={item.id} to={item.to} size={item.size} type={item.type}>
                    {item.title}
                </Button>
            );
        });
    };
    return (
        <div className={cx('wrapper')} ref={headerRef}>
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
