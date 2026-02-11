// src/components/Portfolio.jsx
function Portfolio({ lang }) {
  const content = {
    en: {
      title: "Projects & Highlights",
      items: [
        {
          title: "Third Prize – UESTC 19th ACM Programming Contest",
          time: "09/2021",
          description:
            "Solve complex algorithmic challenges with teammate, demonstrating advanced programming skills under competition pressure."
        },
        {
          title: "Assistant Leader – Campus Art Troupe",
          time: "09/2021 - 06/2023",
          description:
            "Organized 30+ art events with innovative marketing strategies, increasing audience attendance by 20%."
        }
        // More ICI
      ]
    },
    zh: {
      title: "项目与成果",
      items: [
        {
          title: "第19届校ACM程序设计大赛三等奖",
          time: "2021年9月",
          description:
            "合作解决复杂算法问题，在高强度竞赛环境中展示出优秀的编程和问题解决能力。"
        },
        {
          title: "校文艺演出团副团长",
          time: "2021年9月 - 2023年6月",
          description:
            "统筹组织30余场校园文艺活动，并采用创新宣传策略，使活动出席率提升了20%。"
        }
        // More ICI
      ]
    }
  };

  // 避免 lang 为空时报错
  const data = content[lang] ?? content.en;
  return (
    <section id="portfolio">
      <h2>{data.title}</h2>
      {data.items.map((item, i) => (
        <div key={i} className="portfolio-item">
          <h3>
            {item.title} <span>({item.time})</span>
          </h3>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Portfolio;