export const CONTEST_TITLE =
  "Cuộc thi tìm hiểu kiến thức pháp luật về Trật tự an toàn giao thông đường bộ";

export const CONTEST_DESCRIPTION =
  "Nâng cao hiểu biết pháp luật, xây dựng văn hóa giao thông và cùng lan tỏa ý thức tham gia giao thông an toàn.";

const LEGACY_TITLE =
  "HỘI THI TÌM HIỂU NGHỊ QUYẾT ĐẠI HỘI XIII ĐOÀN TNCS HỒ CHÍ MINH";
const LEGACY_DESCRIPTION =
  "Kiểm tra, đánh giá nhận thức cán bộ, đoàn viên thanh niên về Nghị quyết Đại hội Đoàn toàn quốc lần thứ XIII";

// Present the new contest when a database still contains the original defaults.
// Explicitly customized titles and descriptions remain editable in Admin.
export function resolveContestBranding({ title, description }) {
  if (title.trim().toUpperCase() !== LEGACY_TITLE)
    return { title, description };
  return {
    title: CONTEST_TITLE,
    description:
      description === LEGACY_DESCRIPTION ? CONTEST_DESCRIPTION : description,
  };
}
