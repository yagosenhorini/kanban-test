import { renderHook } from '@testing-library/react-hooks';
import useResponsive from '@Hooks/useResponsive';
import { cleanup } from '@testing-library/react';

jest.mock('@Hooks/useResponsive', () =>
  jest.fn(() => ({
    isNotMobile: true,
    isDesktop: false,
    isMobile: false,
    isTablet: false,
  }))
);

afterEach(cleanup);

describe('UseResponsive Hook', () => {
  test('should isNotMobile responsive be true', () => {
    const { result } = renderHook(() => useResponsive());
    expect(result.current.isNotMobile).toBe(true);
    expect(result.current.isDesktop).toBe(false);
    expect(result.current.isTablet).toBe(false);
    expect(result.current.isMobile).toBe(false);
  });
});
