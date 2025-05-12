// src/components/Education.jsx
function Education({ lang }) {
  const data = {
    en: {
      title: "Education",
      degrees: [
        {
          school: "University of Electronic Science and Technology of China (UESTC)",
          years: "2020 - 2024",
          degree: "B.Sc. in Computer Science and Technology",
          details: [
            "GPA: 3.92/4.00",
            "Relevant Courses: Microcomputer Assembly, Data Mining, Operating Systems, Algorithms",
            "Scholarship: Three-year university-level scholarship for academic excellence"
          ]
        }
      ]
    },
    zh: {
      title: "教育背景",
      degrees: [
        {
          school: "电子科技大学",
          years: "2020 - 2024",
          degree: "计算机科学与技术 本科",
          details: [
            "GPA绩点：3.92/4.00",
            "主修课程：微机接口与汇编、大数据挖掘、操作系统、数据结构与算法等",
            "荣誉奖励：连续三年获得校级奖学金"
          ]
        }
      ]
    }
  };

  const content = data[lang];
  return (
    <section id="education">
      <h2>{content.title}</h2>
      {content.degrees.map((deg, idx) => (
        <div key={idx} className="degree">
          <h3>{deg.school} <span>{deg.years}</span></h3>
          <p>{deg.degree}</p>
          <ul>
            {deg.details.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
