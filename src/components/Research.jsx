// src/components/Research.jsx
function Research({ lang }) {
  const t = {
    en: {
      title: "AI Infra Focus",
      now: "Core Topics",
      moe_focus: [
        "High-throughput LLM inference and serving architectures",
        "MoE routing & load balancing for expert parallelism (current research)",
        "Latency/throughput trade-offs, batching, and KV-cache efficiency",
        "Observability: profiling, tracing, and performance regression detection",
      ],
      stack: "Infrastructure Stack",
      stack_items: [
        "C/C++, Python, Java",
        "PyTorch, CUDA basics, profiler tooling",
        "Linux, containerization, CI/CD workflows",
      ]
    },
    zh: {
      title: "AI Infra 方向",
      now: "核心关注",
      moe_focus: [
        "大模型高吞吐推理与服务架构",
        "MoE 路由与专家并行的负载均衡（当前科研）",
        "时延/吞吐权衡、批处理与 KV-cache 优化",
        "可观测性：性能画像、链路追踪与回归检测",
      ],
      stack: "基础设施栈",
      stack_items: [
        "C/C++、Python、Java",
        "PyTorch、CUDA 基础、性能分析工具",
        "Linux、容器化、CI/CD 流程",
      ]
    }
  };

  const L = t[lang] ?? t.en;

  return (
    <section id="research" className="section">
      <div className="section-head">
        <h2 className="section-title">{L.title}</h2>
        <p className="section-subtitle">
          {lang === 'en'
            ? 'Bridging research with production-grade AI systems.'
            : '将研究成果转化为可落地的 AI 系统能力。'}
        </p>
      </div>

      <div className="grid two">
        <div className="card">
          <h3>{L.now}</h3>
          <ul className="clean-list">
            {L.moe_focus.map((s, i) => <li key={`now-${i}`}>{s}</li>)}
          </ul>
        </div>

        <div className="card">
          <h3>{L.stack}</h3>
          <ul className="clean-list">
            {L.stack_items.map((s, i) => <li key={`stack-${i}`}>{s}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Research;
