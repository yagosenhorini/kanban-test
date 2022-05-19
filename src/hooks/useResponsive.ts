import { useMediaQuery } from 'react-responsive';

const useResponsive = () => {
  const isNotMobile = useMediaQuery({ minWidth: '560px' });
  const isMobile = useMediaQuery({ maxWidth: '575px' });
  const isTablet = useMediaQuery({ minWidth: '768px', maxWidth: '1024px' });
  const isDesktop = useMediaQuery({ minWidth: '1201px' });

  return {
    isNotMobile,
    isMobile,
    isTablet,
    isDesktop,
  };
};

export default useResponsive;
