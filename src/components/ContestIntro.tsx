import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock3, Trophy } from "lucide-react";
import type { ExamConfig } from "../types/quiz";
import { resolveContestBranding } from "../lib/branding.mjs";

export default function ContestIntro({ config }: { config: ExamConfig }) {
  const branding = resolveContestBranding(config);
  const title = branding.title.replace(/^Cuộc thi\s*/i, "");

  return (
    <section className="contest-intro" aria-labelledby="contest-title">
      <div className="contest-eyebrow">
        <span /> <p>Cuộc thi</p> <span />
      </div>
      <h1 id="contest-title" className="contest-title">
        {title}
      </h1>
      <p className="contest-description">{branding.description}</p>
      <div className="traffic-illustration">
        <Image
          src="/traffic-city.svg"
          alt="Minh họa đường phố an toàn với xe buýt, ô tô, người đi xe đạp, đèn tín hiệu và vạch qua đường"
          width={720}
          height={300}
          preload
        />
      </div>
      <div className="contest-facts">
        <div>
          <BookOpen aria-hidden="true" />
          <p>
            <strong>{config.questionCount} câu hỏi</strong>
            <span>Khám phá kiến thức</span>
          </p>
        </div>
        <div>
          <Clock3 aria-hidden="true" />
          <p>
            <strong>{config.totalTimeMinutes} phút</strong>
            <span>Thời gian toàn bài</span>
          </p>
        </div>
        <div>
          <Trophy aria-hidden="true" />
          <p>
            <strong>Điểm cao nhất</strong>
            <span>Được ghi nhận khi thi lại</span>
          </p>
        </div>
      </div>
      <div className="contest-note">
        <p>Mỗi hiểu biết đúng, một hành trình an toàn.</p>
        <Link href="/dashboard">
          Xem bảng kết quả{" "}
          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
