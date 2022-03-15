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

    var dir = "des";
   // $scope.sortById = "";
    $scope.sortBy = function (colName) {
        ClearSort();
        if (colName == 'id') {
            if (dir == "des") {
                $scope.customers.sort((a, b) => (a.ID < b.ID) ? -1 : ((a.ID > b.ID) ? 1 : 0));
                $scope.sortById = "A-Z";
            } else {
                $scope.customers.sort((a, b) => (b.ID < a.ID) ? -1 : ((b.ID > a.ID) ? 1 : 0));
                $scope.sortById = "Z-A";
            }

        }
        else if (colName == 'name') {
            if (dir == "des") {
                $scope.customers.sort((a, b) => (a.CustomerName < b.CustomerName) ? -1 : ((a.CustomerName > b.CustomerName) ? 1 : 0));
                $scope.sortByName = "A-Z";
            } else {
                $scope.customers.sort((a, b) => (b.CustomerName < a.CustomerName) ? -1 : ((b.CustomerName > a.CustomerName) ? 1 : 0));
                $scope.sortByName = "Z-A";
            }
        }
        else if (colName == 'class') {
            if (dir == "des") {
                $scope.customers.sort((a, b) => (a.Class < b.Class) ? -1 : ((a.Class > b.Class) ? 1 : 0));
                $scope.sortByClass = "A-Z";
            } else {
                $scope.customers.sort((a, b) => (b.Class < a.Class) ? -1 : ((b.Class > a.Class) ? 1 : 0));
                $scope.sortByClass = "Z-A";
            }
        }
        else if (colName == 'phone') {
            if (dir == "des") {
                $scope.customers.sort((a, b) => (a.Phone < b.Phone) ? -1 : ((a.Phone > b.Phone) ? 1 : 0));
                $scope.sortByPhone = "A-Z";
            } else {
                $scope.customers.sort((a, b) => (b.Phone < a.Phone) ? -1 : ((b.Phone > a.Phone) ? 1 : 0));
                $scope.sortByPhone = "Z-A";
            }
        }
        else if (colName == 'email') {
            if (dir == "des") {
                $scope.customers.sort((a, b) => (a.Email < b.Email) ? -1 : ((a.Email > b.Email) ? 1 : 0));
                $scope.sortByEmail = "A-Z";
            } else {
                $scope.customers.sort((a, b) => (b.Email < a.Email) ? -1 : ((b.Email > a.Email) ? 1 : 0));
                $scope.sortByEmail = "Z-A";
            }
        } 

        if (dir == "des") {
            dir = "ass";
        }else {
            dir = "des";
        }
    }

    $scope.unSort = function () {
        $scope.customers.sort((a, b) => (a.ID < b.ID) ? -1 : ((a.ID > b.ID) ? 1 : 0));
        ClearSort();
    }

    function ClearSort() {
        $scope.sortById = "";
        $scope.sortByName = "";
        $scope.sortByClass = "";
        $scope.sortByPhone = "";
        $scope.sortByEmail = "";
    }
});