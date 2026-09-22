import { CapabilityCard, LeaderProfile } from '../types';

export const IMAGES = {
  office: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3XWqF15PtUweWAR-1WD4YKTEAG6nDjn34mA_z9zOvNKYf3gTSDOFuDiDhZv1z8my3NbVHCqk4Dy01-BZlI_j6pZUAl7rgJWAmXlb_aQYrOIzlgrV6_ic7uMZwi5I_Seewi8R_uCkdNIfzIuCTslSGTwKF1D540xEYsT2ygof12_m7Cmee0T6CSdzz1PmLDoPvQRZov8kejrnkt9zY5ClDHHQiJUihIT8ssrr-h75ZbBWDo7P7CQFH',
  iswarya: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjQ3vnQ3YUKcna0bNbhZTpVuFX2N1CHhFupMmvSshIM_mvDVWtbAOT9RX1QfQklXLPg0tEpJ-CUI8GVDd1ZhVlMdHWfoaXupoVtmbdXMBsawdS-fL_G_AEtwo74BOS_xPWcOhECSwBcw8diZ3aoLoquQ1fOQ_18jNvSht3hFLWjPCx_SHYnzc8wy6jQivjtn3qXsklp6BXf5_DWQzpuD9ycJdkNGG6ydmS5H7bKS4Tz0VXAlRMbdrn',
  nithishkumar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmXKXR8roScCPVmA6KJzZOBK92JwJZuQQrjbl9u8YESpBLUqJ-sVo0ftVBbyEGAMJNbbFa1lvP3GbKgtxeEojxtm5wfGWestqyNHoABaMkEnTbY6xubOeUxAxhWhLEwBjpGS3pbGJ3mZZa33_vusM3bCiFc3e6MQ3qg0V9Ayo2rvGKYOxvLILeY4VKgew4jOmQTunB-erPZBC5l6Yo63kAyePKWLvHshqzZ5ESlSmD2r9yPHrRe6fw',
  globalOperations: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACDw8KQgckgHKmU7BuHn83JehdeIL3BzGfmdRe6-S8kM_bGwcQgc4T-aEx9wXrwVcOzuUNM-25voRjh-E9201RpX2unddrCBVE1K51_vj59CjlAjX_3l30_8PuieDSaiGjFYsNtesrz19-0f9jZbKyKK09b8EkSlMjCWbJ9Q4xFF9S-V7MMSxmf1dGlIYvFYVwphzMfz2DY5EZsa2FfMPeuBIWu5ER288ihd91SfIGkWOl74JbdmAC',
  nexusLogo: '/bird-icon.png',
  boardroom: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-SXRlIv_W-sqSU7lnmdnHOiWmHgyOekbzGaOnTmZGXeW3HSwG4PJ2tKKKBRd4HWk8L2Ro2ei3sCFhgK6acvrweucxuRcTp0aRY8RHT2cdP7EkjeDl9fai5cev3q_7NUggSZJqQ8ZPgTtV5oHny65GPFFFz_QJ6uHpEYqQoHi28X-ZWua9ny0MgDiRUvbwJsQK0MfWTxMiU2micXtBvLiXh6wtV_-X70T-gqk7ZCv0Ew1A8ABcNLS5',
  elenaVance: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEH-J_wfXrf9YbGpmu7vEuWAPedJERstm_VPcJI0RHhwnbPBltCCDWPL-PMZjJxmO7dLxlTvG2gPmmCylKwvohMb38OWGQnyJ4QYqQEw7145zgdp2M6-FUMkPqWNbjflj9luG2OzJt_QvUe-GYpradkklDoLQ75IL_f2PRjeLw3Di4Mbr-RMgMLUDh78anXqWDPk7brk7NN84bHtrM3fnoxMEbxv0O7SQuQjrGBhMi-OmhtCGN5_Nv',
  marcusThorne: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlwGuubuZRl3-JWnUehD_g4UADRyhIjOVqaqcTGCtU6DfiJF-ConiHPZWGgpLq0oDMPiG86sZs5YBbwqdBRWLYOrEPi1OK_GWFXsqdy7d3DNhH750ccxAgWBPSV17u0WGlvjZDqMMbmE3qLvLcACgsRu-bYwgCuR8gRYjoJYwiOwOI-y-yt_qdX8DRtnsJZesrvTppWRfK1_-r9kI4KOnctU7utkKSh0qaFVBpgNtTfTnDbI_yxwcr',
  aaliyahChen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjUZB5q8fUfVQMtyW8AE1NE8hA6zJxoo8_as3IL6NtU84eaV3IQcF0E8Rba_csjT8Pz0bifXpxCmP5GUhgayvACAIjzBaYJiEUAmpgXps74d7O10UbXCQi8xfPUs9VVYCnyzHSzomzAVOaqiN4kvgLk5qXV0EoUt6yFLrb8jocF2Guy-T8p7AEYzEjsyZCwUVgw-TaBSnu3B5cEqgoWRc7VL-GaBA-PmOnd--4proc0SR5m41go6km',
  globalEdge: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMF8T0PUZqyTKpl3Yprl_nqCKprqaib9mIqWX5YD6BWRO40KbW6gFIuIuy-jZfLlDg7jNt9zhtqqag6t1Pxp0ekG5P0NzXvbhLu8-UJdjmw_bFi6J-vv6ikL4oLC1mL-6jY__h5fU82IV_VSI7Jx2VQFAKnTn5VpBMxo7Q0wbUF-9LpDjfiiBVZhZs_nfKNis8pEDHpayLiBH7k8TWn9wLIQf22esjHzERCTa21RgRy5g63Q8UDN_b',
  engDashboard: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8zScrzsl37cIXDuGAfHsJ94u1-5BjoSi750Pxrxf1AEWJenizXMtIZJ_LNvoY7EfHe7TWl82evosgItTUmg6mK53j_3dYzAp36kWwsWNY7Ud8tcmXLTeBH03eIGPgp5g4BWV148lTAzahvVpp_0i-Xf5LMIedqoYgw3vhgOTAam2ytIM0NXH_Rcj8Iy4uCbJkLZgxQNY5_cluR0lfVopudvBnkLGcpcsaswPPc4M-ew2BBfvj55hd',
  finDashboard: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRnsTHy92g6oNTTE5LLDFRkpxo-xVSgqQrFRJY6uQH4UbqNHHkznhDE9_cQG_V5PxyhEi1MlYfR5_xeNAx9OD0iF_kbYNbwcPazgWr1FkvZCsGktn2G5lB2H9QZfaJM9p0jIvBdYQ32SXBvdvFgNKW0CnDjIY__7ch9hIjjYFsPC5m1kAzBDJPsIOX3hLdAUFxfoyeXxvYlrzWEq1FjrW0IqV3Xot3t-XTCv-6YwooxWBDf0t43WOr',
  opsCanvas: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB53GUG0B6sEYsXqTXNZooqTPGWhNFKLwLOZ-88ECMJNmmg8XyXCDJ07fq5aq2rOHL1NLTlrkIzr05khlH6xVgtBmuiZ5ulLVKaGGrM1XXAj6PZOIt1U_KdwrTGt-rfNkFnO5gwZ1cAZ36vSfCXE0PNPSAOJZGgOLQ5u9Cu9ZZY39WpG-mEiSYzguRegKcV2dVgz3R0t0EvkH6IkWJ4wwBJim5X7AmSqRyKMXgTxc5sczQI_nwt9Sqr',
};

