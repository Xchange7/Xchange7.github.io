// src/components/Portfolio.jsx
function Portfolio({ lang }) {
  const content = {
    en: {
      title: "Portfolio & Achievements",
      items: [
        {
          title: "Third Prize – UESTC 19th ACM Programming Contest",
          time: "09/2021",
          description: "Led a 3-person team to solve complex algorithmic challenges, demonstrating advanced programming skills under competition pressure."
        },
        {
          title: "Assistant Leader – Campus Art Troupe",
          time: "09/2021 - 06/2023",
          description: "Organized 30+ art events with innovative marketing strategies, increasing audience attendance by 20%."
        }
        // ... other projects or awards
      ]
    },
    zh: {
      title: "作品展示",
      items: [
        {
          title: "第19届校ACM程序设计大赛季军",
          time: "2021年9月",
          description: "作为三人团队的队长，合作解决复杂算法问题，在高强度竞赛环境中展示出优秀的编程和问题解决能力。"
        },
        {
          title: "校文艺演出团副团长",
          time: "2021年9月 - 2023年6月",
          description: "统筹组织30余场校园文艺活动，并采用创新宣传策略，使活动出席率提升了20%。"
        }
        // ... 其他项目或奖励
      ]
    }
  };

  const data = content[lang];
  return (
    <section id="portfolio">
      <h2>{data.title}</h2>
      {data.items.map((item, i) => (
        <div key={i} className="portfolio-item">
          <h3>{item.title} <span>({item.time})</span></h3>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
}
