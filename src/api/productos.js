import axios from "axios";

const apiProductos = {
  getProduct: function(){
    return axios.get('http://localhost:80/productos')
  }
}

export default apiProductos