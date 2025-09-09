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
          ],
          logo: "/logos/UESTC.png"
        },
        {
          school: "Delft University of Technology (TU Delft)",
          years: "2024 - 2025",
          degree: "Master in Computer Science (withdrew)",
          details: [
            "Initial enrollment in M.Sc. program; later withdrew to pursue alternative research opportunities"
          ],
          logo: "/logos/TU-Delft.png"
        },
        {
          school: "Hong Kong University of Science and Technology (Guangzhou)",
          years: "2025 - 2027 (expected)",
          degree: "M.Phil. in Computer Science and Engineering (Full Scholarship)",
          details: [
            "Focus: Large Language Models, Mixture-of-Experts, Efficient Serving"
          ],
          logo: "/logos/HKUST-GZ.png"
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
          ],
          logo: "/logos/UESTC.png"
        },
        {
          school: "代尔夫特理工大学（TU Delft）",
          years: "2024 - 2025",
          degree: "计算机科学硕士（后退学）",
          details: [
            "最初就读硕士项目，后因个人科研规划退学"
          ],
          logo: "/logos/TU-Delft.png"
        },
        {
          school: "香港科技大学（广州）",
          years: "2025 - 2027（预计）",
          degree: "计算机科学与工程 MPhil（全额奖学金）",
          details: [
            "研究方向：大语言模型、专家混合、推理加速"
          ],
          logo: "/logos/HKUST-GZ.png"
        }
      ]
    }
  };

  const content = data[lang] ?? data.en;

  return (
    <section id="education">
      <h2>{content.title}</h2>
      {content.degrees.map((deg, idx) => (
        <div key={idx} className="degree" style={{ display: "flex", marginBottom: "20px" }}>
          {/* 左边校徽 */}
          <div style={{ flex: "0 0 200px", marginRight: "16px" }}>
            {deg.logo && <img src={deg.logo} alt={`${deg.school} logo`} style={{ width: "200px", height: "60px", objectFit: "contain" }} />}
          </div>

          {/* 右边文字 */}
          <div>
            <h3>{deg.school} <span style={{ fontWeight: "normal", fontSize: "0.9em" }}> {deg.years}</span></h3>
            <p>{deg.degree}</p>
            <ul>
              {deg.details.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Education;
