/** Merchant + affiliate configuration. The sca_ref value is the user-supplied UpPromote referral parameter. */
export const SOURCE_WEBSITE = "https://sjcamstores.com";
export const MERCHANT_ORIGIN = new URL(SOURCE_WEBSITE).origin;
export const AFFILIATE_REF = "12241612.W2V90GaCxT1Lv";
export const DEFAULT_AFFILIATE_URL = `${SOURCE_WEBSITE}?sca_ref=${AFFILIATE_REF}`;

/** Deep link on the merchant domain with the affiliate parameter preserved. Empty path = default URL. */
export function affiliateUrl(path = ""): string {
  if (!path) return DEFAULT_AFFILIATE_URL;
  const u = new URL(path, MERCHANT_ORIGIN);
  u.searchParams.set("sca_ref", AFFILIATE_REF);
  return u.toString();
}

/** Plain merchant policy pages (informational, not affiliate CTAs). */
export const MERCHANT_POLICIES = {
  returns: `${MERCHANT_ORIGIN}/pages/return-refund-policy`,
  warranty: `${MERCHANT_ORIGIN}/pages/warranty`,
  shipping: `${MERCHANT_ORIGIN}/pages/shipping-policy`,
};
