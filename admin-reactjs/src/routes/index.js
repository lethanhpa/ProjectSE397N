import Home from "../pages/Home"
import ManageCustomers from "../pages/ManageCustomers"
import ManageEmployees from "../pages/ManageEmployees"
import ManageOrders from "../pages/ManageOrders"
import ManageProducts from "../pages/ManageProducts"
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/manageCustomers', component: ManageCustomers },
    { path: '/manageEmployees', component: ManageEmployees },
    { path: '/manageOrders', component: ManageOrders },
    { path: '/manageProducts', component: ManageProducts },
]
const privateRoutes = [
]
export { publicRoutes, privateRoutes }