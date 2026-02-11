// src/components/Portfolio.jsx
function Portfolio({ lang }) {
  const content = {
    en: {
      title: "Projects & Highlights",
      items: [
        {
          title: "LLM Inference Serving Prototype (TODO)",
          time: "2025",
          description:
            "TODO: planned project for batching, cache-aware routing, and latency profiling."
        },
        {
          title: "MoE Routing Simulator",
          time: "2024",
          description:
            "Simulated expert load balance strategies to compare throughput, tail latency, and utilization."
        },
        {
          title: "CI/CD & Observability Toolkit",
          time: "2023",
          description:
            "Standardized build artifacts, regression checks, and performance alerts for scalable testing workflows."
        }
      ]
    },
    zh: {
      title: "项目与成果",
      items: [
        {
          title: "大模型推理服务原型（TODO）",
          time: "2025年",
          description:
            "TODO：计划中的项目，包含批处理、缓存优化与时延画像。"
        },
        {
          title: "MoE 路由模拟器",
          time: "2024年",
          description:
            "对比不同负载均衡策略下的吞吐、尾时延与资源利用率。"
        },
        {
          title: "CI/CD 与可观测性工具集",
          time: "2023年",
          description:
            "统一制品版本、回归检测与性能告警，支撑规模化测试流程。"
        }
      ]
    }
  };

  // 避免 lang 为空时报错
  const data = content[lang] ?? content.en;
  return (
    <section id="portfolio" className="section">
      <div className="section-head">
        <h2 className="section-title">{data.title}</h2>
        <p className="section-subtitle">
          {lang === 'en'
            ? 'Hands-on work that emphasizes performance, reliability, and scale.'
            : '聚焦性能、稳定性与规模化的实践项目。'}
        </p>
      </div>

      <div className="grid three">
        {data.items.map((item, i) => (
          <div key={i} className="card">
            <div className="card-kicker">{item.time}</div>
            <h3>{item.title}</h3>
            <p className="muted">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;