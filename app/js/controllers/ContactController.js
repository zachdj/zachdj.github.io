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
            name: "Github",
            soicon: "github",
            url: "https://github.com/zachdj",
            color: "green",
            textColor: "white"
        },
        {
            name: "Bitbucket",
            soicon: "bitbucket",
            url: "https://bitbucket.org/zachdj",
            color: "blue",
            textColor: "white"
        },
        {
            name: "Portfolium",
            soicon: "paypal",
            url: "https://portfolium.com/ZacharyJones30",
            color: "white",
            textColor: "blue"
        }
    ];
    
    $scope.contact = [
        {
            text: "zach@zachjones.us *",
            icon: "mail_outline",
            color: "transparent",
            textColor: "orange",
            url: "mailto:zach@zachjones.us"
        },{
            text: "zach.dean.jones@gmail.com",
            icon: "email",
            color: "transparent",
            url: "mailto:zach.dean.jones@gmail.com"
        },{
            text: "(606) 571-7846 *",
            icon: "phone_iphone",
            color: "transparent",
            url: "tel:16065717846"
        }
    ]
}]);