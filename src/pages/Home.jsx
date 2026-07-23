
import React from 'react'
import { PageHeader } from '../components/shared/PageHeader'
import { MerticCard } from '../components/dashboard/MerticCard'
import { DollarSign } from 'lucide-react'

export const Home = () => {
  //const totalMrr = activeSubs.reduce((sum, s) => sum + (s.interval === "annual" ? s.amount / 12 : s.amount), 0);
  return (
    <div>
      <PageHeader title="Dashboard" description="Overview for ....." />

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4 mb-6'>
        <MerticCard label="MRR"  format="currency" change={12.5} changeLabel="vs last month" icon={DollarSign} />
        
      </div>
    </div>
  )
}





//  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//         <MetricCard label="MRR" value={totalMrr} format="currency" change={12.5} changeLabel="vs last month" icon={DollarSign} />