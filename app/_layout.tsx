import React from 'react';
import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from './contexts/ThemeContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { DeviceProvider } from './contexts/DeviceContext';
import { DataStoreProvider } from './contexts/DataStoreContext';
import { DataStoreSyncMonitor } from './components/DataStoreSyncMonitor'
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

declare global {
  interface Window {
    frameworkReady?: () => void;
  }
}

export default function RootLayout() {
  useFrameworkReady();
  useEffect(() => {
    window.frameworkReady?.();
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <DataStoreProvider>
          <DeviceProvider>
            <DataStoreSyncMonitor />
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar style="auto" />
          </DeviceProvider>
        </DataStoreProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}