export const FOUNDERS: LeaderProfile[] = [
  {
    name: 'Iswarya',
    role: 'CEO & Co-Founder',
    badge: '',
    bio: '',
    focus: '',
    image: '/ceo.jpg',
  },
  {
    name: 'Nithishkumar',
    role: 'CTO & Co-Founder',
    badge: '',
    bio: '',
    focus: '',
    image: '/cto.jpg',
  },
  {
    name: 'Karthik Balaji',
    role: 'COO',
    badge: '',
    bio: '',
    focus: '',
    image: '/coo.jpg',
  },
];

export const EXTENDED_LEADERSHIP: LeaderProfile[] = [];

export const CAPABILITIES: CapabilityCard[] = [
  {
    id: 'cap-1',
    dept: 'engineering',
    title: 'Microservice Orchestration',
    description: 'Launch reliable multi-step workflows that automatically undo mistakes, test changes safely on a small group first, and self-repair across cloud providers.',
    icon: 'terminal',
    metric: '99.999%',
    metricLabel: 'SLA',
    tagColor: 'primary',
  },
  {
    id: 'cap-2',
    dept: 'revenue',
    title: 'Automated Billing & Metering',
    description: 'Track usage down to the second, generate invoices automatically, recognize revenue in real time, and recover missed payments without manual follow-up.',
    icon: 'payments',
    metric: 'Real-time',
    metricLabel: 'Sync',
    tagColor: 'secondary',
  },
  {
    id: 'cap-3',
    dept: 'security',
    title: 'Zero-Trust Identity Governance',
    description: 'Fine-grained user permissions, automatic access checks, always-on compliance monitoring, and instant audit logs for SOC2, HIPAA, and GDPR.',
    icon: 'shield_locked',
    metric: 'Continuous',
    metricLabel: 'Audit',
    tagColor: 'error',
  },
  {
    id: 'cap-4',
    dept: 'product',
    title: 'Modular Feature Flagging',
    description: 'Turn features on or off instantly for specific user groups, track their impact in real time, and auto-revert if errors spike.',
    icon: 'dashboard_customize',
    metric: '< 50ms',
    metricLabel: 'Propagation',
    tagColor: 'surface',
  },
  {
    id: 'cap-5',
    dept: 'engineering',
    title: 'Event-Driven Data Streaming',
    description: 'A high-speed data pipeline that captures millions of events per second with zero data loss.',
    icon: 'hub',
    metric: '10M eps',
    metricLabel: 'Throughput',
    tagColor: 'primary',
  },
  {
    id: 'cap-6',
    dept: 'revenue',
    title: 'Predictive Churn Analytics',
    description: 'AI models that spot which customers are at risk of leaving and automatically trigger outreach to keep them.',
    icon: 'analytics',
    metric: '94.2%',
    metricLabel: 'Accuracy',
    tagColor: 'secondary',
  },
];
