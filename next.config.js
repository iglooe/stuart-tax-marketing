// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// export default nextConfig

// @ts-check

const withNextIntl = require("next-intl/plugin")("./i18n/i18n.config.ts")

/** @type {import('next').NextConfig} */
const config = {}

module.exports = withNextIntl(config)
