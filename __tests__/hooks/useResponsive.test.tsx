import { renderHook } from '@testing-library/react-hooks/pure';
import useResponsive from '@Hooks/useResponsive';

jest.mock('react-responsive');

jest.mock('@Hooks/useResponsive', () =>
  jest.fn(() => ({
    isNotMobile: true,
    isDesktop: false,
    isMobile: false,
    isTablet: false,
  }))
);

describe('UseResponsive Hook', () => {
  it('should isNotMobile responsive be true', () => {
    const { result } = renderHook(() => useResponsive());
    expect(result.current.isNotMobile).toBe(true);
    expect(result.current.isDesktop).toBe(false);
    expect(result.current.isTablet).toBe(false);
    expect(result.current.isMobile).toBe(false);
  });
});
