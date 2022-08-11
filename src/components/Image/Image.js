import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import PropTypes from 'prop-types';

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleOnError = () => {
        setFallback(images.logo);
    };

    return <img ref={ref} src={fallback || src} alt={alt} onError={handleOnError} {...props} />;
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
};

export default Image;
