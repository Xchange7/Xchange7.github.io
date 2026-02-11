// src/components/Experience.jsx
function Experience({ lang }) {
  const content = {
    en: {
      title: "Experience",
      position: "Software QA & Infrastructure Intern, Siemens Digital Industry Software",
      period: "Jul 2023 - Jul 2024, Chengdu",
      duties: [
        "Built automation suites and pipelines that reduced regression time and improved release cadence.",
        "Added performance profiling and reliability checks for large-scale test runs.",
        "Implemented CI/CD improvements and artifacts versioning for reproducible builds.",
        "Collaborated with engineers to surface bottlenecks and stabilize critical services."
      ]
    },
    zh: {
      title: "工作经历",
      position: "西门子数字化工业软件 – 质量保证与基础设施实习生",
      period: "2023年7月 - 2024年7月，成都",
      duties: [
        "构建自动化测试与流水线，缩短回归周期并提升交付效率。",
        "为大规模测试加入性能画像与稳定性检查。",
        "完善 CI/CD 及制品版本管理，保证构建可复现。",
        "与研发协作定位瓶颈并提升核心服务稳定性。"
      ]
    }
  };
  
  // 避免 lang 为空时报错
  const data = content[lang] ?? content.en; 
  return (
    <section id="experience" className="section">
      <div className="section-head">
        <h2 className="section-title">{data.title}</h2>
        <p className="section-subtitle">
          {lang === 'en'
            ? 'A foundation in automation, reliability, and performance engineering.'
            : '以自动化、稳定性与性能工程为核心的实践基础。'}
        </p>
      </div>

      <div className="experience-card">
        <div className="experience-header">
          <h3>{data.position}</h3>
          <span className="muted">{data.period}</span>
        </div>
        <ul className="clean-list">
          {data.duties.map((duty, i) => <li key={i}>{duty}</li>)}
        </ul>
      </div>
    </section>
  );
}

export default Experience;