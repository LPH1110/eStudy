import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

const MenuItem = forwardRef(({ data, onClick, className, onMouseOver }, ref) => {
    const classes = cx('menu-item', {
        separate: data.separate,
        [className]: className,
    });

    return (
        <Button
            ref={ref}
            className={classes}
            to={data.to}
            leftIcon={data.leftIcon}
            rightIcon={data.rightIcon}
            onClick={onClick}
            onMouseOver={onMouseOver}
        >
            {data.title}
        </Button>
    );
});

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
