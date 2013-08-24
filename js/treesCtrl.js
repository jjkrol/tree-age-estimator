angular.module('trees-app', ['ui.bootstrap']);

function TreesCtrl($scope, $http) {
    $http.get('js/trees.json').success(function (data) {
        $scope.trees = data;
    });
    $http.get('js/alerts.json').success(function (data) {
        $scope.alerts = data;
    });
    $scope.updateCircumference = function () {
        if($scope.dbh != null && $scope.dbh != ""){
        $scope.circumference = Math.round($scope.dbh * Math.PI);
        }
    };

    $scope.updateDBH = function () {
        if($scope.circumference != null && $scope.circumference != ""){
            $scope.dbh = Math.round($scope.circumference / Math.PI);
        }
    };

    var resultTypes = {
        "lukaszkiewicz": {
            "resultClass": "alert alert-success",
            "explanation": "model J. Łukaszkiewicza"
        },
        "majdecki": {
            "resultClass": "alert alert-info",
            "explanation": "funkcja na podstawie tabeli wiekowej prof. dr Longina Majdeckiego"
        },
        "majdecki-range": {
            "resultClass": "alert alert-warning",
            "explanation": "zakres z tabeli wiekowej prof. dr Longina Majdeckiego"
        }
    }
    $scope.calculate = function () {
        /*$scope.result = lukaszkiewicz($scope.chosenTree, $scope.dbh, $scope.height);
         $scope.resultClass = resultTypes.lukaszkiewicz.resultClass;
         $scope.explanation = resultTypes.lukaszkiewicz.explanation;
         $("#result").show();     */

        console.log(majdecki($scope.chosenTree, $scope.dbh));
        /* $scope.resultClass = resultTypes.lukaszkiewicz.resultClass;
         $scope.explanation = resultTypes.lukaszkiewicz.explanation;
         $("#result").show();     */

    };

    function lukaszkiewicz(tree, dbh, height) {
        exponent = tree.coeff.b + tree.coeff.c * dbh / 100 + tree.coeff.d * height;
        age = -tree.coeff.a + Math.pow(Math.E, exponent);
        return Math.round(age);
    }

    var ageTableKeys = [20, 40, 70, 100, 120];

    function majdecki(tree, dbh) {
        for (i = 0; i < ageTableKeys.length; i++) {
            key = ageTableKeys[i];
            age = tree.ageTable[key];
            if (age == null) {
                return {"age": null, "lowerRange": ageTableKeys[i - 1], "upperRange": "?"};
            }
            if (dbh < age) {
                if (i == 0) {
                    prevKey = 5; //lat
                    prevAge = 1; //m
                }
                else {
                    prevKey = ageTableKeys[i - 1];
                    prevAge = tree.ageTable[prevKey];

                }
                ratio = (key - prevKey) / (age - prevAge);
                distanceFromTheLastPoint = dbh - prevAge;
                result = prevKey + distanceFromTheLastPoint * ratio;
                result = Math.round(result);
                return {"age": result, "lowerRange": prevKey, "upperRange": key};
            }
        }
        return {"age": null, "lowerRange": ageTableKeys[ageTableKeys.length - 1], "upperRange": "?"}
    }
};

