app.controller("ContactController", ["$scope", function($scope){
    $scope.social = [
        {
            name: "LinkedIn *",
            soicon: "linkedin",
            url: "https://www.linkedin.com/in/zach-jones-23141b107",
            color: "grey",
            textColor: "white"
        },
        {
            name: "Facebook",
            soicon: "facebook",
            url: "https://www.facebook.com/zach.jones.7106",
            color: " blue darken-4",
            textColor: "white"
        },
        {
            name: "Twitter",
            soicon: "twitter",
            url: "https://twitter.com/zachydj",
            color: "blue",
            textColor: "white"
        },
        {
            name: "Google+",
            soicon: "googleplus",
            url: "https://plus.google.com/u/0/109949378897798144507/about",
            color: "red",
            textColor: "white"
        }
    ];
    
    $scope.contact = [
        {
            text: "zach.dean.jones@gmail.com *",
            icon: "mail_outline",
            color: "transparent",
            textColor: "orange",
            url: "mailto:zach.dean.jones@gmail.com"
        },{
            text: "zach.jones@sbcs.com",
            icon: "email",
            color: "transparent",
            textColor: "orange",
            url: "mailto:zach.jones@sbcs.com"
        },{
            text: "(606) 571-7846 *",
            icon: "phone_iphone",
            color: "transparent",
            textColor: "orange",
            url: "tel:16065717846"
        }
    ]
}]);