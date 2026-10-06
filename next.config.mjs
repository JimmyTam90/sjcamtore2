/** Remote image host verified from SOURCE_WEBSITE product pages (Shopify CDN path on the merchant domain). */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "sjcamstores.com", pathname: "/cdn/shop/files/**" }],
  },
};
export default nextConfig;
