        let trafficColor = "Red";
        let action;

        // ///using if else statements
        if (trafficColor === "Red") {
        action = "stop";
        } else if (trafficColor === "Green") {
        action = "go";
        } else if (trafficColor == "Yellow") {
        action = "get ready";
        } else {
        console.log("Invalid traffic color");
        }

        console.log(action);

        ///using switch

        switch (trafficColor) {
        case "Yellow":
            action = "get ready";
            break;

        case "Red":
            action = "Stop";
            break;
        case "Green":
            action = "go";
            break;

        default:
            console.log("Invalid traffic color");
        }

        console.log(action);