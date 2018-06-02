app.controller("ResumeController", ["$scope", "$state", function($scope, $state){
    $scope.goToPortfolio = function(){
        $state.go("app.my-work");
    };

    $scope.employment = [
        {
            name: "Strictly Business Computer Systems",
            title: "Intern Application Developer",
            description: ["Worked as an individual and in various teams to produce quality web and mobile software solutions.",
                "Responsibilities included application design, development, debugging, and maintenance."],
            logoUrl: "app/assets/employment.png",
            startDate: new Date(2014, 6, 1),
            endDate : null
        },
        {
            name: "UPS Store",
            title: "Shipping Specialist",
            description: [],
            logoUrl: "app/assets/employment.png",
            startDate: new Date(2013, 5, 1),
            endDate : new Date(2014, 6, 1)
        }
    ];

    $scope.experience = [
        {
            name: "Auburn University Smart UAVs",
            title: "Undergraduate Researcher",
            description: ["Worked with another individual on a research problem related to \"See and Avoid\" systems for smart UAVs.",
                "Developed a collision avoidance system in C/C++."],
            startDate: new Date(2016, 5, 20),
            // endDate : new Date(2016, 7, 15)
            endDate: null,
        },
        {
            name: "NASA Undergraduate Research Grant",
            title: "Undergraduate Researcher",
            description: ["Developed a system to mathematically and numerically model contaminant flow in the wake of a chemical spill.",
                "Research funded by the DOW Chemical company and the NASA undergraduate research grant."],
            startDate: new Date(2015, 5, 1),
            endDate : new Date(2016, 5, 1)
        }
    ];

    $scope.education = [
        {
            name: "Marshall University",
            description: ["Bachelors Degree in Computer Science",
                "Bachelors Degree in Applied Mathematics",
                "Projected graduation May 2017"],
            GPA: "4.0",
            startDate: new Date(2014, 6, 1),
            endDate : new Date(2017, 5, 1)
        },
        {
            name: "Rose Hill Christian School",
            description: ["High School Diploma"],
            GPA: "4.2",
            startDate: new Date(2009, 8, 1),
            endDate : new Date(2013, 5, 1)
        }
    ];

    $scope.skills = {
        Languages: ["Skilled with Java, C++, C#, Python, Javascript, PHP, C, Lua", "Some experience with Objective-C, Matlab, and Mathematica"],
        Technologies: ["OpenCV, OpenGL, SciPy, NumPy, Matplotlib, Java AWT and Swing, JavaFX",
            "HTML5+CSS3, AngularJS, ASP.NET, Django, Laravel, Node.js",
            "Cordova, Ionic, Corona SDK, Android dev",
            "Arduino, Raspberry Pi, other electronics"],
        Other: ["Excellent written and oral communication skills", "Motivated, driven, and self-starting", "Work well as a team member or an individual"]
    }
}]);