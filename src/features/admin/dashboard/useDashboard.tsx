import { axios } from '@/api';
import { useEffect, useState } from 'react';
import type { AnalyticsResponse, DataCountsResponse } from './types';

export const useDashboard = () => {
  const [dataCounts, setDataCounts] = useState<DataCountsResponse | null>(null);
  const [analytics, setAnalytics] = useState<AnalyticsResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const formattedDate = new Date().toLocaleDateString('sq-AL', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const getDataCounts = async () => {
    try {
      const res = await axios('/admin/dashboard');
      setDataCounts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getAnalytics = async () => {
    try {
      const res = await axios('/admin/analytics');
      setAnalytics(res.data);
      console.log('Analytics:', res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await getDataCounts();
      await getAnalytics();
    })();
  }, []);

  return { isLoading, dataCounts, formattedDate, analytics };
};
