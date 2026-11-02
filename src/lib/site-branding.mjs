export const DEFAULT_SITE_BRANDING = {
  navbarTitle: "CÔNG AN TỈNH GIA LAI",
  navbarSubtitle: "ĐOÀN THANH NIÊN - HỘI PHỤ NỮ\nPHÒNG CẢNH SÁT GIAO THÔNG",
  logo: "/csgt-logo.png",
};

export const BRANDING_UPDATED_EVENT = "quiz-branding-updated";
export const MAX_LOGO_LENGTH = 180000;

/** @param {Partial<import("../types/quiz").SiteBranding>} [value] */
export function siteBranding(value) {
  return { ...DEFAULT_SITE_BRANDING, ...value };
}

/** @param {unknown} value */
export function validateSiteBranding(value) {
  if (value === undefined) return { ...DEFAULT_SITE_BRANDING };
  if (!value || typeof value !== "object" || Array.isArray(value))
    throw new Error("Cấu hình logo và tên đầu trang không hợp lệ.");
  const branding = siteBranding(
    /** @type {Partial<import("../types/quiz").SiteBranding>} */ (value),
  );
  if (
    typeof branding.navbarTitle !== "string" ||
    !branding.navbarTitle.trim() ||
    branding.navbarTitle.length > 160
  )
    throw new Error("Tên chính đầu trang phải có từ 1 đến 160 ký tự.");
  if (
    typeof branding.navbarSubtitle !== "string" ||
    branding.navbarSubtitle.length > 300
  )
    throw new Error("Tên phụ đầu trang tối đa 300 ký tự.");
  if (
    typeof branding.logo !== "string" ||
    branding.logo.length > MAX_LOGO_LENGTH ||
    (branding.logo !== DEFAULT_SITE_BRANDING.logo &&
      !/^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(
        branding.logo,
      ))
  )
    throw new Error(
      "Logo phải là ảnh PNG, JPG hoặc WebP, tối đa 180 KB sau xử lý.",
    );
  return {
    navbarTitle: branding.navbarTitle.trim(),
    navbarSubtitle: branding.navbarSubtitle.trim(),
    logo: branding.logo,
  };
}
