const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://e-commerce-website.vercel.app/api/products"
    : "http://localhost:5000";

export default baseUrl;