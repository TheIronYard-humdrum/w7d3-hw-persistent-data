#### w7d3 - HW - Contact Form
---
###### Learning to create persistent data with AngularJS
---

**Angular Tools**

* To __gather__ data stored on server
  ```
  javascript
    $http.get(SERVER.URL, data).then( (res) => {
      $scope.data = res.data;
    });
    ```
* To __send__ data to server
    ```javaScript
    $http.post(SERVER.URL, data).then( (res) => {
        $scope.data.push(res.data);
        $scope.message = {};
    });
    ```

**Validator**

* Created `Validator class` that takes in the message as an object.
    *  Has methods to validate each message attribute: sender, email, website, message and returns boolean values.
* Created `$scope` method to scan message for false values.  Until all values are true, message will not be sent.