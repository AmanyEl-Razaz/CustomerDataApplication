app.controller("myCntrl", function ($scope, myService) {
    GetAllCustomer();
    $scope.disabledSave = false;
    $scope.disabledUpdate = true;

    //To Get All Records 
    function GetAllCustomer() {
        var getData = myService.getCustomers();
        getData.then(function (customer) {
            $scope.customers = customer.data;
        }, function () {
            alert('Error in getting records');
        });
    }

    $scope.editCustomer = function (customer) {
        $scope.disabledSave = true;
        $scope.disabledUpdate = false;
        $scope.customerId = customer.ID;
            $scope.customerName = customer.CustomerName;
            $scope.customerClass = customer.Class;
            $scope.customerPhone = customer.Phone;
            $scope.customerEmail = customer.Email;
            $scope.customerComment = customer.Comment;
    }


    $scope.AddUpdateCustomer = function () {
        var Customer = {
            CustomerName: $scope.customerName,
            Class: $scope.customerClass,
            Phone: $scope.customerPhone,
            Email: $scope.customerEmail,
            Comment: $scope.customerComment
        };
       
        if ($scope.customerId != "" && $scope.customerId != null && $scope.customerId != undefined) {
            Customer.ID = $scope.customerId;
            var getData = myService.updateCustomer(Customer);
            getData.then(function (msg) {
                GetAllCustomer();
                ClearFields();
                $scope.disabledSave = false;
                $scope.disabledUpdate = true;
                alert(msg.data);
            }, function () {
                alert('Error in updating record');
            });
        } else {
            var getData = myService.AddCustomer(Customer);
            getData.then(function (msg) {
                GetAllCustomer();
                alert(msg.data);
                ClearFields();
            }, function () {
                alert('Error in adding record');
            });
        }
    }

    $scope.deleteCustomer = function () {
        var getData = myService.DeleteCustomer($scope.customerId);
        getData.then(function (msg) {
            GetAllCustomer();
            ClearFields();
            $scope.disabledSave = false;
            $scope.disabledUpdate = true;
            alert('Customer Deleted');
        }, function () {
            alert('Error in Deleting Record');
        });
    }

    function ClearFields() {
        $scope.customerId = "";
        $scope.customerName = "";
        $scope.customerClass = "";
        $scope.customerPhone = "";
        $scope.customerEmail = "";
        $scope.customerComment = "";
        $scope.disabledSave = false;
        $scope.disabledUpdate = true;
    }

    $scope.clearFields = function () {
        ClearFields();
    }
});