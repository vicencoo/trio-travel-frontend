import type { ReactNode } from 'react';

export type DataCountsResponse = {
  dataCounts: DataCounts[];
};

export type DashboardHeaderProps = {
  formattedDate: string;
};

export type DataCounts = {
  key: string;
  count: number;
  change: number;
  positive: boolean;
};

export type StatsCardProps = {
  data: DataCounts;
};

export type SectionHeaderProps = {
  label: string;
  icon: ReactNode;
  text: string;
};

type DailyTickets = {
  day: string;
  tickets: number;
};

type MonthlyRevenue = {
  month: string;
  month_num: number;
  revenue: string;
};

type MonthlyTickets = {
  month: string;
  month_num: number;
  tickets: number;
};

type TicketStatus = {
  name: 'pending' | 'completed';
  value: number;
};

export type AnalyticsResponse = {
  dailyTickets: DailyTickets[];
  monthlyRevenue: MonthlyRevenue[];
  monthlyTickets: MonthlyTickets[];
  ticketStatus: TicketStatus[];
};
