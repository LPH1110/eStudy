import { Button } from '~/components';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Submenu({ data }) {
    const renderSubmenu = () => {
        return (
            data.subMenu &&
            data.subMenu.map((item) => (
                <MenuItem key={item.id} data={{ title: item.title }} className="cursor-pointer" />
            ))
        );
    };
    return (
        <div className={cx('sub-menu')}>
            <div className={cx('list')}>{renderSubmenu()}</div>
            <Button className={cx('view-all')} type="text">
                View All
            </Button>
        </div>
    );
}

Submenu.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Submenu;
