import Link from "next/link";
import { siteBranding } from "../lib/site-branding.mjs";
import type { ExamConfig } from "../types/quiz";
import { resolveContestBranding } from "../lib/branding.mjs";

export default function ContestIntro({ config }: { config: ExamConfig }) {
  const branding = resolveContestBranding(config);
  return (
    <section className="contest-intro" aria-labelledby="contest-title">
      <div className="contest-watermark" aria-hidden="true">
        <div className="contest-watermark-glow" />
        <img
          src={siteBranding(config.siteBranding).logo}
          alt=""
          width={400}
          height={449}
        />
      </div>
      <p className="contest-eyebrow">Cuộc thi trực tuyến</p>
      <h1 id="contest-title" className="contest-title">
        {branding.title}
      </h1>
      <p className="contest-description">{branding.description}</p>
      <div className="contest-facts">
        <div>
          <p>
            <strong>{config.questionCount} câu hỏi</strong>
            <span>Trong mỗi đề thi</span>
          </p>
        </div>
        <div>
          <p>
            <strong>{config.totalTimeMinutes} phút</strong>
            <span>Thời gian toàn bài</span>
          </p>
        </div>
        <div>
          <p>
            <strong>Điểm cao nhất</strong>
            <span>Được ghi nhận khi thi lại</span>
          </p>
        </div>
      </div>
      <div className="contest-note">
        <Link href="/dashboard">Xem bảng kết quả →</Link>
      </div>
    </section>
  );
}
