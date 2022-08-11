import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { PopperWrapper } from '../Popper';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Submenu from './Submenu';
import { useState, useRef } from 'react';

const cx = classNames.bind(styles);

function Menu({ items, children, className, multiLevelMenu, hideOnClick = false, onChange }) {
    const [currentItem, setCurrentItem] = useState(items[0]);

    let currentElement = useRef();

    const handleMouseOver = (id) => {
        setCurrentItem((prev) => {
            prev.isActive = false;
            const newObj = items[id];
            items[id].isActive = true;
            return newObj;
        });
    };

    const handleHideMenu = () => {
        setCurrentItem((prev) => {
            prev.isActive = false;
            items[0].isActive = true;
            return items[0];
        });
    };
    const renderItems = () => {
        return items.map((item) => {
            const className = item.isActive ? 'bg-color-active' : '';
            return (
                <MenuItem
                    className={className}
                    ref={currentElement}
                    data={item}
                    key={item.id}
                    onMouseOver={() => handleMouseOver(item.id)}
                />
            );
        });
    };

    const menuListClassName = cx('menu-list', {
        [className]: className,
    });

    return (
        <Tippy
            interactive
            hideOnClick={hideOnClick}
            onHide={handleHideMenu}
            delay={[0, 500]}
            offset={[-10, 8]}
            placement="bottom-start"
            render={(attrs) => (
                <div className={menuListClassName} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        <div className={cx('menu-body')}>{renderItems()}</div>
                        {multiLevelMenu && <Submenu data={currentItem} />}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    items: PropTypes.array.isRequired,
    children: PropTypes.node.isRequired,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
