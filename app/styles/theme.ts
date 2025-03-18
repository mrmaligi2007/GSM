export const colors = {
  primary: '#3B82F6',       // Modern blue
  primaryDark: '#2563EB',   // Darker blue for pressed states
  secondary: '#10B981',     // Emerald green
  secondaryDark: '#059669', // Darker green for pressed states
  background: '#FFFFFF',
  surface: '#F9FAFB',
  surfaceVariant: '#F3F4F6',
  error: '#EF4444',
  success: '#10B981',
  warning: '#F59E0B',
  text: {
    primary: '#111827',
    secondary: '#4B5563',
    disabled: '#9CA3AF',
    inverse: '#FFFFFF',
  },
  border: '#E5E7EB',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  pill: 999,
};

export const typography = {
  fontFamily: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 30,
  },
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
};

// Add a default export for the theme
export default colors;