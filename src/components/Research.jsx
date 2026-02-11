// src/components/Research.jsx
function Research({ lang }) {
  const t = {
    en: {
      title: "Research",
      now: "Current Interests",
      moe_focus: [
        "Large Language Models with Mixture-of-Experts (MoE)",
        "Routing objectives: balanced top-k, load balancing loss, expert capacity factor",
        "Stability: expert collapse avoidance, auxiliary losses, temperature/entropy control",
        "Efficiency: sparse activation, expert parallelism, KV-cache & tensor parallel mixing",
        // "Serving: batching with token-level routing, cache locality, vLLM-style paged KV",
        // "Compression: distillation from dense→MoE or MoE→dense; low-rank adapters per expert",
        // "Evaluation: perplexity vs. throughput/latency trade-offs; specialization analysis"
      ],
      stack: "Tech Stack",
      stack_items: [
        "C/C++, Java",
        "PyTorch, CUDA basics",
        // "DeepSpeed-MoE / Tutel / Megablocks (for expert parallelism)",
        // "vLLM-style serving, profiling with torch.compile & torch.profiler",
        // "Weights & Biases / TensorBoard for experiments"
      ]
    },
    zh: {
      title: "研究",
      now: "当前兴趣方向",
      moe_focus: [
        "面向大语言模型的 MoE（专家混合）",
        "路由目标：balanced top-k、负载均衡损失、专家容量因子",
        "稳定性：避免专家坍塌、辅助损失、温度/熵控制",
        "效率：稀疏激活、专家并行、与张量并行/KV-cache 的组合",
        // "推理服务：按 token 路由的批处理、缓存局部性、vLLM 式分页 KV",
        // "压缩：dense→MoE 或 MoE→dense 蒸馏；专家级 LoRA/低秩适配",
        // "评测：困惑度与吞吐/时延的权衡；专家特化分析"
      ],
      stack: "技术栈",
      stack_items: [
        "C/C++, Java",
        "PyTorch、CUDA 基础",
        // "DeepSpeed-MoE / Tutel / Megablocks（专家并行）",
        // "vLLM 风格推理，torch.compile 与 profiler 画像",
        // "W&B / TensorBoard 做实验管理"
      ]
    }
  };

  const L = t[lang] ?? t.en;

  return (
    <section id="research" style={{ padding: "24px 0" }}>
      <h2>{L.title}</h2>

      <h3>{L.now}</h3>
      <ul>
        {L.moe_focus.map((s, i) => <li key={`now-${i}`}>{s}</li>)}
      </ul>

      <h3>{L.stack}</h3>
      <ul>
        {L.stack_items.map((s, i) => <li key={`stack-${i}`}>{s}</li>)}
      </ul>
    </section>
  );
}

export default Research;
