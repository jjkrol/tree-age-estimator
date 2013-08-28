var app = angular.module('trees-app', ['ui.bootstrap']);
//todo validate inputs
//todo add readme
//todo make results look better
// todo end translation
function TreesCtrl($scope, $http) {
    $scope.result = 'Welcome!';
    $scope.resultClass = 'alert alert-success';
    $scope.explanation = 'Feel free to use the calculator on the left';
    $scope.resultsVisible = true;

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

    $scope.calculate = function () {
        $scope.resultsVisible = false;
        majdecki = majdecki($scope.chosenTree, $scope.dbh);
        $scope.results = [
            {"age": lukaszkiewicz($scope.chosenTree, $scope.dbh, $scope.height),
                "class": "alert alert-success",
                "explanation": "J. Łukaszkiewicz's model"},
            {"age": majdecki.age,
                "class": "alert alert-info",
                "explanation": "L. Majdecki's age table interpolation"
            },
            {"age": majdecki.lowerRange + " - " + majdecki.upperRange,
                "class": "alert alert-warning",
                "explanation": "age range from the age table by L. Majdecki"
            }
        ];
        $scope.resultsVisible = true;

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

