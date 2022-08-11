import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = forwardRef(
    ({ to, href, type, onClick, size, children, disabled, leftIcon, rightIcon, className, ...restProps }, ref) => {
        let Component = 'button';
        const props = {
            onClick,
        };

        const classes = cx('wrapper', {
            [size]: size,
            [className]: className,
            [type]: type,
            disabled,
            rightIcon,
            leftIcon,
        });

        if (href) {
            props.href = href;
            props.target = '_blank';
            Component = 'a';
        } else if (to) {
            props.to = to;
            Component = Link;
        } else if (disabled) {
            Object.keys(props).forEach((key) => {
                if (key.startsWith('on') && typeof props[key] === 'function') {
                    delete props[key];
                }
            });
        } else {
            props.type = 'button';
        }

        return (
            <Component className={classes} {...props} {...restProps} ref={ref}>
                {leftIcon && <span className={cx('icon', { ['left-icon']: 'left-icon' })}>{leftIcon}</span>}
                <p className={cx('title')}>{children}</p>
                {rightIcon && <span className={cx('icon', { ['right-icon']: 'right-icon' })}>{rightIcon}</span>}
            </Component>
        );
    },
);

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.string,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    className: PropTypes.string,
};

export default Button;
