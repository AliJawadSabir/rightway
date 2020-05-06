// base route for profile module
export * from './routes/base/profile-base-route';

// User Registration
export * from './controllers/user.controller';
export * from './models/user.model';
export * from './routes/user.route';
export * from './models/schema/user';

// Notify User
export * from './controllers/motify-user.controller';
export * from './models/notify-user.model';
export * from './routes/notify-user.route';
export * from './models/schema/notify-user';

// Category
export * from './controllers/category.controller';
export * from './models/category.model';
export * from './routes/category.route';
export * from './models/schema/category';

// Size
export * from './controllers/size.controller';
export * from './models/size.model';
export * from './routes/size.route';
export * from './models/schema/size';

// Product
export * from './controllers/product.controller';
export * from './models/product.model';
export * from './routes/product.route';
export * from './models/schema/product';

// Color
export * from './controllers/color.controller';
export * from './models/color.model';
export * from './routes/color.route';
export * from './models/schema/color';

// Customer
export * from './controllers/customer.controller';
export * from './models/customer.model';
export * from './routes/customer.route';
export * from './models/schema/customer';

// Order
export * from './controllers/order.controller';
export * from './models/order.model';
export * from './routes/order.route';
export * from './models/schema/order';

// ProductOrder
// export * from './controllers/order.controller';
// export * from './models/order.model';
// export * from './routes/order.route';
export * from './models/schema/product-order';