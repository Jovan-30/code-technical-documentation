// Catch All Routes
// --------------------------------------------------------------------------------------
// Issue - have a products page but so many products to create nested pages with
//       - products/product/series/reviews/comments/comment-225
//
//
// Solution - products/[...slug]/page.tsx
//
//
// Example:
// http://localhost:3000/products/orange/series/comments/comment255
//
//
// products/[...slug]/page.tsx
//
// const Product = async ({ params }: { params: { slug: string[] } }) => {
//   const { slug } = await params;
//   return (
//     <div>
//       <h1>Product</h1>
//       {slug.map((item, index) => {
//         return <div key={index}>{item}</div>;
//       })}
//     </div>
//   );
// };
//
// export default Product;
