// src/components/Experience.jsx
function Experience({ lang }) {
  const content = {
    en: {
      title: "Work Experience",
      position: "Quality Assurance Intern, Siemens Digital Industry Software",
      period: "Jul 2023 - Jul 2024, Chengdu",
      duties: [
        "Developed algorithms for predictive analysis in software QA to anticipate system failures.",
        "Implemented C# automation tests to improve testing efficiency and precision.",
        "Established a CI/CD framework to streamline development and deployment processes.",
        "Collaborated with developers by providing detailed testing feedback and suggestions."
      ]
    },
    zh: {
      title: "工作经历",
      position: "西门子数字化工业软件 – 质量保证实习生",
      period: "2023年7月 - 2024年7月，成都",
      duties: [
        "开发软件质量保证的预测分析算法，预判潜在系统故障。",
        "使用C#编写自动化测试，提高测试效率和准确性。",
        "建立持续集成/部署 (CI/CD) 框架，优化开发流程并确保及时交付高质量产品。",
        "与开发团队紧密合作，提供详尽的测试反馈和改进建议。"
      ]
    }
  };
  
  // 避免 lang 为空时报错
  const data = content[lang] ?? content.en; 
  return (
    <section id="experience">
      <h2>{data.title}</h2>
      <h3>{data.position}</h3>
      <p><em>{data.period}</em></p>
      <ul>
        {data.duties.map((duty, i) => <li key={i}>{duty}</li>)}
      </ul>
    </section>
  );
}

export default Experience;