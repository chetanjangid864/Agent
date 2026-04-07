'use client';
import { useState, useMemo } from 'react';
import opportunities from '@/data/index';
import Link from 'next/link';
import { Search, Filter, Euro, ChevronRight, CheckCircle } from 'lucide-react';
import { formatStatus } from '@/utils/formatters';

export default function OpportunitiesListing() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    country: '',
    region_of_europe: '',
    sector: '',
    audience_type: '',
    funding_type: '',
    status: '',
    verified_status: ''
  });

  // Extract unique filter options dynamically from JSON data
  const options = {
    country: [...new Set(opportunities.map(o => o.country))],
    region: [...new Set(opportunities.map(o => o.region_of_europe))],
    sector: [...new Set(opportunities.map(o => o.sector))],
    audience: [...new Set(opportunities.map(o => o.audience_type))],
    type: [...new Set(opportunities.map(o => o.funding_type))],
    status: [...new Set(opportunities.map(o => o.status))],
    verification: [...new Set(opportunities.map(o => o.verified_status || 'unverified'))]
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredOpportunities = opportunities.filter(opp => {
      const matchSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          opp.short_summary.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCountry = filters.country ? opp.country === filters.country : true;
      const matchRegion = filters.region_of_europe ? opp.region_of_europe === filters.region_of_europe : true;
      const matchSector = filters.sector ? opp.sector === filters.sector : true;
      const matchAudience = filters.audience_type ? opp.audience_type === filters.audience_type : true;
      const matchType = filters.funding_type ? opp.funding_type === filters.funding_type : true;
      const matchStatus = filters.status ? opp.status === filters.status : true;
      const matchVerified = filters.verified_status ? (opp.verified_status || 'unverified') === filters.verified_status : true;

      return matchSearch && matchCountry && matchRegion && matchSector && matchAudience && matchType && matchStatus && matchVerified;
    }).sort((a, b) => {
      // Prioritize verified items
      if (a.verified_status === 'verified' && b.verified_status !== 'verified') return -1;
      if (a.verified_status !== 'verified' && b.verified_status === 'verified') return 1;
      return 0;
    });

  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Live Opportunities</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Filter through our exclusive database of actionable grants, tenders, and business loans across Europe.</p>
      </div>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {/* Sidebar Filters */}
        <div style={{ flex: '1 1 300px' }}>
          <div className="glass-card" style={{ padding: '2rem', position: 'sticky', top: '100px' }}>
             <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}><Filter size={20} color="var(--accent)" /> Advanced Filters</h3>
             
             <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Search Keywords</label>
                <div style={{ position: 'relative' }}>
                  <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '14px' }} />
                  <input 
                    type="text" 
                    placeholder="Search titles..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.2rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: 'white', outline: 'none' }}
                  />
                </div>
             </div>

             {/* Select Filters */}
             {Object.entries({
               'Country': { key: 'country', opts: options.country },
               'Region': { key: 'region_of_europe', opts: options.region },
               'Sector': { key: 'sector', opts: options.sector },
               'Audience': { key: 'audience_type', opts: options.audience },
               'Funding Type': { key: 'funding_type', opts: options.type },
               'Status': { key: 'status', opts: options.status },
               'Verification': { key: 'verified_status', opts: options.verification }
             }).map(([label, filterConfig]) => (
               <div key={label} style={{ marginBottom: '1rem' }}>
                 <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{label}</label>
                 <select 
                   value={filters[filterConfig.key]}
                   onChange={(e) => handleFilterChange(filterConfig.key, e.target.value)}
                   style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: 'white', outline: 'none', cursor: 'pointer', appearance: 'none' }}
                 >
                   <option value="" style={{ background: 'var(--surface)' }}>All {label}s</option>
                   {filterConfig.opts.map(opt => (
                     <option key={opt} value={opt} style={{ background: 'var(--surface)' }}>
                       {label === 'Status' ? formatStatus(opt) : opt}
                     </option>
                   ))}
                 </select>
               </div>
             ))}
             <button onClick={() => setFilters({country: '', region_of_europe: '', sector: '', audience_type: '', funding_type: '', status: ''})} className="btn" style={{ width: '100%', marginTop: '1rem', background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Clear Filters</button>
          </div>
        </div>

        {/* Results Stream */}
        <div style={{ flex: '3 1 600px' }}>
           <div style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', fontWeight: 500 }}>
             Showing {filteredOpportunities.length} opportunities
           </div>

           <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
             {filteredOpportunities.length > 0 ? filteredOpportunities.map((opp) => (
               <Link href={`/opportunity/${opp.slug}`} key={opp.slug}>
                 <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'transform 0.2s', cursor: 'pointer' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                         <span style={{ padding: '4px 12px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary)', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>{opp.funding_type}</span>
                         {opp.verified_status === 'verified' && (
                           <span style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 10px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', border: '1px solid #10b981', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700 }}>
                             <CheckCircle size={12}/> Verified
                           </span>
                         )}
                      </div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Deadline: <strong style={{ color: 'var(--text-color)' }}>{opp.application_deadline}</strong></span>
                   </div>
                   <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{opp.title}</h3>
                   <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0 }}>{opp.short_summary}</p>
                   
                   <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                      <span style={{ fontSize: '0.85rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '4px' }}><Euro size={14}/> {opp.funding_amount}</span>
                      <span style={{ fontSize: '0.85rem', color: '#cbd5e1', opacity: 0.5 }}>|</span>
                      <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>{opp.country}</span>
                      <span style={{ fontSize: '0.85rem', color: '#cbd5e1', opacity: 0.5 }}>|</span>
                      <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>{opp.sector}</span>
                   </div>
                 </div>
               </Link>
             )) : (
               <div className="glass-card" style={{ padding: '4rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'inline-block', marginBottom: '1rem' }}>
                     <Search size={32} color="var(--text-muted)" />
                  </div>
                  <h3 style={{ color: 'white', fontSize: '1.5rem', margin: 0 }}>No opportunities found.</h3>
                  <p style={{ color: 'var(--text-muted)', maxWidth: '400px', margin: '0 auto' }}>Adjust or clear your advanced filters to explore the broader factual database of European grants.</p>
                  <button onClick={() => setFilters({country: '', region_of_europe: '', sector: '', audience_type: '', funding_type: '', status: ''})} className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                    Reset All Filters
                  </button>
               </div>
             )}
           </div>
        </div>
      </div>
    </div>
  );
}
