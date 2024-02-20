enum ApiRoutes {
  // user api
  listOprations = "user/oprations/list",
  listAreasOprations = "user/oprations/listAreas",

  // admin api
  login = "admin/login",
  listRoles = "admin/roles/list",
  createRoles = "admin/roles/create",
  removeRoles = "admin/roles/remove",
  listAdminPermissions = "admin/permissions/admin/list",
  listUserPermissions = "admin/permissions/user/list",

  // listServices = "services/list",
  // listProducts = "products/list",
  // listCategories = "categories/list",
  // listReviews = "reviews/list",
  // listBanners = "banners/list",
  // getShopById = "shops/get",
  // getProductById = "products/get",
  // getServiceById = "services/get",
  // addToCart = "carts/item",
  // requestService = "requests/create",
  // getCart = "carts/get",
  // removeFromCart = "/carts/item",
  // flushCart = "carts/flush",
  // createOrder = "orders/create",
  // getWishlist = "wishlists/get",
  // addToWishlist = "wishlists/item",
  // removeFromWishlist = "wishlists/item",
  // listServicesRequested = "requests/list",
  // listOrders = "orders/list",
  // uploadImage = "image",
  // register = "register",
  // login = "login",
  // addReview = "reviews/create",
}
export default ApiRoutes;
