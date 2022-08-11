import classNames from 'classnames/bind';
import styles from './Wrapper.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Wrapper({ className, children }) {
    const classes = cx('wrapper', {
        [className]: className,
    });
    return <div className={classes}>{children}</div>;
}

Wrapper.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Wrapper;
