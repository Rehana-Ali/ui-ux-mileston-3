// export interface product  {
//     _id : string;
//     title : string;
//     description : string;
//     price : number;
//     tag : string;
//     discountpercentage : number;
//     newbadge : string;
//     productImage : string
//     quantity: number;
//     id?: string;       // Optional
//   name?: string;    
  
//   };
// export interface CartItem {
//   id: string;           // Unique identifier for the cart item (same as product _id)
//   title: string;        // Product title
//   price: number;        // Product price
//   quantity: number;     // Quantity of this product in the cart
//   productImage : string 
//   name: string,     // Optional
     

// }








export interface Product {
  _id: string;            // Unique identifier for the product
  title: string;          // Product title
  description: string;    // Product description
  price: number;          // Price of the product
  tag: string;            // Tag (category or type) of the product
  discountPercentage?: number;  // Discount percentage (optional)
  newbadge: string;       // New badge for the product
  productImage: string;   // Product image URL
  quantity: number;       // Quantity available of the product
  id?: string;            // Optional ID for some cases
  name?: string;          // Optional name (may not be used in all cases)
}

export interface CartItem {
  id: string;             // Unique identifier for the cart item (same as Product _id)
  title: string;          // Product title (same as Product title)
  price: number;          // Product price (same as Product price)
  quantity: number;       // Quantity of this product in the cart
  productImage: string;   // Product image URL (same as Product image)
  name: string;           // Product name (used for display in the cart)
}
