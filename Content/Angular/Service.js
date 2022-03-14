app.service("myService", function ($http) {

    //get All Customers
    this.getCustomers = function () {
        return $http.get("Customer/getAll");
    };


    // get Customer By Id
    this.getCustomer = function (ID) {
        var response = $http({
            method: "post",
            url: "Customer/getCustomerByNo",
            params: {
                ID: JSON.stringify(ID)
            }
        });
        return response;
    }
    // Update Customer
    this.updateCustomer = function (customer) {
        var response = $http({
            method: "post",
            url: "Customer/updateCustomer",
            data: JSON.stringify(customer),
            dataType: "json"
        });
        return response;
    }

    // Add Customer
    this.AddCustomer = function (customer) {
        var response = $http({
            method: "post",
            url: "Customer/addCustomer",
            data: JSON.stringify(customer),
            dataType: "json"
        });
        return response;
    }

    //Delete Customer
    this.DeleteCustomer = function (ID) {
        var response = $http({
            method: "post",
            url: "Customer/deleteCustomer",
            params: {
                ID: JSON.stringify(ID)
            }
        });
        return response;
    }
})