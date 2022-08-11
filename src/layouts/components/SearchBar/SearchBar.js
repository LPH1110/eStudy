import styles from './SearchBar.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { ClearIcon } from '~/components/Icons';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

function SearchBar() {
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    const handleClearSearchValue = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    return (
        <div className={cx('wrapper')}>
            <form className={cx('inner')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search some materials..."
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                {searchValue.length > 0 && (
                    <button type="button" className={cx('clear-btn')} onClick={handleClearSearchValue}>
                        <ClearIcon width="16" height="16" />
                    </button>
                )}
                <span></span>
                <button type="button" className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <FontAwesomeIcon icon={solid('magnifying-glass')} />
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
