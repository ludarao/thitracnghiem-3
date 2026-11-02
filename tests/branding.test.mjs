import test from "node:test";
import assert from "node:assert/strict";
import {
  resolveContestBranding,
  CONTEST_TITLE,
  CONTEST_DESCRIPTION,
} from "../src/lib/branding.mjs";

test("existing database defaults display the traffic law contest without changing stored config", () => {
  const config = Object.freeze({
    title: "HỘI THI TÌM HIỂU NGHỊ QUYẾT ĐẠI HỘI XIII ĐOÀN TNCS HỒ CHÍ MINH",
    description:
      "Kiểm tra, đánh giá nhận thức cán bộ, đoàn viên thanh niên về Nghị quyết Đại hội Đoàn toàn quốc lần thứ XIII",
  });
  assert.deepEqual(resolveContestBranding(config), {
    title: CONTEST_TITLE,
    description: CONTEST_DESCRIPTION,
  });
});

test("custom Admin branding is preserved, including a custom description with the legacy title", () => {
  const custom = {
    title: "Cuộc thi của đơn vị",
    description: "Nội dung do Admin thiết lập",
  };
  assert.deepEqual(resolveContestBranding(custom), custom);
  assert.deepEqual(
    resolveContestBranding({
      title: "HỘI THI TÌM HIỂU NGHỊ QUYẾT ĐẠI HỘI XIII ĐOÀN TNCS HỒ CHÍ MINH",
      description: custom.description,
    }),
    { title: CONTEST_TITLE, description: custom.description },
  );
});
