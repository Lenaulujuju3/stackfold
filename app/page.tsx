export default function Home() {
  return (
    <main style={{maxWidth:960, margin:'80px auto', padding:'0 24px'}}>
      <h1 style={{fontSize:36, fontWeight:700, marginBottom:12}}>StackFold</h1>
      <p style={{color:'#4b5563', lineHeight:1.6}}>
        Consumer Demand Cohorts for high-performance insurance acquisition.
      </p>
      <div style={{marginTop:24, display:'grid', gap:12}}>
        <a href="#indices" style={{display:'inline-block', padding:'10px 14px', background:'#111', color:'#fff', borderRadius:8, width:'fit-content'}}>View Demand Indices</a>
      </div>
    </main>
  );
}
